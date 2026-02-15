import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const { template_params } = request.body;

    if (!template_params) {
        return response.status(400).json({ error: 'Missing template_params' });
    }

    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        return response.status(500).json({ error: 'EmailJS environment variables are not configured' });
    }

    try {
        const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: SERVICE_ID,
                template_id: TEMPLATE_ID,
                user_id: PUBLIC_KEY,
                template_params,
            }),
        });

        if (emailjsResponse.ok) {
            return response.status(200).json({ message: 'Email sent successfully' });
        } else {
            const errorText = await emailjsResponse.text();
            console.error('EmailJS Error:', errorText);
            return response.status(emailjsResponse.status).json({ error: 'Failed to send email' });
        }
    } catch (error) {
        console.error('Server error:', error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
