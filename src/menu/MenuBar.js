import "./MenuBar.css";
 
const MenuBar = () => {
  return (
    <header className="menu-bar">
      <div className="menu-contents">
        <div className="menu-title">
          <a href="#home">Portfolio</a>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="#skills">Tech Skills</a>
          </div>
          <div className="menu-item">
            <a href="#project">Project</a>
          </div>
          <div className="menu-item">
            <a href="#edu">Edu & Cert</a>
          </div>
          <div className="menu-item">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};
 
export default MenuBar;