import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

import DataContext from "../Context/dataContext";
import { CarListContainer, ListItem } from "./styles";

const CarList = () => {
  const data = useContext(DataContext);
  const location = useLocation();

  const activeLinkId = location ? location.pathname.slice(1) : "";

  return (
    <CarListContainer>
      <ul>
        {data.map(({ id, name }) => (
          <ListItem key={id}>
            <Link
              className={classnames("link", {
                activeLink: activeLinkId === id.toString(),
              })}
              to={`/${id}`}
            >
              {name[0].toUpperCase() + name.slice(1).toLowerCase()}
            </Link>
          </ListItem>
        ))}
      </ul>
    </CarListContainer>
  );
};

export default CarList;
