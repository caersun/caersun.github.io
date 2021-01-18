import { Component } from "react";

class ProjectCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.img} alt={this.props.title} />
                </div>
                <div className="card-content">
                    <span className="card-title center-align grey-text text-darken-4">{this.props.title}</span>
                </div>
            </div>
        );
    }
}

export default ProjectCard;