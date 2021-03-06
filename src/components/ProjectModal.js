import Row from "./Row";
import Col from "./Col";
// import Projects from "../pages/Projects";

const ProjectModal = ({ project }) => {
    return (
        <div>
            <div className="modal-content">
                <Row>
                    <Col size="s12">
                        <img src={project.siteImage} alt={project.title} style={{
                            display: `block`,
                            width: `100%`,
                            height: `100%`
                        }} />
                    </Col>
                </Row>
                <Row>
                    <Col size="s12">
                        <Row>
                            <Col size="s12">
                                <h3 className="center-align">{project.title}</h3>
                                <h6>{project.description}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12 m6 center-align">
                                <h5>Highlights:</h5>
                                {/* <ul style={{ listStyleType: `disc` }}> */}
                                    {project.details.highlights.map(highlight => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                {/* </ul> */}
                            </Col>
                            <Col size="s12 m6 center-align">
                                <h5>Tools Used:</h5>
                                {project.details.tools.map(tool => (
                                    <li key={tool}>{tool}</li>
                                ))}
                            </Col>
                        </Row>                        
                    </Col>
                </Row>
            </div>
            <div className="modal-footer">
                <div className="center-align">
                    <a href={project.site} className="modal-close btn-flat">Website</a>
                    <a href={project.repo} className="modal-close btn-flat">Repository</a>
                </div>
            </div>      
        </div>
    );
};

export default ProjectModal;