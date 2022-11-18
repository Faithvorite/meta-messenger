import type { NextApiRequest, NextApiResponse} from 'next'

type Data = {
    name:string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if(req.method !== 'POST') {
        res.status(405).json({name: "method not allowed"});
        return;
    }

    const { message } = req.body; 

    const newMessage = {
        ...message, 
    }
    res.status(200).json({ name: 'john doe'})
}