import "./CardStep.css";
import { motion } from "framer-motion";
function CardStep({ step, title, description }) {
  return (
    <motion.div className="card-step"
    initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}>
      <div className="step-div">
        <p className="step">{step}</p>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default CardStep;
