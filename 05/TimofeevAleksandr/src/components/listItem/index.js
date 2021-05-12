import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
  list-style: none;
  width: 31%;
  margin: 20px 1%;
  padding: 0;
  display: flex;
  flex-direction: column;
    h2{
      margin: 0;
      padding: 6px;
      font-size: 1.3rem;
      background: #8ecfcf;
      border-bottom: 1px solid #8ecfcf;
    }
    p{
      margin: 0;
      padding: 12px;
      font-size: 1.1rem;
      background: #f4e3c5;
    }
    button{
      margin: 0 3px;
    }
    .buttonsWrapper{
      flex-direction: row;
      align-self: flex-end;
      padding: 3px 6px 3px 0;
    }
    .no-active{
      background: gray;
      border-bottom: 1px solid white;
    }
`

class ListItem extends React.Component{
state ={

}

  handleClickActive = () => {
    const { id } = this.props.data
    this.props.activeNote(id)
  }

  handleClickDelete = (e) => {
    this.props.deleteNote(this.props.data.id)
  }

  render() {
    const { text, title, active, id } = this.props.data
    return(
      <>
      <Li id={id}>
        <div className="buttonsWrapper">
          <button onClick={this.handleClickActive} title='отметить как выполнено' >&#10004;</button>
          <button onClick={this.handleClickDelete} title='удалить заметку' >&#10008;</button>
        </div>
        <h2 className={active ? '' : 'no-active'} >{title}</h2>
        <p className={active ? '' : 'no-active'} >{text}</p>
      </Li>
      </>
    )
  }
}

export default ListItem
