import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Rocket from './components/Rocket';
import Mission from './components/Mission';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
