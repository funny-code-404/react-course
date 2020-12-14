import React from 'react'
import withUnique from '../../hocks/withUnique'
import ItemsInfo from '../ItemsInfo'

const UniqueInfo = (props) => {
    const MyComponent = withUnique(ItemsInfo)
    return (
        <div>
            <MyComponent src={props.src} />
        </div>
    )
}
export default UniqueInfo
