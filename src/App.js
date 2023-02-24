
import './App.css';

import Navbar from './Components/Navbar';
// import AboutMe  from './Components/AboutMe';
// import Resume from './Components/Resume';
// import Projects from './Components/Projects';
// import DevLog from './Components/DevLog';
// import Skills from './Components/Skills';
// import Contact from './Components/Contact';

import CommonButton from './Components/Common/CommonButton';

import { Divider, Grid } from '@mui/material';

function App() {

  const buttonStyles={
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: 'red',
  }

  return (
    <div className="App">

      <Navbar />

      <Divider></Divider>

      <Grid>
        <CommonButton 
            size="large"
            variant='contained'
            sx={buttonStyles}
            >
          Hello World!
        </CommonButton>

        <CommonButton 
            size="large"
            variant='contained'
            >
          Second One
        </CommonButton>

        <CommonButton 
            size="large"
            variant='contained'
            sx={buttonStyles}
            >
          Third One
        </CommonButton>
      </Grid>

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
