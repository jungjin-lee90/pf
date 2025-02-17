import "./skills.css";
import Card from '../component/card';

const Skills = () => {
    return (
      <div className="skills">
        <h1 className="skills-title">
          <a name="skills">Tech Skills</a>
        </h1>
        <div className="skill-card-wrapper">
          <Card className="frontend-card">
            <h2 className="frontend-title">Frontend</h2>
            <div className="skill-img-wrapper">
              <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/html.png"} />
                <p>HTML5</p>
              </div>
              <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/php.png"} />
                <p>PHP</p>
              </div>
              <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/JS.png"} />
                <p>JAVASCRIPT</p>
              </div>
            </div>
          </Card>
          <Card className="backend-card">
            <h2 className="backend-title">Backend</h2>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/C.png"} />
                <p>C/C++</p>
            </div>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/Shell.jpeg"} />
                <p>ShellScript</p>
            </div>
          </Card>
          <Card className="etc-card">
            <h2 className="etc-title">Etc</h2>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/aws.png"} />
                <p>AWS</p>
            </div>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/terraform.png"} />
                <p>Terraform</p>
            </div>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/mysql.png"} />
                <p>MySQL</p>
            </div>
          </Card>
        </div>
      </div>
    );
  };

export default Skills;