import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';

const backgroundColor = theme.variants("mode", "variant", {
  default: { light: "gray", dark: "darkgray" },
  primary: { light: "blue", dark: "darkblue" },
  success: { light: "green", dark: "darkgreen" },
  warning: { light: "orange", dark: "darkorange" },
});

export const Button = styled.button``;

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "primary", "success", "warning"])
};

Button.defaultProps = {
  variant: "default",
};

export const Section = styled.section``;
export const Wrapper = styled.div``;
export const Article = styled.article``;

const RED = 'palevioletred';

export const HeaderContainer = styled.header`
  background-color: pink;
  padding: 2rem;
  font-size: 18px;
 

  & .wrapper {
    background-color: ${(props) => (props.isPrimary ? 'pink' : 'papayawhip')};
    border-radius: 1rem; 

    h1{
      padding: 2rem;
      text-align:center;
    }

    h2{
      margin-left: 30px
    }

    & ${Wrapper}{
      padding: 15px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
    }

    & ${Button}{
     background-color: ${backgroundColor};
     color: palevioletred;
     font-size: 1em;
     margin: 1em;
     padding: 0.25em 1em;
     border: 2px solid palevioletred;
     border-radius: 3px;
     weight: 170px; 
    }

    & ${Section}{
      margin: 20px;
      flex-direction: column;  
      text-align:center;
      align-items: center;
      padding: 15px;
      border-radius: 1rem; 
      box-shadow: 0 0 12px 0 tomato;
      flex-wrap: wrap;
      min-weight: 20%;
    }

    & ${Article}{
     text-align: right;
     margin: 0 5rem;
     padding: 2rem;
    }
  }
 
  &:hover {
    background-color: ${RED};
  }
`;
