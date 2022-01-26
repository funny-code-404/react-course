import ListItem from './ListItem';

// eslint-disable-next-line react/prop-types
const List = ({ children }) => {
  return <ul>{children}</ul>;
};

List.Item = ListItem;

export default List;
