import './App.css';
import MenuBar from './menu/MenuBar';
import Project from './pages/project';
import Home from './pages/home';
import Skills from './pages/skills';
import Qualification from "./pages/qualification";
import ScrollBtn from './component/ScrollBtn';

function App() {
  return (
    <div id="app-container">
      <MenuBar/>
      <Home />
      <Skills />
      <Project/>
      <Qualification />     
      <ScrollBtn /> 
  </div>
  );
}

export default App;