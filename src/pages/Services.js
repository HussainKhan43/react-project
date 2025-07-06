import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Home.css";
import Mypainting from "../components/Mypainting";

import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';


function Services(){
    return(
    <>
      <section className="banner-img">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center pt-5 mt-5">SERVICES</h1>
          </Col>
        </Row>
      </Container>
    </section>

    <Mypainting/>


          <section className="Service-part mt-5 text-center">
        <Container>
          <Row >
            <h2>Services</h2>
            <p>
              If you are looking for custom paintings, which will decorate your
              home or office, consider<br/> booking one or several of my services
              listed below. They will add more colors and emotions to <br/>your daily
              life.
            </p>
            <Col lg="3" className="border p-5"> 
            <i class="fa-solid fa-user"></i>
            <h4>Portrait</h4>
            </Col>
            <Col lg="3" className="border p-5">
            <i class="fa-solid fa-leaf"></i>
            <h4>Landscape</h4>
            </Col>
            <Col lg="3" className="border p-5">
            <i class="fa-brands fa-apple"></i>
            <h4>Still Life</h4>
            </Col>
            <Col lg="3" className="border p-5">
            <i class="fa-solid fa-house"></i>
            <h4>Urban</h4>
            </Col>
          </Row><br/><br/>
          <Button variant="outline-warning btn-lg">View All Services</Button>{" "}
        </Container>
      </section>
    </>
    );
}

export default Services;