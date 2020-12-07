import NavigationBar from './components/NavigationBar'
import Main from './components/Main'
import './App.css';
const nav = [
  {
    'name': 'Home',
    'path': '/',
    'id': '1'
  },
  {
    'name': 'Civilizations',
    'path': '/civilizations',
    'id': '2'
  },
  {
    'name': 'Units',
    'path': '/units',
    'id': '3'
  },
  {
    'name': 'Structures',
    'path': '/structures',
    'id': '4'
  },
  {
    'name': 'Technologies',
    'path': '/technologies',
    'id': '5'
  },
]

function App() {
  return (
    <div className='App'>
      <NavigationBar menu={nav} />
      <Main />
    </div>
  )
}
export default App;

