// Next.js API route support: ehttps://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  result: boolean,
  msg: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    console.log(req.body.body)
    setTimeout(() => {
      console.log('file uploaded')
      return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3000);
  } else {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
  }
}