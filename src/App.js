import { useRef } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import './App.css'


function App(props) {



  return (
    <div className="App">
        <Introduction testFunc={() => console.log('hi') }/>
        <NavBar />
        <About />
        <Projects/>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
