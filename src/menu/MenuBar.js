import { Link } from "react-router-dom";
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
            <a href="#edu">Qual</a>
          </div>
          <div class="menu-icon">
            <button onClick={() => window.open("https://dlwjdwls90.tistory.com/", "_blank", "noopener,noreferrer")}>
              <div className="menu-item">
                <a>Tech Blog
                  <img src={process.env.PUBLIC_URL + "/assets/images/tistory.png"} alt="Button Icon" width="20" height="20" />
                </a>
              </div>  
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
 
export default MenuBar;