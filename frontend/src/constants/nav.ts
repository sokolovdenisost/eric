export interface NavType {
  title: string;
  href: string;
}

export const nav: NavType[] = [
  {
    title: 'Новости',
    href: '/news'
  },
  {
    title: 'Нормативно-правовая база',
    href: '/normative-base'
  },
  {
    title: 'Реквизиты',
    href: '/requisites'
  },
  {
    title: 'Обратная связь',
    href: '/feedback'
  }
];
