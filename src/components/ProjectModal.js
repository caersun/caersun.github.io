const ProjectModal = props => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Go to the live site <a href={props.site}>here</a>!</p>
            <p>Or check out the <a href={props.code}>repository</a> on GitHub.</p>
        </div>
    );
};

export default ProjectModal;