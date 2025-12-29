import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DrawingArrow from "../DrawingArrow/DrawingArrow";


function Form() {
  return (
    <div className="contact-form">
      <div className="container">
        <DrawingArrow/>
        <form className="form" action="">
          <div className="input-field">
            <input
              required
              placeholder=" "
              autocomplete="off"
              type="text"
              name="text"
              id="username"
            />
            <label for="username">Lead Name</label>
          </div>
          <div className="input-field">
            <input
              required
              placeholder=" "
              autocomplete="off"
              type="email"
              name="email"
              id="email"
            />
            <label for="email">Phone</label>
          </div>
          <div className="input-field">
            <input
              required
              placeholder=" "
              autocomplete="off"
              type="password"
              name="text"
              id="password"
            />
            <label for="username">E-mail</label>
          </div>
          <div className="input-field">
            <input
              required
              placeholder=" "
              autocomplete="off"
              type="password"
              name="text"
              id="password"
            />
            <label for="username">Subject</label>
          </div>
          <div className="input-field">
            <input
              required
              placeholder=" "
              autocomplete="off"
              type="password"
              name="text"
              id="password"
            />
            <label for="username">Your message (option)</label>
          </div>

          <button className="btn">Call me</button>

          <div className="report">
            <p className="p-repore">
              <a
                href="https://www.bitrix24.com/abuse/?b24_form_id=17&b24_address=https%3A%2F%2Fkeenenter.bitrix24.com&b24_form_address=https%3A%2F%2Fkeenenter.com%2Fcontact-us%2F"
                target="--blank"
              >
                Report abuse
              </a>
              <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
            </p>
            <p>
              Powered by <span className="s-one">Bitrix</span>{" "}
              <span className="s-two">24</span>
            </p>
          </div>
        </form>
      </div>
      <div className="working">
        <h3>Working Hours</h3>
        <div className="all-day">
          <div className="day">
            <p> Monday</p>
            <p>9:00 am – 5:00 pm</p>
          </div>
          <div className="day">
            <p>Tuesday</p>
            <p>9:00 am – 5:00 pm</p>
          </div>
          <div className="day">
            <p>Wednesday</p>
            <p>9:00 am – 5:00 pm</p>
          </div>
          <div className="day">
            <p>Thursday</p>
            <p>9:00 am – 5:00 pm</p>
          </div>
          <div className="day">
            <p>Friday</p>
            <p>9:00 am – 12:00 pm, 2:00 pm – 6:00 pm</p>
          </div>
          <div className="day">
            <p>Saturday</p>
            <p>Closed</p>
          </div>
          <div className="day">
            <p>Sunday</p>
            <p>Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
