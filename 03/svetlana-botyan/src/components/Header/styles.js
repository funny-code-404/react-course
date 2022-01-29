import styled from 'styled-components';

const BLUE = 'RGB(64, 129, 236)';
const GRREN = 'RGB(0, 165, 81)';
const YELLOW = 'RGB(247, 241, 148)';
const White = 'White';

export const Wrapper = styled.div``;
export const Button = styled.button``;
export const Wrapper2 = styled.div``;
export const Title1 = styled.h1``;
export const Title2 = styled.h2``;
export const Title3 = styled.h3`
font-style: ${(props) => props.style ? 'italic' : 'normal'};`;
export const Paragraph = styled.p`
font-style: ${(props) => props.style ? 'italic' : 'normal'};`;

export const HeaderContainer = styled.header` 
  border: solid 4px ${BLUE};
  border-radius: 1rem;
  width: 60%;
  padding: 1rem;
  font-size: 18px;

  &>div{
   display:flex;
   justify-content:flex-end;
   padding-right:1rem;
   color:${BLUE};
  }

  &>${Wrapper}{
    display: flex;
    flex-direction: column;  
    text-align:center;
    padding: 15px;
    background-color: RGBA(29, 64, 222,0.8);
    border-radius: 1rem; 
    color : ${White};

    & ${Title1} {
      padding: 0px;
      margin: 10px 0;
      color: ${YELLOW};
    }
    & ${Title2}{
      margin-bottom: 20px;
      padding: 0px;
      margin: 10px 0;
    } 
    
    & ${Wrapper2}{
      display:flex;
      justify-content:space-between;
    }
  }
`;

export const Section = styled.section`
  width: 32%;
  padding: 10px;

  & ${Title3}{
    margin: 0px;
    text-transform: uppercase;    
  }

  & ${Button} {
  padding: 8px 20px;
  border: none;
  border-radius: 16px;
  color: ${White};
  font-size: 16px;
  background-color: ${GRREN};

    &:hover{
    background-color: ${BLUE};
  }

}
  &:hover {
  background-color: ${YELLOW};
  border-radius: 1rem;
  color: black;
}
`;

export const Article = styled.article`
  & ${Title3}{
    color: ${YELLOW};
    font-size: 20px;
    text-transform: uppercase;  
    font-style:italic;
    margin: 20px 0 5px;
  }

  & ${Paragraph}{
    margin: 0;
  }
`;
