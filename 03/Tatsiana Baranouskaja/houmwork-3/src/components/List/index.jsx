import ListItem from "./Listitem";


const List = ({ children }) => {
    return <ul>{children}</ul>
};

List.Item = ListItem;
export default List;