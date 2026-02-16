import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  if (!API_KEY || !LIST_ID) {
    return NextResponse.json({ 
      success: true, 
      message: 'Demo mode - email logged: ' + email 
    });
  }

  // API key format: key-usX (e.g., 28f8fa...-us6)
  const dc = API_KEY.includes('-') ? API_KEY.split('-')[1] : 'us6';
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
  const auth = Buffer.from('anystring:' + API_KEY).toString('base64');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  });

  const data = await res.json();
  
  if (!res.ok) {
    return NextResponse.json({ data, status: res.status });
  }

  return NextResponse.json({ success: true, data });
}
