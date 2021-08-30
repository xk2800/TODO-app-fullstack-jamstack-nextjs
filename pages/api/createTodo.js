import { table } from './utils/AirTable';

export default async function (req, res) {

    const { description } = req.body;

    try {
        const createdRecords = await table.create([{ fields: { description } }]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        };
        res.status(200).json(createdRecord);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Something Went Wrong' });
    }

}
