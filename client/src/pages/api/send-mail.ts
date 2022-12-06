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
        to: process.env.MAIL || '',
        subject: req.body.subject,
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
  message: 'Сообщение*',
  gvs1: 'ГВС №1',
  gvs2: 'ГВС №2',
  hvs1: 'ХВС №1',
  hvs2: 'ХВС №2'
};

const getHtml = (data: ISendMailData): string => {
  return Object.keys(data)
    .map((key) =>
      keyNames[key] ? `<p>${keyNames[key]}: ${data[key] || '-'}</p>` : ''
    )
    .join('');
};

type TKeys = {
  [key: string]: string;
};
