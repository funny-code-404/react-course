import { Link } from 'react-router-dom'

import Navigation from './components/Navigation'

function App({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default App;
