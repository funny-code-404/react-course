import React from 'react';

class CatsDataProvider extends React.Component {
  state = {
    data: null
  }

  async componentDidMount() {
    try {
      const items = await fetch('https://api.thecatapi.com/v1/breeds');
      const json = await items.json();
      this.setState({
        data: json?.map(item => ({
          id: item.id,
          name: item.name,
          image: item.image?.url,
          temperament: item.temperament,
          origin: item.origin,
          description: item.description,
          weight: item.weight?.metric,
          lifeLenght: item.life_span
        }))
      })
    } catch (error) {
      console.log(error)
      }
    }

  render() {
    const { data } = this.state;
    const { children } = this.props;
    return  Boolean(data) && children(data);      
  }
}

export default CatsDataProvider;