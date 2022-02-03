import React from "react";


import './style.css'

class Main extends React.Component {
    render() {
      const data = [
        {title:'Питание',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id impedit nemo soluta corrupti cupiditate quisquam.',
        id:'124'},

        {title:'Транспорт',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit praesentium corrupti repellat exercitationem ut ratione voluptates vitae cumque sint dicta. Veniam quisquam architecto eveniet distinctio!',
        id:'125'},

        {title:'Экскурсии',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id impedit nemo soluta corrupti cupiditate quisquam.',
        id:'126'},
      ]

      return (
        <main className="container flex-main">
          {data.map((item) => 
            (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <button type='button'>Добавить</button>
            </div>                        
            ))}
        </main>
      );
    }
  }
  
  export default Main;