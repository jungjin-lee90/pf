import { forwardRef } from "react";
import Card from "../component/card";
import "./qualification.css";

const Qualification = forwardRef((props, ref) => {
  return (
    <div className="edu" ref={ref}>
        <Card className="edu-main">
            <h1 className="edu-title">
                <a name="edu">Qualification</a>
            </h1>
            <div className="edu-card-wrapper">
                <Card className="edu-card">
                <h2 className="edu-title">Education</h2>
                <img src={process.env.PUBLIC_URL + "/assets/images/inha.svg"} />
                <h3>tttt</h3>
                <h4> (2017.02 ~ 2023.08)</h4>
                </Card>
                <Card className="cert-card">
                <h2 className="cert-title">Certification</h2>
                <div className="cert-items-container">
                    <div className="cert-item">
                    <img src={process.env.PUBLIC_URL + "/assets/images/q-net.png"} />
                    <h3>tttt</h3>
                    <h4>(한국산업인력공단. 2023.06.09)</h4>
                    </div>
                    <div className="cert-item">
                    <img src={process.env.PUBLIC_URL + "/assets/images/opic.webp"} />
                    <h3>tttt</h3>
                    <h4>(ACTFL. 2023.06.07)</h4>
                    </div>
                </div>
                </Card>
            </div>
        </Card>
    </div>
  );
});

export default Qualification;