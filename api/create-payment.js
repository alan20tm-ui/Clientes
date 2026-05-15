module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
  try {
    const orderCode = String(req.query.orden || '').trim().toUpperCase();

    if (!orderCode) {
      return res.status(400).json({ ok: false, error: 'Código faltante' });
    }

    const sheetUrl =
      `${process.env.SHEET_API_URL}?token=${process.env.SHEET_API_TOKEN}&code=${orderCode}`;

    const sheetResponse = await fetch(sheetUrl);
    const sheetData = await sheetResponse.json();

    if (!sheetData.ok) {
      return res.status(400).json({ ok: false, error: 'Código inválido' });
    }

    return res.status(200).json({
      ok: true,
      code: sheetData.code,
      concept: sheetData.concept,
      amount: Number(sheetData.amount)
    });

  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
}
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Método no permitido'
    });
  }

  try {
    const { name, phone, concept, amount } = req.body || {};

    if (!name || !phone || !concept || !amount) {
      return res.status(400).json({
        error: 'Faltan datos para generar el pago'
      });
    }

    if (!process.env.MP_ACCESS_TOKEN) {
      return res.status(500).json({
        error: 'MP_ACCESS_TOKEN no está configurado'
      });
    }

    const preference = {
      items: [
        {
          title: concept,
          quantity: 1,
          currency_id: 'MXN',
          unit_price: Number(amount)
        }
      ],
      payer: {
        name,
        phone: {
          number: phone
        }
      },
      back_urls: {
        success: 'https://clientes-xi.vercel.app/pagos/success.html',
        failure: 'https://clientes-xi.vercel.app/pagos/error.html',
        pending: 'https://clientes-xi.vercel.app/pagos/pending.html'
      },
      auto_return: 'approved'
    };

    const mpResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(preference)
    });

    const result = await mpResponse.json();

    if (!mpResponse.ok) {
      return res.status(500).json({
        error: 'Mercado Pago rechazó la preferencia',
        detail: result
      });
    }

    return res.status(200).json({
      init_point: result.init_point
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};
