import React from 'react';
import './style.scss';

const arr = [
  'Website Desing & Development',
  'Branding & Lago Design',
  'Graphic & Print Design',
  'Search Engine Opttimization'
];

class Main extends React.Component {
  render() {
    return (
    <main>
      <div className='main-text'>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Unde aliquam repudiandae quidem, ullam, id animi dolorem, eaque voluptates veritatis velit fugit pariatur!
       Obcaecati ad sequi quidem cumque est perferendis vero esse assumenda ipsam, in fugiat nostrum,
       officia sapiente architecto reiciendis fuga ipsum eius dolore error ut labore saepe</p>
      <button>LEARN MORE</button></div>
      <div className='main-info'>
        <div className='main-info-list'>
          <h3>Our services</h3>
          <ul>
            {arr.map((item, i) => {
              return<li key={i}>{item}</li>
            })}
          </ul>
        </div>
        <div className='main-info-text'>
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Possimus perspiciatis officia nostrum, tenetur cupiditate culpa nobis porro.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Vel placeat autem voluptates aliquam quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit maxime ut</p>
          <button>Readmore</button>
        </div>
        <div className='main-info-contacts'>
          <h3>Get in Touch</h3>
          <p><span>Tel</span>98458210478</p>
          <p><span>Email</span>info@aceinfowayindia.com</p>
          <p><span>web</span>abcxxx.com</p>
        </div>
      </div>
    </main>
    )
  }
}


export default Main;