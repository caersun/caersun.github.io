// TODO: Have to initialize
import { Component } from "react";
import M from "materialize-css";

class ProjectCard extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.props.img} alt={this.props.title} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.title}</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {this.props.title}
                        <i className="material-icons right">close</i>
                    </span>
                    <br></br>
                    <p>{this.props.description}</p>
                </div>
                <div class="card-action">
                    <a href={this.props.site}><i className="material-icons left">link</i></a>
                    <a href={this.props.repo}><i className="material-icons right">code</i></a>
                </div>
            </div>
        );
    }
}

export default ProjectCard;