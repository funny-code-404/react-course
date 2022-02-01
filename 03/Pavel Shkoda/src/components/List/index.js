import ListItem from './ListItem';

const List = ({ children }) => {
  return <ul>{children}</ul>;
};

List.Item = ListItem;

export default List;
