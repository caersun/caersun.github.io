const ProjectImg = props => {
    return (
        <div style={{ display: `inline-block`, position: `relative` }}>
            <img className="circle" src={props.img} alt={props.title} style={{ width: `100%`, height: `100%` }}/>
            <span style={{ 
                position: `absolute`, 
                top: `50%`, 
                left: `50%`, 
                transform: `translate(-50%, -50%)`, 
                color: `white`, 
                textAlign: `center` 
            }}>{props.title}</span>
        </div>
    );
};

export default ProjectImg;