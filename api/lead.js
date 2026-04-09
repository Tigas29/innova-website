// Vercel Serverless Function — captura leads e salva no Notion
// Database: "Leads — Site" no projeto INNOVA MOVIMENTO (Toka)

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = 'fe5314a2246a488ab225636e608b6da7';

export default async function handler(req, res) {
  // CORS — permite chamadas do próprio domínio
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nome, whatsapp, email, objetivo, origem, pagina } = req.body;

    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          'Nome': {
            title: [{ text: { content: nome || '' } }]
          },
          'WhatsApp': {
            phone_number: whatsapp || null
          },
          'Email': {
            email: email || null
          },
          'Objetivo': {
            rich_text: [{ text: { content: objetivo || '' } }]
          },
          'Como nos encontrou': {
            rich_text: [{ text: { content: origem || '' } }]
          },
          'Página': {
            rich_text: [{ text: { content: pagina || '' } }]
          },
        },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Notion error:', err);
      return res.status(500).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
