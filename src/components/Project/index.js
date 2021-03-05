// import Modal from "../Modal";
import "./styles.css";

const Project = ({ project }) => {
    return (
        <div className="project">
            <img className="circle" src={project.previewImage} alt={project.title} />
            <div className="circle overlay light-green darken-4">
                <div className="description">
                    <p>{project.description}</p>
                    <p><u>Learn more...</u></p>
                </div>
            </div>
        </div>
    )
};

export default Project;