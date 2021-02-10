import { ListItem } from '../ListItem'

export const DataList = (props) => {
    const { data } = props;

    return (
        <ul>
            {data.map((item, index) => <ListItem key = {index} listItem = {item}/>)}
        </ul>
    )
};