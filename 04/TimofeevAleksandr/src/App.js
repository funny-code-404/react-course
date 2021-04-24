import React from 'react'
import styled from 'styled-components'
import DogContainer from './components/dogContainer'
import Navigation from './components/navigation'


const AppContainer = styled.div`
  width: 100%;
`

class App extends React.Component{
  state=({
    nameDogs : ['affenpinscher', 'basenji', 'chihuahua', 'eskimo', 'groenendael'],
    urlImg: '',
  })

  getDogName = (name) => {
try{
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
  .then(r => r.json())
   .then(url => this.setState(prevState => ({
     ...prevState,
     urlImg: url.status !== 'error' ? url.message : false
   })))
} catch (error){
  console.log(error);
}}

  componentDidMount(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
     .then(r => r.json())
      .then(url => this.setState(prevState => ({
        ...prevState,
        urlImg: url.status !== 'error' ? url.message : false
      })))
  }

  render(){
    const { nameDogs, urlImg } = this.state
  return (
    <AppContainer>
      <Navigation nameDogs={nameDogs} getDogName={this.getDogName}/>
      {urlImg && <DogContainer urlImg={urlImg} />}
    </AppContainer>
  )
}
}

export default App
