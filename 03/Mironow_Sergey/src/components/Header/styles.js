import styled from 'styled-components';

const [C1, C2, C3, C4] = ['#8d230f', '#1e434c', '#9b4f0f', '#c99e10']

export const HeaderContainer = styled.header`

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${C4 + 'CF'};
  border: 6px solid ${C1};
  border-radius: 10px;
  color: ${C2};
  h1, h2 {margin: 5px 0;}
  & > div {
    margin: 5px;
    color: blueviolet;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    section {
      margin-bottom: 15px;
      padding: 10px;
      width: 30%;
      border: 3px solid ${C2};
      border-radius: 5px;
      color: ${C1};
      display: flex;
      flex-direction: column;
      align-items: center;
      h3, p {
        text-align: center;
        margin: 0 0 7px 0;
      }
      button {
        margin-top: auto;
        padding: 5px;
        font-weight: 1000;
        border-radius: 6px;
        background-color: ${C3};
        color: ${C4};
      }

    }
  }
  & > article {
    width: 91%;
    text-align: center;
    margin: 10px 0;
    h3, p {
      margin: 5px 0;
    }
  }
}

































`;
