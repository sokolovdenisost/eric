import sendmail from 'sendmail';
import {NextApiResponse, NextApiRequest} from 'next'

const mailer = sendmail({
  devPort: 3000
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  try {
    mailer({
      from: 'no-reply@ooo-eric.ru',
      to: 'denis.sokolov@saltpepper.ru',
      subject: "Обратная связь",
      html: "test",
    }, (err, domain) => {
      if (err) throw err;
    })

    res.status(200).json({ data: 'success' });
  } catch (e) {
    res.status(500).send(e);
  }
}