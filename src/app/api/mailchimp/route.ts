import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // 1) Pull email from request body
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // 2) Make sure you have your environment variables set up
    //    e.g. in .env.local:
    //    MAILCHIMP_API_KEY=...
    //    MAILCHIMP_AUDIENCE_ID=...
    //    MAILCHIMP_DC=usXX
    // 
    //    Then access as:
    //    process.env.MAILCHIMP_API_KEY
    //    process.env.MAILCHIMP_AUDIENCE_ID
    //    process.env.MAILCHIMP_DC

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DC = process.env.MAILCHIMP_DC; // e.g. "us21", "us15", etc.

    if (!API_KEY || !AUDIENCE_ID || !DC) {
      return NextResponse.json(
        { error: 'Missing Mailchimp environment variables.' },
        { status: 500 }
      );
    }

    // 3) Craft the request to Mailchimp
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    // 4) Handle Mailchimp response
    if (!response.ok) {
      const data = await response.json();
      return NextResponse.json(
        { error: 'Mailchimp error', details: data },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Any other errors
    return NextResponse.json(
      { error: 'Something went wrong', details: `${error}` },
      { status: 500 }
    );
  }
}