import React from 'react';

let catsLink = 'https://api.thecatapi.com/v1/breeds'
class CatFetch extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         cat: null,
      }
   }

   async componentDidMount() {
      try {
      const catFetch = await fetch(catsLink);
      const catJson = await catFetch.json();
      this.setState({ 
         cat: catJson.map(item => ({
            id: item.id,
            name: item.name,
            image: item.image?.url,
            temperament: item.temperament,
            wikipedia_url: item.wikipedia_url,
            social_needs: item.social_needs,
            hairless: item.hairless,
            child_friendly: item.child_friendly,
            dog_friendly: item.dog_friendly,
            mark: 'В этом стейте есть Кот)'
         }))
      });
      }
      catch(error) {
         error = new Error('Ошибка в запросе')
         console.log(error)
      }
   }

   render() {
      const { cat } = this.state;
      const { children } = this.props;
      console.log(cat);

      return (
         Boolean(cat) && (children(cat))
      )
   }
}

export default CatFetch 