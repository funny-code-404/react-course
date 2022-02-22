import './App.css';

// COMPONENTS
import PostsList from './components/PostsList/PostsList';
import AlbumsList from './components/AlbumsList/AlbumsList';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Preloader from './components/Preloader/Preloader';

function App() {
  return (
    <div className="App">
      <Preloader />
      <ErrorMessage />
      <PostsList />
      <AlbumsList />
    </div>
  );
}

export default App;
