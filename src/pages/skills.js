import "./skills.css";
import Card from '../component/card';

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">
        <a name="skills">Tech Skills</a>
      </h1>
      <Card className="project-card">
        <div className="skill-card-wrapper">
        <h2 className="frontend-title">Frontend</h2>
        <div className="skill-img-wrapper">
            <div className="skill-div">

            <p>HTML5</p>
            </div>
            <div className="skill-div">

            <p>CSS3</p>
            </div>
            <div className="skill-div">

            <p>JAVASCRIPT</p>
            </div>
            <div className="skill-div">

            <p>REACT</p>
            </div>
        </div>

        <h2 className="backend-title">Backend</h2>

        <h2 className="etc-title">Etc</h2>
        </div>
      </Card>
      
    </div>
  );
};
export default Skills;