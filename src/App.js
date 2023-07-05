import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <ul>
        <NavLink
          to="/"
          style={(isActive) => ({
            color: isActive ? 'green' : 'blue',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/calculator"
          style={(isActive) => ({
            color: isActive ? 'green' : 'blue',
          })}
        >
          Calculator
        </NavLink>
        <NavLink
          to="/quote"
          style={(isActive) => ({
            color: isActive ? 'green' : 'blue',
          })}
        >
          Quote
        </NavLink>
      </ul>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
