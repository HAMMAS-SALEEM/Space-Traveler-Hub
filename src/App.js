import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
