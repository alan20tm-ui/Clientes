const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

module.exports = async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Método no permitido'
    });
  }

  try {

    const {
      name,
      phone,
      concept,
      amount
    } = req.body;

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
        failure: 'https://clientes-xi.vercel.app/pagos/error.html'
      },

      auto_return: 'approved'
    };

    const response = await mercadopago.preferences.create(preference);

    return res.status(200).json({
      init_point: response.body.init_point
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: error.message
    });
  }
};
