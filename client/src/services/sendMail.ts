import axios from 'axios';

interface IMailOptions {
  subject: string;
}

export const sendMail = <T>(data: T, options: IMailOptions) =>
  axios.post('/api/send-mail', { ...data, ...options }).then((res) => res.data);
