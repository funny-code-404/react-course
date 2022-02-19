import './App.css';

// COMPONENTS
import CommentList from './components/CommentList/CommentList';
import CommentListThunk from './components/CommentListThunk/CommentListThunk';

function App() {
  return (
    <div className="App">
      <h1>Comment List:</h1>
      <CommentListThunk />
      <CommentList />
    </div>
  );
}

export default App;
