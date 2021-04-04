import { useEffect, useState } from "react";
import { API } from "../api";
import { LinkContainer } from "./LinkContainer";
import styled from "styled-components";
import background from "../img/ageOfEmpirescivilization.jpg";
import { Container, FullBack } from "./style";

const Description = styled.div`
  background: #000;
  color: #e5b378;
  font-size: 25px;
  margin: auto;
  padding: 50px;
  width: 35%;
  @media (max-width: 780px) {
    width: 90%;
    font-size: 20px;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 30px;
`;

export const Item = ({ location: { state } }) => {
  const [data, setData] = useState(state.data);

  useEffect(() => {
    if (state.link) {
      API.get(state.link)
        .then((res) => res.json())
        .then((response) => {
          setData(response);
        });
    }
  }, [state.link]);

  useEffect(() => {
    if (state.data) {
      setData(state.data);
    }
  }, [state.data]);

  if (!data) {
    return null;
  }

  const List = (data, title) =>
    data && (
      <div>
        {title}:{" "}
        {typeof data === "string" ? (
          <p>{data}</p>
        ) : (
          <StyledList>
            {data.map((item, index) => (
              <li key={`${item}_${index}`}>{item}</li>
            ))}
          </StyledList>
        )}
      </div>
    );

  const Content = (data) => {
    const {
      accuracy,
      age,
      applies_to,
      armor,
      army_type,
      attack,
      attack_bonus,
      attack_delay,
      build_time,
      civilization_bonus,
      cost,
      created_in,
      description,
      develops_in,
      expansion,
      hit_points,
      line_of_sight,
      movement_rate,
      name,
      range,
      reload_time,
      special,
      team_bonus,
      unique_tech,
      unique_unit,
    } = data;

    return (
      <Container background={background}>
        <FullBack>
          <Description>
            {name && <p>Name: {name}</p>}
            {description && <p>Description: {description}</p>}
            {expansion && <p>Expansion: {expansion}</p>}
            {accuracy && <p>Accuracy: {accuracy}</p>}
            {movement_rate && <p>Movement rate: {movement_rate}</p>}
            {attack && <p>Attack: {attack}</p>}
            {List(attack_bonus, "Attack bonus")}
            {attack_delay && <p>Attack delay: {attack_delay}</p>}
            {army_type && <p>Army type: {army_type}</p>}
            {team_bonus && <p>Team bonus: {team_bonus}</p>}
            {List(civilization_bonus, "Civilization bonus")}
            {age && <p>Age: {age}</p>}
            {cost?.Wood && <p>Cost wood: {cost.Wood}</p>}
            {cost?.Food && <p>Cost food: {cost.Food}</p>}
            {cost?.Gold && <p>Cost gold: {cost.Gold}</p>}
            {build_time && <p>Build time: {build_time}</p>}
            {reload_time && <p>Reload time: {reload_time}</p>}
            {hit_points && <p>Hit points: {hit_points}</p>}
            {range && <p>Range: {range}</p>}
            {line_of_sight && <p>Line of sight: {line_of_sight}</p>}
            {armor && <p>Armor: {armor}</p>}
            {List(special, "Special")}
            {develops_in && (
              <LinkContainer title="Develops in" link={develops_in} />
            )}
            {created_in && (
              <LinkContainer title="Created in" link={created_in} />
            )}
            {unique_unit && (
              <LinkContainer title="Unique unit" link={unique_unit} />
            )}
            {applies_to && (
              <LinkContainer title="Applies to" link={applies_to} />
            )}
            {unique_tech && (
              <LinkContainer title="Unique tech" link={unique_tech} />
            )}
          </Description>
        </FullBack>
      </Container>
    );
  };

  return (
    <>
      {Array.isArray(data) ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{Content(item)}</li>
          ))}
        </ul>
      ) : (
        <div>{Content(data)}</div>
      )}
    </>
  );
};
