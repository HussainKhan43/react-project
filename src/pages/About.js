import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Home.css";
import Mypainting from "../components/Mypainting";
import home from "../assets/home.jpg";
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';


function About(){
    return(
    <>
    <section className="banner-img">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center pt-5 mt-5">ABOUT</h1>
          </Col>
        </Row>
      </Container>
    </section>

          <section className="about-part">
        <Container>
          <Row>
            <Col lg="6" className="mt-5">
              <h2>A Few Words About Me</h2>
              <p className="text-secondary pt-5">
                My name is Samantha Morgan, and I have been a fine artist since
                my youth. I find inspiration from the innovative styles of
                contemporary and urban art, such as graphic and graffiti
                illustrations. I strongly believe that art is a global form of
                communication. It educates visually by either moving you,
                pleasing you, or even inspiring you.{" "}
              </p>
              <br />
              <Button variant="outline-warning btn-lg">Learn More</Button>{" "}
            </Col>
            <Col lg="6" className="pt-5">
              <img src={home} />
            </Col>
          </Row>
        </Container>
      </section>

      <Mypainting/>
    

    </>
    );
}

export default About;