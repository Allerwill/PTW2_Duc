import React from 'react';
import '../App.scss';
import '../sassc/contact.scss';

function Contact() {
    return (
        <div className="type-1593">
            <div className="container my-container">
                <h2 className="h2-title">Send us a message</h2>
                <p className="contact-description"> Lorem ipsum dolor sit amet, lorem ipsum dolor – consectetur adipiscing elit. Ut
                    elit
                    tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <form action="/action_page.php" className="needs-validation" noValidate>
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputName" placeholder="Name *" name="name" required />
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail" placeholder="E-mail *" name="email" required />
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputTelephone" placeholder="Telephone" name="telephone" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputCompany" placeholder="Company" name="company" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control message-field" id="inputMessage" placeholder="Message *" name="message" required />
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" required /> By using this form
                            you agree with the storage and handling of your data by this website.
                            <div className="invalid-feedback">Check this checkbox to continue.</div>
                        </label>
                    </div>
                    <button type="mit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact ;
