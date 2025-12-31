import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardFeatures.css";
import { faWebAwesome } from "@fortawesome/free-solid-svg-icons";

function CardFeatures() {
  const steps = [
    {
      title: "Pushes complete listing details to Property Finder and Dubizzle",
    },
    {
      title: "Sends listings to Bayut as an external platform",
    },
    {
      title:
        "Syncs prices, availability, photos, and descriptions automatically",
    },
    {
      title: "Updates changes instantly without manual re-uploading",
    },
    {
      title: "No more duplicate work. No more outdated listings online.",
    },
    {
      title: "Your CRM becomes the single source of truth.",
    },
    {
      title: "Real-Time Lead Capture. Zero Misses.",
    },
  ];
  return (
    <section className="features">
      <h3 className="h3-feature">From there, the system:</h3>
      <p>Every inquiry matters. That’s why our application focuses heavily on accurate, real-time lead syncing.</p>
      <div className="Card-bayut">
        {steps.map((step, index) => (
          <div className="card1" key={index}>
            <h4 className="card-title">{step.title}</h4>
            <div className="go-corner">
              <div className="go-arrow">
                <FontAwesomeIcon icon={faWebAwesome} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardFeatures;
