import React from 'react';
import './styles.css';


class Map extends React.Component{
  state = {
    clientX : this.props.match.params.uuid,
    clientY : this.props.match.params.id,
  }

  handleClick = (e) => {
    const { clientX, clientY } = e
    const { history } = this.props
    history.push(`/map/${clientX}/${clientY-80}`)
  }

  clickGoBack = () => {
    this.props.history.goBack()
  }

  render(){
    const { id, uuid } = this.props.match.params
    return(
    <>
    <button className="go-back" onClick={this.clickGoBack}>go back</button>

      <div onClick={this.handleClick} className="container">
        {uuid !== '0' && id !== '0' &&
          <div className="point"
                style={{position:'absolute', top:`${uuid-40}px`, left:`${id}px` }}>
            {uuid}
              <br />
            {id}
          </div>}
      </div>
    </>
    )
  }
}

export default Map
