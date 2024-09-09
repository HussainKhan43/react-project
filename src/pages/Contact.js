import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import "../Home.css";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <>
      <section className="banner-img">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center pt-5 mt-5">CONTACT US</h1>
          </Col>
        </Row>
      </Container>
    </section>
      <section className="pt-5 contact-part">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Get in Touch</h2>
              <br />
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Your Name"
              />
              <br />
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Your Email Address"
              />
              <br />
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Your Mobile Number"
              />
              <br />
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Your City"
              />
              <br />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Your Message"
                  rows={3}
                />
              </Form.Group>
              <p>
                Verify you're a human - Please enter the following code in the
                box below- 7102
              </p>
              
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                
              /><br/>
              <Button variant="outline-warning btn-lg">
                View All Services
              </Button>{" "}<br/><br/>
            </Col>
            <Col lg="6">
              <h2>Our Address</h2>
              <i class="fa-solid fa-mobile px-3 py-4 pt-5"></i>
              <span>2130 Fulton Street, San Diego, CA 94117-1080 USA</span>
              <br />
              <i class="fa-solid fa-phone px-3 py-4"></i>
              <span>1-800-1234-567</span>
              <br />
              <i class="fa-solid fa-envelope px-3 py-4"></i>
              <span>info@demolink.org</span>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
