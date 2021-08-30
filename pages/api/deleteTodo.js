import { table, getMinifiedRecord } from './utils/AirTable';

export default async function (req, res) {

    const { id } = req.body;

    try {
        const deletedRecord = await table.destroy([id]);
        res.status(200).json(getMinifiedRecord(deletedRecord));

    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Something Went Wrong' });
    }

}
