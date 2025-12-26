import "./CardServices.css";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";

export default function CardServices({ number, title, description }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    const targetNumber = parseFloat(number);
    if (isNaN(targetNumber)) return;

    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration: 5,
        ease: "easeOut",
      });
      return () => controls.stop();
    } else {
      count.set(0);
    }
  }, [isInView, count, number]);

  return (
    <div className="card-services" ref={ref}>
      <div className="number">
        <span>+</span>
        <motion.p >{rounded}</motion.p>
      </div>
      <h3>{title}</h3>
      <p className="dec">{description}</p>
    </div>
  );
}
