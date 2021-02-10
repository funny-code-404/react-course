import React from 'react';

import './style.css'

import HeaderBody from './Components/HeaderBody'
import Options from './Components/Options'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Container from './Components/Container'
import Form from './Components/Form'
import Info from './Components/Info'
import FooterContent from './Components/FooterContent'
import MainBlogsContainer from './Components/MainBlogsContainer'
import Main from './Components/Main'
import Blogs from './Components/Blogs'
import Button from './Components/Button';



class App extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Container>

            <Nav title="Навигация">
              <Options />
            </Nav>

            <HeaderBody title="Исследуйте мир вместе с нами" text="Брось себе вызов. Отправься в путешествия в дикие уголки природы.">
              <Form title="Быстрый поиск тура" />
            </HeaderBody>

            <Info 
              title="Почему именно мы" 
              text1="Визовая поддержка клиентов" 
              text2="Направления по всему миру" 
              text3="Сопровождение опытными гидами" 
              text4="Полное обеспечение снаряжением"
            />
          </Container>
        </Header>

        <Main>
          <Container>
            <MainBlogsContainer title="Наш блог">
              <Blogs 
                acticleTitle="10 мест на Земле, которые обязательно должен посетить каждый"
                articleDate="20 окября 2018"
                articleTitle2="Как стать успешным тревел-блогером"
                articleText="Блоги о путешествиях - это актуальное пространство, и каждый день оно становится более переполненным. И многие советы, которые.. "
                infoDate="17 октября 2018"
                articleTitle3="Лайфхаки успешного путешествия по Норвегии"
                articleText2="Норвегия — пожалуй, лучшая страна для приключенческого туризма в Европе. Здесь есть все: горы для альпинистов.."
                infoDate2="12 октября 2018"
              />

              <Button buttonTitle="Смотреть все" />
            </MainBlogsContainer>
          </Container>
        </Main>

        <Footer>
          <Container>
            <FooterContent 
              text1="wildvacation@gmail.com"
              text2="Немига 5а, офис 18,  Минск"
              text3="+375 33 888-44-22"
              text4="+375 29 963-85-21"
              span1="E-mail"
              span2="Адрес"
              span3="Телефоны"
              span4="Мы в соцсетях"
            />
          </Container>
        </Footer>
      </>
    )
  }
}

export default App;