import { Header } from "./componets/header/Header";
import { Main } from "./componets/main/Main";
import { Footer } from "./componets/footer/Footer";

import facebook from "./img/facebook.png";
import twit from "./img/twit.png";
import g from "./img/g+.png";
import lin from "./img/lin.png";

const store = {
  menu: [
    "О квартале",
    "Апартаменты",
    "Онлайн-покупка",
    "Галерея",
    "Акции и новости",
    "Контакты",
  ],
  contact: ["Заказать звонок", "+7 (495) 135-19-05"],
  buttonContent: ["Выбрать апартаменты", "Ипотека от 0,1%"],
  mainTitle: "Готовый квартал De Luxe на Поварской",
  footerContact: [facebook, twit, g, lin],
};

export const App = () => (
  <>
    <Header menu={store.menu} contact={store.contact} />
    <Main buttonContent={store.buttonContent} mainTitle={store.mainTitle} />
    <Footer footerContact={store.footerContact} />
  </>
);
