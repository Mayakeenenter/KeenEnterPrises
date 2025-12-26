import { one, three, two } from "../../Data/DataPricing";
import CardPricing from "../CardPricing/CardPricing";
import "./Pricing.css";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing-div">
        <p className="pricing-p">Bitrix24 Plans</p>
        <motion.h3 className="pricing-h3"
         initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        >Pricing</motion.h3>
      </div>
      <div className="all-card">
        <CardPricing
        title={"Standard"}
        numberUser={"50 users"}
        price={"$87"}
        oldPrice={"$124"}
        array={one}
        rate = {"30%"}
      />
      <CardPricing
        title={"Professional "}
        numberUser={"100 users"}
        price={"$175"}
        oldPrice={"$249"}
        array={two}
        rate = {"30%"}
      />
      <CardPricing
        title={"Enterprise"}
        numberUser={"250 users"}
        price={"$325"}
        oldPrice={"$499"}
        array={three}
        rate = {"35%"}
      />
      </div>
    </div>
  );
}
