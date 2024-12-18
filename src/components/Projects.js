import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen"; 
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/moviebooking.png";
import projImg2 from "../assets/img/kanban.png";
import projImg3 from "../assets/img/project-img1.png";
import "animate.css";

export const Projects = () => {
    const projects1 = [
        {
            title: "Movie Booking App with AI Suggestion",
            description: "Designed and developed an application for booking movies and suggesting personalized movie recommendations to users.",
            imgUrl: projImg1
        },
        {
            title: "KanBan Board",
            description: "An application to manage daily tasks and track the progress of each task.",
            imgUrl: projImg2
        },
        {
            title: "Event Management App",
            description: "An application designed to manage and host events for users.",
            imgUrl: projImg3
        }
    ]
    const projects2 = [
        {
            title: "Reddit Application",
            description: "Developed the wireframe application for Reddit Application",
            imgUrl: projImg1
        },
        {
            title: "Child Adoption App",
            description: "A wireframe to understand the working of child adoption website ",
            imgUrl: projImg2
        },
        {
            title: "Target Website",
            description: "The shopping giant Target understood and redesigned in moqups.",
            imgUrl: projImg2
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
            <p>I’m a passionate web developer and UX enthusiast dedicated to creating seamless, engaging, and accessible digital experiences. With expertise in building responsive websites and optimizing backend systems, I ensure both functionality and user satisfaction. My approach combines technical precision with a deep understanding of user behavior to deliver intuitive and impactful web solutions.
              Below are some of the projects I completed during my academic journey:</p>                   
            </div>}
        </TrackVisibility>
        <Tab.Container id="projects-tabs" defaultActiveKey ="first">
        <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pill-tabs">
            <Nav.Item>
                <Nav.Link eventKey="first">Web Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second">UX Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="third" >
                Java Projects
                </Nav.Link>
            </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects1.map((project,index) => {
                                return(
                                    <ProjectCard key={index}
                                    {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"><Row>
                        {
                            projects2.map((project,index) => {
                                return(
                                    <ProjectCard key={index}
                                    {...project}/>
                                )
                            })
                        }
                    </Row></Tab.Pane>
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