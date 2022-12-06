import { ISendMailData } from 'types/form';
import axios from 'axios';

export const sendMail = (data: ISendMailData) =>
  axios.post('/api/send-mail', data).then((res) => res.data);
