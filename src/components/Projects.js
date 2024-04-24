import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "E-Commerce front-end and backend web application with payment integrated.",
      imgUrl: projImg3,
    },
    {
      title: "Shop Delivery",
      description: "A shop delivery application with AWS.",
      imgUrl: projImg4,
    },
    {
      title: "Insurance Platform",
      description: "Insurance website.",
      imgUrl: projImg2,
    },
    {
      title: "HealthCare Registration",
      description: "A healthcare registration application with Node.js.",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                        {projects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="project-images" src={colorSharp2}></img>
    </section>
  );
}

export default Projects;
