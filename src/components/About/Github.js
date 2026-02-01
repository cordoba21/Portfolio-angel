import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const matrixTheme = {
    light: ["#0b120b", "#0f1c0f", "#145214", "#1fa11f", "#39ff14"],
    dark: ["#0b120b", "#0f1c0f", "#145214", "#1fa11f", "#39ff14"],
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="cordoba21"
        blockSize={30}
        blockMargin={10}
        color="#39ff14"
        theme={matrixTheme}
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
