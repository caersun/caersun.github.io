// import ContainerV from "./ContainerV";

const Section = props => {
    return (
        <div style={props.style} id={props.id}>
            <h2 className="center-align">{props.header}</h2>
            <div className="section valign-wrapper">{props.children}</div>
        </div>
    );
};

export default Section;