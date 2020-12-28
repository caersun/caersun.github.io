// TODO: Have to initialize
const ProjectCard = props => {
    return (
        <div className="card sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.img} alt={props.title} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.title}</span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    {props.title}
                    <i className="material-icons right">close</i>
                </span>
                <br></br>
                <p>{props.description}</p>
            </div>
            <div class="card-action">
                <a href={props.site}><i className="material-icons left">link</i></a>
                <a href={props.repo}><i className="material-icons right">code</i></a>
            </div>
        </div>
    );
};

export default ProjectCard;