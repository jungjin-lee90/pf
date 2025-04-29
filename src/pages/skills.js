import "./skills.css";
import Card from '../component/card';

const Skills = () => {
    return (
      <div className="skills">
        <h1 className="skills-title">
          <a name="skills">✨ Tech Skills</a>
        </h1>
        <div className="skill-card-wrapper">
          <Card className="etc-card">
            <h2 className="etc-title">Cloud</h2>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/aws.png"} />
                <p>AWS</p>
            </div>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/terraform.png"} />
                <p>Terraform</p>
            </div>
          </Card>
          <Card className="etc-card">
            <h2 className="etc-title">Cluster</h2>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/k8s.png"} />
                <p>k8s</p>
            </div>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/docker.png"} />
                <p>Docker</p>
            </div>
          </Card>
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
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/delphi.png"} />
                <p>Delphi</p>
            </div>
          </Card>
          <Card className="tools-card">
            <h2 className="tools-title">etc</h2>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/argocd.jpg"} />
                <p>Argo CD</p>
            </div>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/jenkins.ico"} />
                <p>Jenkins</p>
            </div>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/git.png"} />
                <p>Git</p>
            </div>
            <div className="skill-div">
                <img src={process.env.PUBLIC_URL + "/assets/images/svn.png"} />
                <p>Svn</p>
            </div>
          </Card>
        </div>
      </div>
    );
  };

export default Skills;