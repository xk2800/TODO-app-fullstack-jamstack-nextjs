import { table, getMinifiedRecord } from './utils/AirTable';

export default async function (req, res) {
    try {
        const records = await table.select({}).firstPage();
        const minifiedRecords = getMinifiedRecord(records);
        res.status(200).json(minifiedRecords);
    } catch (err) {
        res.status(500).json({ Message: 'Something Went Wrong' });
    }

}
