export default async function handler(req, res) {
  const key = process.env.GEMINI_KEY;
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({contents:[{parts:[{text:req.body.message}]}]})
  });
  const d = await r.json();
  res.json({reply: d.candidates[0].content.parts[0].text});
}
