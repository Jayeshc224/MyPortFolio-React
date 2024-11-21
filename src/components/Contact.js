import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { FaJava, FaJsSquare, FaPython, FaReact } from 'react-icons/fa'; 
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Skills</h2>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <FaJava size={50} />
                      <p>Java</p>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <FaJsSquare size={50} />
                      <p>JavaScript</p>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <FaPython size={50} />
                      <p>Python</p>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <FaReact size={50} />
                      <p>React</p>
                    </Col>
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
