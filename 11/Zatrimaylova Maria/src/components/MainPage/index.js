import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Posts from '../Posts';
import Todos from '../Todos';
import CurrentPost from '../CurrentPost';
import CurrentTodos from '../CurrentTodos';

import { LinkButton, LinkContainer } from './style.js';

const MainPage = () => {

    return (
        <Router>
            <LinkContainer>
                <Link to="/posts">
                    <LinkButton >Posts</LinkButton>
                </Link>
                <Link to="/todos">
                    <LinkButton >Todos</LinkButton>
                </Link>
            </LinkContainer>

            <Switch>
                <Route path="/posts" exact component={Posts} />
                <Route path="/todos" exact component={Todos}/>
                <Route path="/posts/:id" component={CurrentPost} />
                <Route path="/todos/:id" component={CurrentTodos} />
            </Switch>
        </Router>
    );

};

export default MainPage;