import sendmail from 'sendmail';
import { NextApiResponse, NextApiRequest } from 'next';
import { ISendMailData } from 'types/form';

const mailer = sendmail({});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  try {
    mailer(
      {
        from: 'no-reply@ooo-eric.ru',
        to: 'denis.sokolov@saltpepper.ru',
        subject: 'Обратная связь',
        html: getHtml(req.body)
      },
      (err, domain) => {
        if (err) throw err;
      }
    );

    res.status(200).json({ data: 'success' });
  } catch (e) {
    res.status(500).send(e);
  }
}

const keyNames: TKeys = {
  name: 'Наименование организации / ФИО',
  contactPerson: 'Контактное лицо',
  personalAccount: 'Лицевой счет',
  address: 'Адрес*',
  email: 'Email*',
  phone: 'Контактный телефон*',
  message: 'Сообщение*'
};

const getHtml = (data: ISendMailData): string => {
  return Object.keys(data)
    .map((key) => `<p>${keyNames[key]}: ${data[key] || '-'}</p>`)
    .join('');
};

type TKeys = {
  [key: string]: string;
};
