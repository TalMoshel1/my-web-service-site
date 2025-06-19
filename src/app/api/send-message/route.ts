// app/api/send-message/route.ts
import { NextResponse } from 'next/server';

const ACCESS_TOKEN = process.env.META_VERIFY_TOKEN!;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID!;

export async function POST(req: Request) {
  const body = await req.json();
  const { phoneNumber, name } = body;

  if (!phoneNumber || !name) {
    return NextResponse.json({ error: 'Missing phone number or name' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: phoneNumber,
        type: 'text',
        text: {
          body: `היי ${name}, תודה שנרשמת!`,
        },
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Failed to send:', error);
      return NextResponse.json({ error: 'Failed to send WhatsApp message' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Error:', err);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
