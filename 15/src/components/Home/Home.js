import styled from 'styled-components';

const HomePage = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Home() {


    return(
        <HomePage>
            <h1>Age of Empires II</h1>
        </HomePage>
    );
};

export default Home;