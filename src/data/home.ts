const legacySite = 'https://murzy-kulmametevy8.webnode.ru';

export const navigation = [
  { label: 'История', href: '#history' },
  { label: 'Книга', href: '#book' },
  { label: 'Память', href: '#memory' },
  { label: 'Новости', href: '#news' },
  { label: 'Контакты', href: '#contact' },
];

export const timeline = [
  {
    period: 'Эпоха хана Кучума',
    title: 'Большой князец Бегиш',
    text: 'Сибирские летописи называют Бегиша владетелем Баишева городка и беклярибеком хана Кучума. От него берёт начало род.',
  },
  {
    period: 'Конец XVII — начало XIX века',
    title: 'Головы служилых татар',
    text: 'Кульмаметьевы возглавляют тобольских служилых татар «йомышлы». Род остаётся одним из самых влиятельных татарских родов Сибири.',
  },
  {
    period: '25 апреля 1796',
    title: 'Российское дворянство',
    text: 'Екатерина II причисляет род мурз Кульмаметьевых к российскому дворянству. В тот же день утверждён герб капитана мурзы Сабанака.',
    highlight: true,
  },
  {
    period: '2014',
    title: 'Первое собрание рода',
    text: 'В Центре сибирско-татарской культуры потомки собираются на встречу, посвящённую истории рода и 100-летию Мерхатуллы Кульмаметьева.',
  },
  {
    period: '2017–2020',
    title: 'Памятники в Сабанаках',
    text: 'Возле родового имения появляется памятная стела, а в деревне — табличка с историей на татарском и русском языках.',
  },
  {
    period: '2024',
    title: 'Книга и барельеф',
    text: 'Выходит монография Зайтуны Тычинских, а в Тобольске открывают скульптурную композицию с барельефом мурзы Сабанака.',
  },
];

export const news = [
  {
    date: '2024-08-12',
    label: '12 августа 2024',
    title: 'Установлен барельеф мурзе Сабанаку Второму Кульмаметьеву',
    href: `${legacySite}/l/ustanovlen-bareljef-murze-sabanaku-vtoromu-kulmametjevu/`,
  },
  {
    date: '2024-07-19',
    label: '19 июля 2024',
    title: 'Вышла в свет книга «Мурзы Кульмаметьевы»',
    href: `${legacySite}/l/vyshla-v-svet-dolgozhdannaya-kniga-murzy-kulmametjevy/`,
  },
  {
    date: '2021-11-13',
    label: '13 ноября 2021',
    title: 'Документальный фильм «Йомышлы» телеканала «Тобольское время»',
    href: `${legacySite}/l/5-sposobov-ponimaniya-sovremennogo-iskusstva/`,
  },
  {
    date: '2020-08-03',
    label: '3 августа 2020',
    title: 'Памятная табличка в деревне Сабанаки',
    href: `${legacySite}/l/iskusstvo-ulits-ekskursiya/`,
  },
];

export const allNewsHref = `${legacySite}/zakrytaya-stranitsa/`;

export const contacts = {
  email: 'murza-tmt@bk.ru',
  people: ['мурза Данияр Ахметов', 'мурза Рамиль Аминов'],
};
