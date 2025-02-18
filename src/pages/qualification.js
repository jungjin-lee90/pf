import { forwardRef } from "react";
import Card from "../component/card";
import "./qualification.css";

const Qualification = () => {
  return (
    <div className="edu" >
        <Card className="edu-main">
            <h1 className="edu-title">
                <a name="edu">📝 Qualification</a>
            </h1>
            <div className="edu-card-wrapper">
                <Card className="cert-card">
                <h2 className="cert-title">Certification</h2>
                <div className="cert-items-container">
                    <div className="cert-item">
                    {/*<img src={process.env.PUBLIC_URL + "/assets/images/q-net.png"} />*/}
                    <p className="link-wrapper">OCJP</p>
                    <h4>(Oracle. 2013.07)</h4>
                    </div>
                    <div className="cert-item">
                    {/*<img src={process.env.PUBLIC_URL + "/assets/images/opic.webp"} />*/}
                    <p className="link-wrapper">정보처리산업기사</p>
                    <h4>(한국산업인력공단. 2013.11)</h4>
                    </div>
                    <div className="cert-item">
                    {/*<img src={process.env.PUBLIC_URL + "/assets/images/opic.webp"} />*/}
                    <p className="link-wrapper">리눅스마스터2급</p>
                    <h4>(한국정보통신인력개발센터. 2013.12)</h4>
                    </div>
                    <div className="cert-item">
                    {/*<img src={process.env.PUBLIC_URL + "/assets/images/opic.webp"} />*/}
                    <p className="link-wrapper">AWS SAA</p>
                    <h4>(AWS. 2023.11)</h4>
                    </div>
                </div>
                </Card>
            </div>
        </Card>
    </div>
  );
};

export default Qualification;