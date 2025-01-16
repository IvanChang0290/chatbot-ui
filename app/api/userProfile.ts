import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {

        const userProfile = {
            company: 'test1',
            department: 'test2',
            position: 'test3',
            permissions: 'test4'
        };

        res.status(200).json(userProfile);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
