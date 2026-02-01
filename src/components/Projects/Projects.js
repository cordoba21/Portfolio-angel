import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import sports from "../../Assets/Projects/sportsstore.png";
import presentationcard from "../../Assets/Projects/presentationcard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sports}
              isBlog={false}
              title="Sports Store"
              description="Web application for sports store, user system, inventory, customization."
              ghLink="https://github.com/cordoba21/Tienda-de-Deportes"
              demoLink="https://modaydeporte.infinityfreeapp.com/?i=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={presentationcard}
              isBlog={false}
              title="presentation-card"
              description="A minimalist digital business card to showcase my profile and social links."
              ghLink="https://github.com/cordoba21/angelcordoba-card"
              demoLink="https://cordoba21.github.io/angelcordoba-card/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="A weather forecast application that fetches real-time data via API integration"
              ghLink="https://github.com/cordoba21/appClima"
              demoLink="https://cordoba21.github.io/appClima/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
