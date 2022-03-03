import DataList from './components/DataList';
import PostList from './components/PostList';
import ReviewList from './components/ReviewList';
import Preloader from './components/Preloader';
import ErrorMessage from './components/ErrorMessage/';

import './App.css';

function App() {
  return (
    <div className="App">
      <Preloader />
      <ErrorMessage />
      <DataList />
      <PostList />
      <ReviewList />
    </div>
  );
}

export default App;
