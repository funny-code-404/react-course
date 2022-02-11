import { HeaderContainer } from './styles';
import React from 'react';

class Header extends React.Component {

  render(){
    console.log(this.props.cards)
    return (
      <HeaderContainer>
        <div className='wrapper'>
          <h1>Header</h1>
          <h2>Sub Header</h2>
          <div>
            {this.props.cards.map((el,i) => <section key={i}><h3>{el.title}</h3><p>{el.text}</p><button>Click</button></section>)}
          </div>
          <article>
            <h3>Article title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </p>
          </article>
        </div>
      </HeaderContainer>
    )
  }
}

export default Header;
