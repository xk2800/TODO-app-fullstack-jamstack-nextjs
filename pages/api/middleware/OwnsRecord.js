import { getSession } from 'next-auth/client';
import { table } from '../utils/AirTable';


const OwnsRecord = (handler) => async (req, res) => {

    const session = await getSession({ req });
    if (session) {
        // Signed in
        console.log('Session', JSON.stringify(session, null, 2));

        const user = await getSession(req);

        const { id } = req.body;

        try {
            const existingRecord = await table.find(id);

            if (!existingRecord || user.email !== existingRecord.fields.userId) {
                res.statusCode = 404;
                return res.json({ Message: "Record not found" });
            }

            req.record = existingRecord;
            return handler(req, res);

        } catch (err) {
            console.log(error);
            res.statusCode = 500;
            res.json({ Message: "Something went wrong" });
        }

    } else {
        // Not Signed in
        res.status(401).json({ Status: '401 Unauthorized', Message: 'Not Authenticated' });
    }
    res.end();
};

export default OwnsRecord;