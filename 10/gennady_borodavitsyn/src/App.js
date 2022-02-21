import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// COMPONENTS
import Comments from './components/Comments/Comments';
import CommentListCustom from './components/CommentListCustom/CommentListCustom';
import CommentListThunk from './components/CommentListThunk/CommentListThunk';
import CommentInfoPageThunk from './components/CommentInfoPageThunk/CommentInfoPageThunk';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Comment List:</h1>
        <Switch>
          <Route path="/" exact component={Comments} />
          <Route path="/CommentListThunk" exact component={CommentListThunk} />
          <Route path="/CommentListCustom" component={CommentListCustom} />
          <Route
            path="/CommentListThunk/info/:id"
            exact
            component={CommentInfoPageThunk}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
