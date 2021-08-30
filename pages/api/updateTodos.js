import { table, getMinifiedRecord } from './utils/AirTable';

export default async function (req, res) {

    const { id, fields } = req.body;

    try {
        const updatedRecord = await table.update([{id, fields }]);
        res.status(200).json(getMinifiedRecord(updatedRecord));
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Something Went Wrong' });
    }

}
