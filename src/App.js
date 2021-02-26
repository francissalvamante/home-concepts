import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent></NavbarComponent>
        <Routing></Routing>
      </div>
    </Router>
  );
}

export default App;
