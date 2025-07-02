import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phoneNumber } = req.body;

  await fetch(`${process.env.BACKEND_SERVER}/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phoneNumber }),
  });

  res.status(200).json({ message: 'Triggered' });
}