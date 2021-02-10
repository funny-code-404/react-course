import React from 'react';
import Header from './header/header';
import Sidebar from './sidebar';
import Main from './main';
import './style.scss';

const sidebars = [
    { id: 1, label: 'Main'},
    { id: 2, label: 'Themes'},
    { id: 3, label: 'Colors'},
    { id: 4, label: 'Fonts'},
    { id: 5, label: 'Images'},
  ];

const cards = [
    {
       id: 1,
       img: 'https://klike.net/uploads/posts/2019-05/1558940144_1.jpg',
       title: 'First card',
       text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  et, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
    },
    {
       id: 2,
       img: 'https://99px.ru/sstorage/53/2012/11/tmb_54054_2207.jpg',
       title: 'Second card',
       text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  et, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
    },
    {
       id: 3,
       img: 'https://oboitut.com/uploads/posts/2015-02/thumbs/oboitut.com_1423901876.jpg',
       title: 'Third card',
       text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  et, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
    },
  ];
function App () { 
        return (
         <div className='app'>
             <Header />
             <div className='container'>
             <Sidebar title='My sidebar'  sidebars={sidebars}/>
             <Main cards={cards}/>
             </div>
         </div>
     )
 }

 export default App;