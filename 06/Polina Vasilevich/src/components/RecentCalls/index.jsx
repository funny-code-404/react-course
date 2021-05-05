import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import { List, ListItem, Info } from "./styles";

const RecentCalls = (props) => {
  const { name } = useParams();
  const contact = props.data.filter((item) => item.name === name)[0];

  if (!contact) {
    return <NotFoundPage />;
  }

  return (
    <Info>
      <h2>List of recent calls</h2>
      <List>
        {contact.recentCallsList.map((phone, index) => (
          <ListItem key={index}>
            <Link to={`/numbers/${phone}`}>{phone}</Link>
          </ListItem>
        ))}
      </List>
    </Info>
  );
};

export default RecentCalls;
