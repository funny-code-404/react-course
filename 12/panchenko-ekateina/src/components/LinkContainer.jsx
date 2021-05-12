import styled from "styled-components";
import { Link } from "react-router-dom";
import { getFormatedName, getFormatedPath, baseUrl } from "../api";
import { memo } from "react";

const StyledLink = styled(Link)`
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
`;

export const LinkContainer = memo(({ title, link, type }) => (
  <p>
    {title}:{" "}
    {typeof link === "string" ? (
      <>
        {link.includes(baseUrl) ? (
          <StyledLink
            to={{
              pathname: getFormatedPath(link),
              state: {
                link,
              },
            }}
          >
            {getFormatedName(link, type)}
          </StyledLink>
        ) : (
          <span>{link}</span>
        )}
      </>
    ) : (
      <>
        {link.map((item, index) =>
          item.includes(baseUrl) ? (
            <StyledLink
              key={`${item}_${index}`}
              to={{
                pathname: getFormatedPath(item),
                state: {
                  link: item,
                },
              }}
            >
              {getFormatedName(item, type)}
              {index !== link.length - 1 ? ", " : ""}
            </StyledLink>
          ) : (
            <span key={`${item}_${index}`}>
              {item}
              {index !== link.length - 1 ? ", " : ""}
            </span>
          )
        )}
      </>
    )}
  </p>
));
