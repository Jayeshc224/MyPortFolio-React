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
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
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
            <p>The projects featured here represent a broad range of skills across web design, backend development, and user experience design. Each project is crafted with a focus on both form and function, utilizing responsive layouts, intuitive UX, and efficient backend operations.</p>                   
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
                <Nav.Link eventKey="third" >Java Projects</Nav.Link>
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
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane> 
            </Tab.Content>
            <img className="background-image-right" src={colorSharp2} alt="JAC" /> 
            </Tab.Container>

        </Col>
       </Row>
         
    </Container>
    
 </section>

)
}