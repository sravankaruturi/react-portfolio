
import './App.css';

import AboutMe  from './Modules/AboutMe';
import Navbar from './Modules/Navbar';
import Resume from './Modules/Resume';
import Projects from './Modules/Projects';
import DevLog from './Modules/DevLog';
import Skills from './Modules/Skills';
import Contact from './Modules/Contact';

import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">

      <Navbar />

      {/* <Navbar />
      <AboutMe />
      <Resume />
      <Projects />
      <DevLog />
      <Skills />
      <Contact /> */}

  
    </div>
  );
}

export default App;
