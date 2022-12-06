import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const formatDate = (date: string): string => {
  return format(new Date(date), 'dd MMMM yyyy', {
    locale: ru
  });
};
