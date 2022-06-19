import './sass/App.css';
import './sass/NavBar.css';
import './sass/Backgrounds.css';
import './sass/HomePage.css';
import './sass/DestinationPage.css';
import {Routes, Route} from 'react-router-dom'

import HomePage from './components/pages/HomePage';
import CrewPage from './components/pages/CrewPage';
import DestinationPage from './components/pages/DestinationPage';
import TechnologyPage from './components/pages/TechnologyPage';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Crew" element={<CrewPage/>}/>
        <Route path="/Destination" element={<DestinationPage/>}/>
        <Route path="/Technology" element={<TechnologyPage/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
