// src/app/api/webhook/route.ts
// וודא שאתה מייבא מ- 'next/server' ולא מ- 'next'
import { NextRequest, NextResponse } from 'next/server';

const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN || ''; 


export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get('hub.mode');
  const token = req.nextUrl.searchParams.get('hub.verify_token');
  const challenge = req.nextUrl.searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('✅ Webhook verified');
    // חובה להחזיר NextResponse או Response
    return new NextResponse(challenge as string, { status: 200, headers: { 'Content-Type': 'text/plain' } });
  } else {
    console.warn('❌ Verification failed');
    return new NextResponse('Verification failed', { status: 403 });
  }
}


export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('📩 Webhook event received:', JSON.stringify(body, null, 2));
  return new NextResponse(null, { status: 200 }); 
}