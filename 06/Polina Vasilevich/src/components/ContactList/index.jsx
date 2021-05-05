import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { List, ListItem, Photo } from "./styles";

const ContactList = (props) => {
  return (
    <List>
      {props.data.map((item) => (
        <ListItem key={item.id}>
          <Photo photo={item.photo} />
          <Link
            className="link"
            to={
              props.isContactName
                ? `/contacts/${item.name}`
                : `/numbers/${item.phone}`
            }
          >
            {props.isContactName ? item.name : item.phone}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  isContactName: PropTypes.bool.isRequired,
};

ContactList.defaultProps = {
  data: [],
  isContactName: false,
};

export default ContactList;
