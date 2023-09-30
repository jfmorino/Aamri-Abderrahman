import { Container, Row, Col } from "react-bootstrap";
import ResumeCards from "./ResumeCards";
import React from "react";
import cvPhoto from "../../Assets/Assets/cvPHOTO.jpeg";

function ResumeNew() {
  return (
    <Container>
      <h1
        style={{
          justifyContent: "center",
          paddingTop: "120px",
          color: "white",
        }}
      >
        Download My <strong className="darkgreen">Resume </strong>
      </h1>
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      >
        <Col md={6} className="project-card">
          <ResumeCards
            imgPath={cvPhoto}
            isBlog={false}
            title="My Resume"
            description="Download By Clicking On The Button Bellow"
            button="e"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
