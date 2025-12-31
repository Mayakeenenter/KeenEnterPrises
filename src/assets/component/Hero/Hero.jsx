import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="left-side"
        >
          <h2>KEEN Enterprises LLC</h2>
          <p>
            Motivating and Empowering thousands of end-users to test and try the
            new technologies from all over the world to be many steps forwards
            from their competitors.
          </p>
          <p className="chairman-keen">– KEEN Enterprises’ Chairman.</p>
          <div className="history">
            <div>
              <h3>History</h3>
              <p>
                Founded in Dec 2020 after 20 years experience into Sales &
                Business Management with multi-national organizations B2B & B2G
                corporate Enterprises
              </p>
            </div>
            <div>
              <h3>Business Development</h3>
              <p>
                KEEN Enterprises is a leading professional Technology Business
                Development Firm located in Dubai with extended network in GCC
                Countries.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flip-card right-side">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="box-1">
                <h2>KEEN Enterprises</h2>
                <p>
                  to be the leading partner for new technologies businesses in
                  the middle east
                </p>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="box-2">
                <div>
                  <h3>AI & CRM Automation</h3>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCheck} /> Bitrix24
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} /> ziwo
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} />
                      3CX
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="two-img">
        <img src="/home/ChatGPT-Image-Apr-28-2025-01_20_01-PM.webp" alt="our vision" />
        <img src="/home/ChatGPT-Image-Apr-28-2025-01_31_39-PM.webp" alt="our mission" />
      </div>
    </>
  );
}

export default Hero;
