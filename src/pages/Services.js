import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Home.css";
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

    <section className="My-painting mt-5 py-5">
        <Container>
          <Row>
            <h2 className="text-center">My Paintings</h2>
            <Col lg="4" className="pt-5">
              <Card style={{ width: "18rem" }} id="card-body">
                <Card.Img variant="top" src={project1}/>
                <Card.Body>
                  <Card.Title id="card-name">Sea Storm</Card.Title>
                  <Card.Text>
                    This painting is one of my latest works on sea and ocean
                    topics.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="pt-5">
              <Card style={{ width: "18rem" }}id="card-body">
                <Card.Img variant="top" src={project2} height={380}/>
                <Card.Body>
                  <Card.Title id="card-name">Ruins of Ancient Fortress</Card.Title>
                  <Card.Text>
                    When I’ve been to Scotland, I made this painting just in a
                    day.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="pt-5">
              <Card style={{ width: "18rem" }}id="card-body">
                <Card.Img variant="top" src={project3} />
                <Card.Body>
                  <Card.Title id="card-name" >Two Lovers</Card.Title>
                  <Card.Text>
                    This work was finished in two days for my customers from San
                    Diego, CA, who needed something special.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg="4" className="pt-5">
              <Card style={{ width: "18rem" }}id="card-body">
                <Card.Img variant="top" src={project4} />
                <Card.Body>
                  <Card.Title id="card-name" >Watercolor Portrait</Card.Title>
                  <Card.Text>
                    Jane Williams, my friend and colleague, asked me to paint
                    her portrait and this is what I did.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="pt-5">
              <Card style={{ width: "18rem" }}id="card-body">
                <Card.Img variant="top" src={project5} />
                <Card.Body>
                  <Card.Title id="card-name"  >Birches in Autumn</Card.Title>
                  <Card.Text>
                    I love painting autumn trees and this work is a perfect
                    example.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="pt-5">
              <Card style={{ width: "18rem" }}id="card-body">
                <Card.Img variant="top" src={project6}/>
                <Card.Body>
                  <Card.Title id="card-name">Green Landscape</Card.Title>
                  <Card.Text>
                    Another abstract work, which appeared at my last year’s
                    exhibition, Morgan Paintings 2016.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

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