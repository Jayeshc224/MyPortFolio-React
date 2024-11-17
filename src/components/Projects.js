import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen"; 
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img1.png";
import "animate.css";

export const Projects = () => {
    const projects = [
        {
            title: "Movie Booking App with Suggestions",
            description: "Designed and Developed the application for booking movies and suggest movies to users",
            imgUrl: projImg1
        },
        {
            title: "KanBan Board",
            description: "A application to manage daily tasks and map the progress of each task",
            imgUrl: projImg2
        },
        {
            title: "Event Management App",
            description: "Application designed to manage and host events to people",
            imgUrl: projImg3
        }
    ]
return (
 <section className="project" id="project">
    <Container>
       <Row>
        <Col>
        <TrackVisibility>
          {({isVisible }) =>
          <div className = {isVisible ? "animated__animated animate__bounce" : ""}>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe</p>                   
            </div>}
        </TrackVisibility>
        <Tab.Container id="projects-tabs" defaultActiveKey ="first">
        <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pill-tabs">
            <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="third" >
                Tab Three
                </Nav.Link>
            </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project,index) => {
                                return(
                                    <ProjectCard key={index}
                                    {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
            </Tab.Content>
            <img className="background-image-right" src={colorSharp2} /> 
            </Tab.Container>

        </Col>
       </Row>
         
    </Container>
    
 </section>

)
}