// this is a serverless function that will be used to handle the contact form submission from vercel
export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ ok: false });
  
    try {
      const { name, email, message, company } = req.body || {};
  
      // Honeypot anti spam
      // if the company field is filled, almost certainly is a bot
      if (company) return res.status(200).json({ ok: true });
  
      if (!name || !email || !message) {
        return res.status(400).json({ ok: false, error: "Missing fields" });
      }
  
      const apiKey = process.env.RESEND_API_KEY;
      const to = process.env.CONTACT_TO;     // my email
      const from = process.env.CONTACT_FROM; // sub domain added from resend
  
      if (!apiKey || !to || !from) {
        return res.status(500).json({ ok: false, error: "Server misconfigured" });
      }
  
      const subject = `Portfolio enquiry — ${name}`;
      const html = `
        <div style="font-family:ui-sans-serif,system-ui">
          <h2>New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
        </div>
      `;
  
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject,
          html,
        }),
      });
  
      if (!r.ok) {
        const errText = await r.text();
        return res.status(502).json({ ok: false, error: errText });
      }
  
      return res.status(200).json({ ok: true });
    } catch (e) {
      return res.status(500).json({ ok: false, error: "Unexpected error" });
    }
  }
  
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
  
