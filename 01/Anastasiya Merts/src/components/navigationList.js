import React from 'react'
import './navigationList.css'

export const NavigationList = (props) => {
  const { items } = props;
  const listItems = items.map((item) =>
    <li><a href="#">{item}</a></li>
  );

  return (
    <nav>
       <ul>{listItems}</ul>
    </nav>
   
  );
}

export default NavigationList;