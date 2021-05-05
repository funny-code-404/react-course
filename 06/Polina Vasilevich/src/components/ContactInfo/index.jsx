import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import PropTypes from "prop-types";
import ContactList from "../ContactList";
import NotFoundPage from "../NotFoundPage";
import { Info, InfoItem, Photo, GoBackButton } from "./styles";

const ContactInfo = (props) => {
  const { name, phone } = useParams();
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  const contact = name
    ? props.data.filter((item) => item.name === name)[0]
    : props.data.filter((item) => item.phone === phone)[0];

  if (!contact) {
    return <NotFoundPage />;
  }

  return (
    <Info>
      <Photo photo={contact.photo} />
      {name ? (
        <Link
          className="infoPhone"
          to={`/contacts/${contact.name}/recentcalls`}
        >
          {contact.phone}
        </Link>
      ) : (
        <InfoItem>{contact.name}</InfoItem>
      )}

      <h2>{name ? "Friends list" : "Phones list"}</h2>
      <ContactList data={contact.friends} isContactName={name} />

      <GoBackButton onClick={handleGoBack}>
        <BiArrowBack />
      </GoBackButton>
    </Info>
  );
};

ContactInfo.propTypes = {
  data: PropTypes.array.isRequired,
  isContactName: PropTypes.bool.isRequired,
};

ContactInfo.defaultProps = {
  data: [],
  isContactName: false,
};

export default ContactInfo;
