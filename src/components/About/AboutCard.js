import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Angel Cordoba</span>{" "}
            from <span className="purple">Jocotitlán, México</span>.
            <br />
            I’m currently studying{" "}
            <span className="purple">Computer Systems Engineering</span> at{" "}
            <span className="purple">TESJo</span>.
            <br />My degree specializations{" "}
            <span className="purple"></span> are{" "}
            <span className="purple">Networks and Cybersecurity</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Do exercise
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It doesn't matter how many times you fall, but how many times you get up."{" "}
          </p>
          <footer className="blockquote-footer">Vince Lombardi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
