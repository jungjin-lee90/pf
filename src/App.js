import './App.css';
import MenuBar from './menu/MenuBar';
import { useRef } from 'react';
import Project from './pages/project';
import Home from './pages/home';
import Skills from './pages/skills';
import Qualification from "./pages/qualification";

function App() {
  const HomeRef = useRef(null);
  
  const moveHandler = () => {
    console.log(HomeRef);
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="app-container">
      <MenuBar move={moveHandler}/>
      <Home />
      <Skills />
      <Project ref={HomeRef} />
      <Qualification />
    </div>
  );
}

export default App;