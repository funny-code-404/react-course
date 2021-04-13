import React from 'react';

const Home = (props) => {
    const { history } = props;

    const handleClickLogin = () => {
        history.push('/login');
    }

    const handleClickSignup = () => {
        history.push('/signup');
    }

    const handleClickDelete = () => {
        history.push('/delete');
    }

    return (
        <div className="home-page">
            <h2>Welcome! Choose option</h2>
            <div className="cases">
                <button onClick={handleClickLogin}>Log In</button>
                <button onClick={handleClickSignup}>Sign Up</button>
                <button onClick={handleClickDelete}>Delete</button>  
            </div>
        </div>
    );
}

export default Home;