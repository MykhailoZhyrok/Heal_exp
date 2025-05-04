import './LinksList.scss'

import { Link } from 'react-router'

const links = [
  {
    title: 'КООРДИНАЦІЙНИЙ ШТАБ З ПИТАНЬ ПОВОДЖЕННЯ З ВІЙСЬКОВОПОЛОНЕНИМИ',
    url: 'https://roadmap.koordshtab.gov.ua/missing-in-action/',
    img: '/img/koordshtab.svg',
    description: 'Державна структура, що організовує взаємодію між установами для пошуку зниклих військовослужбовців та цивільних під час війни.'
  },
  {
    title: 'Пошук зниклих осіб (Poshuk.io)',
    url: 'https://poshuk.io/uk/golovna/',
    img: '/img/poshukio.png',
    description: 'Онлайн-платформа для об\'єднання запитів на пошук зниклих людей в Україні. Надає можливість швидкого доступу до актуальної інформації.'
  },
  {
    title: 'Електронна форма звернення СБУ',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScCpF9IMFayFWVH3gABn4fR6iIlPnX81rw93tFtV6PqrzeOtQ/viewform',
    img: '/img/sbu.svg',
    description: 'Офіційний спосіб подати запит або заяву щодо зниклих безвісти чи полонених через Службу безпеки України.'
  },
  {
    title: 'Подача заявки на пошук (URU Precase)',
    url: 'https://uruprecase.powerappsportals.com/uk-UA/create-request/',
    img: '/img/uru.png',
    description: 'Портал для подання електронної заявки на розшук осіб через державні та міжнародні канали координації.'
  },
  {
    title: 'Міжнародна комісія з питань зниклих безвісти (ICMP)',
    url: 'https://icmp.int/uk/',
    img: '/img/icmp.svg',
    description: 'Міжнародна організація, що допомагає країнам розслідувати випадки зникнення людей та підтримує сім’ї у процесі пошуку.'
  },
  {
    title: 'Telegram-бот для пошуку (@PoShukachInfoBot)',
    url: 'https://t.me/PoShukachInfoBot',
    img: '/img/poShukachInfoBot.png',
    description: 'Інструмент для швидкої реєстрації запитів про зниклих осіб через мобільні пристрої та поширення інформації серед спільноти.'
  },
  {
    title: 'Національне інформаційне бюро України (NIB)',
    url: 'https://nib.gov.ua/',
    img: '/img/nib.svg',
    description: 'Офіційний ресурс Міністерства з питань реінтеграції, який займається збором та обробкою інформації про зниклих під час війни осіб.'
  },
  {
    title: 'Електронні сервіси МВС України',
    url: 'https://services.mvs.gov.ua/',
    img: '/img/mvs.png',
    description: 'Державний портал для подання заяв щодо зниклих осіб, перевірки статусу справ та доступу до актуальної інформації.'
  },
]

export const LinksList = () => {
  return (
    <div className="linksList">
      <ul className="linksList__items">
        {links.map((link, index) => (
          <li key={index} className="linksList__item">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="linksList__link">
              <img src={link.img} alt={link.title} className="linksList__img" />

              <span className="linksList__text">{link.title}</span>
            </a>
            <p className="linksList__description">{link.description}</p>
          </li>
        ))}
      </ul>


      <div className="linksList__source">
        <p>
          Усі посилання зібрані на основі відкритих державних та офіційних ресурсів.  
          Ми ретельно перевіряємо їхню актуальність і достовірність, щоб надати вам найефективніші інструменти для допомоги у пошуку зниклих людей.
        </p>


        <Link to='/contact' className='contactButton'> Пропозиції та побажання </Link>
      </div>
    </div>
  )
}
