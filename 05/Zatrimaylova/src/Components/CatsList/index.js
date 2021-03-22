import React from 'react';
import styled from 'styled-components';
import CatItem from './CatItem';

class CatsList extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        const { data } = this.props;
        return (
            <CatsListStyled>
                {data.map(item => <CatItem key={item.id} {...item} />)}
            </CatsListStyled>
        )
    }
}

const CatsListStyled = styled.ul`
    padding: 20px;
`;

export default CatsList;