// import ContainerV from "./ContainerV";

const Section = props => {
    return (
        <div style={props.style} id={props.id}>
            <h3 className="center-align">{props.header}</h3>
            <div className="section valign-wrapper">{props.children}</div>
        </div>
    );
};

export default Section;