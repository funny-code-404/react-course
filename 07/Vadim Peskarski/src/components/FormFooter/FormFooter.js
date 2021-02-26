import styled from 'styled-components';

const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

const FormFooter = ({ data }) => (
  <Footer>{data}</Footer>
);

export default FormFooter;
