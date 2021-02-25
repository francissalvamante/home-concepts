import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LandingComponent from './components/LandingComponent/LandingComponent';
import CountdownComponent from './components/CountdownComponent/CountdownComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent></NavbarComponent>
        <Route exact path="/home-concepts">
          <CountdownComponent/>
        </Route>
        <Route path="/home-concepts/home">
          <LandingComponent/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
