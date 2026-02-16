import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  // Mailchimp API configuration
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = 'us6'; // Hardcoded for now

  if (!API_KEY || !LIST_ID) {
    // For demo: just log and return success
    console.log('Newsletter signup (demo mode):', email);
    return NextResponse.json({ success: true, message: 'Subscribed! (demo mode)' });
  }

  try {
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    if (response.status >= 400) {
      const data = await response.json();
      if (data.title === 'Member Exists') {
        return NextResponse.json({ success: true, message: 'Already subscribed!' });
      }
      throw new Error(data.detail || 'Subscription failed');
    }

    return NextResponse.json({ success: true, message: 'Subscribed!' });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}
