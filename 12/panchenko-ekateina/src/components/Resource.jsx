import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  padding: 30px;
  width: 80%;

  @media (max-width: 590px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Item = styled.li`
  font-size: 20px;
  font-size: 25px;
  list-style-type: none;
  text-transform: uppercase;
  padding-bottom: 10px;
`;

const LinkItem = styled(Link)`
  color: #fff;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
`;

export const Resource = ({ url, action, data, type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (url && !data) {
      dispatch(action(url));
    }
  }, [url, data]);

  return (
    <List>
      {data?.map((item) => (
        <Item key={item.id}>
          <LinkItem
            to={{
              pathname: `/${type}/${item.name.toLowerCase()}`,
              state: {
                data: item,
              },
            }}
          >
            {item.name}
          </LinkItem>
        </Item>
      ))}
    </List>
  );
};
