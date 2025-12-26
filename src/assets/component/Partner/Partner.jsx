import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Partner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Partner() {
  return (
    <>
      <div className="partner">
        <div class="parent">
          <div class="card">
            <div class="content-box">
              <span class="card-title">Our partner</span>
              <p class="card-content">Advanced WhatsApp Marketing Solutions</p>
              <span class="see-more">
                As an Official Partner of Gupshup, a global leader in
                conversational messaging, we empower your business with the most
                robust WhatsApp communication tools. From full automation and
                verified business accounts to deep CRM integration, we ensure
                every lead is captured and no opportunity is missed.
              </span>
              <ul className="list-whatsApp">
                The Core Features:
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#fff" }} />
                  Official WhatsApp API: Get your Green Tick and build customer
                  trust.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#fff" }} />
                  Automated Chatbots: Provide 24/7 instant support to your
                  clients.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#fff" }} />
                  Seamless CRM Sync: Every WhatsApp conversation is
                  automatically logged into your Keen Enterprises CRM.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "#fff" }} />
                  Broadcasting & Notifications: Send official marketing
                  campaigns and alerts with zero risk of being blocked.
                </li>
              </ul>
            </div>
            <div class="date-box">
              <img
                src="/WhatsApp_Business_API_Gupshup.webp"
                alt="whatsApp"
                className="whatsApp"
              />
            </div>
          </div>
        </div>

        <img src="/Gupshup_Logo.webp" alt="gupshup" className="gupshup" />
      </div>
    </>
  );
}
