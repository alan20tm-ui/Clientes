module.exports = async function handler(req, res) {
  async function getOrderFromSheet(orderCode) {
    const code = String(orderCode || '').trim().toUpperCase();

    if (!code) {
      throw new Error('Código faltante');
    }

    const sheetUrl =
      `${process.env.SHEET_API_URL}?token=${encodeURIComponent(process.env.SHEET_API_TOKEN)}&code=${encodeURIComponent(code)}`;

    const sheetResponse = await fetch(sheetUrl);
    const sheetData = await sheetResponse.json();

    if (!sheetData.ok) {
      throw new Error(sheetData.error || 'Código inválido');
    }

    return {
      code: sheetData.code,
      concept: sheetData.concept,
      amount: Number(sheetData.amount)
    };
  }

  if (req.method === 'GET') {
    try {
      const order = await getOrderFromSheet(req.query.orden);

      return res.status(200).json({
        ok: true,
        code: order.code,
        concept: order.concept,
        amount: order.amount
      });
    } catch (error) {
      return res.status(400).json({
        ok: false,
        error: error.message
      });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Método no permitido'
    });
  }

  try {
    const { name, phone, orderCode } = req.body || {};

if (!name || !phone || !orderCode) {
  return res.status(400).json({
    error: 'Faltan datos para generar el pago'
  });
}

const sheetUrl =
  `${process.env.SHEET_API_URL}?token=${process.env.SHEET_API_TOKEN}&code=${orderCode}`;

const sheetResponse = await fetch(sheetUrl);

const sheetData = await sheetResponse.json();

if (!sheetData.ok) {
  return res.status(400).json({
    error: 'Código inválido'
  });
}

const concept = sheetData.concept;

const amount = Number(sheetData.amount);

    if (!process.env.MP_ACCESS_TOKEN) {
      return res.status(500).json({
        error: 'MP_ACCESS_TOKEN no está configurado'
      });
    }

    const order = await getOrderFromSheet(orderCode);

    const preference = {
      items: [
        {
          title: order.concept,
          quantity: 1,
          currency_id: 'MXN',
          unit_price: order.amount
        }
      ],
      payer: {
        name,
        phone: {
          number: phone
        }
      },
      external_reference: order.code,
      back_urls: {
        success: 'https://pagos.teinvitoamiboda.online/success.html',
        failure: 'https://pagos.teinvitoamiboda.online/error.html',
        pending: 'https://pagos.teinvitoamiboda.online/pending.html'
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
