import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CommentsPage } from './components/CommentsPage';
import { CommentPage } from './components/CommentPage';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route>
          <Route path='/' exact component={CommentsPage} />
          <Route path='/:id' exact component={CommentPage} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
