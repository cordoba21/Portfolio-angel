import React from "react";
import { Col, Row } from "react-bootstrap";
import nextjs from "../../Assets/TechIcons/Next.svg";
import sql from "../../Assets/TechIcons/SQL.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={nextjs} alt="nextjs" className="tech-icon-images" />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={sql} alt="SQL" className="tech-icon-images" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
