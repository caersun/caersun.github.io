import { Component } from "react";
import M from "materialize-css";

/* 
This is only the modal structure. To trigger the modal, we need an <a /> OR <button />

    <a className="modal-trigger" href={this.props.modalID}>Modal</a>

    <button className="modal-trigger" data-target={this.props.modalID}>Modal</button>
*/

class Modal extends Component {
    componentDidMount() {
        M.AutoInit();
    };

    render() {
        return (
            <div id={this.props.modalID} className="modal">
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
        );
    };
};

export default Modal;