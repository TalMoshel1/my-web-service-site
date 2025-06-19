import type { NextApiRequest, NextApiResponse } from 'next';

const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN || '';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('✅ Webhook verified');
      return res.status(200).send(challenge as string);
    } else {
      console.warn('❌ Verification failed');
      return res.status(403).send('Verification failed');
    }
  }

  if (req.method === 'POST') {
    console.log('📩 Webhook event received:', JSON.stringify(req.body, null, 2));
    return res.status(200).end();
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
