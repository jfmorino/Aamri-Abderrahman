import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="darkgreen">Code</strong>
      </h1>
      <GitHubCalendar
        username="jfmorino"
        blockSize={15}
        blockMargin={5}
        color="blue"
        fontSize={16}
        colorScheme="dark"
      />
    </Row>
  );
}

export default Github;
