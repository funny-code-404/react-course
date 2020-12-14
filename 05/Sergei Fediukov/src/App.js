import { Navigation, Routes } from './components'
import './App.css'
import { CivilizationsProvider } from './context/CivilizationsContext/CivilizationsProvider'
import { UnitsProvider } from './context/UnitsContext/UnitsProvider'
import { StructuresProvider } from './context/StructuresContext/StructuresProvider'
import { TechnologiesProvider } from './context/TechnologiesContext/TechnologiesProvider'

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
      <TechnologiesProvider>
        <StructuresProvider>
          <UnitsProvider>
            <CivilizationsProvider>
              <Navigation menu={nav} />
              <Routes />
            </CivilizationsProvider>
          </UnitsProvider>
        </StructuresProvider>
      </TechnologiesProvider>
    </div>
  )
}
export default App;

