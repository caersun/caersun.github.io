import Row from "../Row";
import Col from "../Col";

const ContactForm = props => {
    return (
        <form className="col s12">
            <Row>
                <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input type="text" class="validate" id="fullname" />
                    <label for="fullname">name</label>
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <input  type="text" class="validate" id="email" />
                    <label for="email">email</label>
                </div>
            </Row>
            <Row>
                <div class="input-field col s12">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea class="materialize-textarea" rows="4" id="message"></textarea>
                    <label for="message">message</label>
                </div>
            </Row>
            <Row>
                <button class="btn waves-effect waves-light right" type="submit">submit
                    <i class="material-icons right">send</i>
                </button>
            </Row>
        </form>
    );
};

export default ContactForm;