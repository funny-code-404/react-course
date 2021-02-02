import React from 'react'
import './navigationList.css'

export const NavigationList = (props) => {
  const navList = props.items;
  const listItems = navList.map((item) =>
    <li><a href="#">{item}</a></li>
  );

  return (
    <nav>
       <ul>{listItems}</ul>
    </nav>
   
  );
}

export default NavigationList;