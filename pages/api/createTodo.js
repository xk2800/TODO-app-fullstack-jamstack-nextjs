import { table } from './utils/AirTable';
import { getSession } from 'next-auth/client';


export default async function (req, res) {

    const session = await getSession({ req });
    if (session) {
        // Signed in
        console.log('Session', JSON.stringify(session, null, 2));

        const { description } = req.body;

        try {
            const createdRecords = await table.create([{ fields: { description, userId: session.user.email } }]);
            const createdRecord = {
                id: createdRecords[0].id,
                fields: createdRecords[0].fields
            };
            res.status(200).json(createdRecord);
        } catch (err) {
            console.log(err);
            res.status(500).json({ Message: 'Something Went Wrong' });
        }
    } else {
        // Not Signed in
        res.status(401).json({ Status: '401 Unauthorized', Message: 'Not Authenticated'})
    }
    res.end();

}
