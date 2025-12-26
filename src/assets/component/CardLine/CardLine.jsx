import "./CardLine.css";
import { motion } from "framer-motion";
function CardLine({ text }) {
  return (
    <div className="card-line">
      <motion.h4
        initial={{ y: "100%", opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{
          duration: 1,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {text}
      </motion.h4>
    </div>
  );
}

export default CardLine;
