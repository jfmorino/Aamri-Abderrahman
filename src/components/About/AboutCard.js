import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="">Aamri Abderrahman </span>
            from <span className="darkgreen"> Marrakech, Morocco.</span>
            <br /> I'm really excited to be a part of this{" "}
            <i className="darkgreen" s>
              <b> programming </b>
            </i>
            community, I've recently decided to pursue a career in programming
            because I've always been{" "}
            <i className="darkgreen">
              <b> fascinated</b>
            </i>{" "}
            by the limitless possibilities that coding offers. From creating
            software that can make people's lives{" "}
            <i className="darkgreen">
              <b> easier</b>
            </i>{" "}
            to building innovative solutions that can change industries. I'm
            relatively new to the world of programming, and I've been actively
            learning{" "}
            <i className="darkgreen">
              <b> React.js, Laravel and Vue.js</b>
            </i>{" "}
            for almost a year.
            <br />
          </p>

          <div>
            <p style={{ textAlign: "justify" }}>My Interest :</p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>
          </div>
          {/* <p style={{ color: "white" }}> */}
          {/* "Strive to build things that make a difference!"{" "}
          </p>
        <footer className="blockquote-footer">Aamri</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
