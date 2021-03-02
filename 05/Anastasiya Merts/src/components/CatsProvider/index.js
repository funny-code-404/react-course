import React from 'react';

class CatsProvider extends React.Component {

    state = {
        data: null,
    };

    async componentDidMount() {
        console.log("componentDidMount CatsProvider");
        try {
            const items = await fetch('https://api.thecatapi.com/v1/breeds');
            const dataJson = await items.json();
            console.log(dataJson);

            this.setState({
                data: dataJson?.map( (item) => ({
                    id: item.id,
                    name: item.name,
                    src: item.image?.url,
                    description: item.description,
                    temperament: item.temperament,
                    weight: item.weight.metric,
                    life: item.life_span,
                }))
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { data } = this.state;
        const { children } = this.props;
        return Boolean(data) && children(data);
    }
}

export default CatsProvider;