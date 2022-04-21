import styled from 'styled-components';

export const StyledTable = styled.div`
  padding: 1rem;

  table {
    text-align: center;
    width: 90%;
    margin: 0 auto;
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
