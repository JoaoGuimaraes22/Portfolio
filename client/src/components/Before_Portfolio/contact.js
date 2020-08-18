import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {
      email: email,
      name: name,
      message: message
    };
    emailjs
      .send(
        "default_service",
        "template_vDkcflbZ",
        templateParams,
        "user_FTcDi00OWeAbC3aHJxubZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact-content content">
        <Fade>
          <h1 className="contact-content-title subtitle">Contact me</h1>
          <p className="contact-content-description description">
            Be it for work, or anything else, email me, I'll respond ASAP
          </p>
        </Fade>

        <form className="form" onSubmit={sendEmail}>
          <Fade>
            <div className="form-div">
              <label className="form-div-label filler">
                First and Last name:
              </label>
              <input
                className="form-div-input"
                type="text"
                name="user_name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </Fade>
          <Fade>
            <div className="form-div">
              <label className="form-div-label filler">Your Email:</label>
              <input
                className="form-div-input"
                type="email"
                name="user_email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </Fade>
          <Fade>
            <div className="form-div">
              <label className="form-div-label filler">
                Send me a Message:
              </label>
              <textarea
                className="form-div-input form-div-textarea"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
          </Fade>
          <Fade>
            <div className="form-div">
              <input className="form-div-btn " type="submit" value="Send" />
            </div>
          </Fade>
        </form>
      </div>
    </section>
  );
};

export default Contact;
