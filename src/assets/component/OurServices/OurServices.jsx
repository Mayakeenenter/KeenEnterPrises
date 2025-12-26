import CardServices from "../CardServices/CardServices";
import "./OurServices.css";
import { motion } from "framer-motion";
export default function OurServices() {
  return (
    <section className="service">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Our Services
      </motion.h2>
      <div className="one-service">
        <CardServices
          number={"13"}
          title={"Business Automation & Workflows"}
          description={
            "Streamline your operations and reduce manual tasks with our automation solutions."
          }
        />
        <CardServices
          number={"30"}
          title={"CRM Integration (Cloud & On-Premise)"}
          description={
            "Enhance your customer relationship management with seamless CRM integration"
          }
        />
        <CardServices
          number={"20"}
          title={"Task & Project Management Systems"}
          description={
            "Keep your projects on track with our customized task and project management systems."
          }
        />
      </div>
      <div className="one-service">
        <CardServices
          number={"7"}
          title={"Call Center Setup"}
          description={
            "Establish a state-of-the-art call center with our expert setup services."
          }
        />
        <CardServices
          number={"50"}
          title={"ERP System Customization"}
          description={
            "Tailor your ERP system to fit your specific business needs."
          }
        />
        <CardServices
          number={"75"}
          title={"Training Services"}
          description={
            "Equip your team with the skills they need through our comprehensive training programs"
          }
        />
      </div>

      <div className="card">
        <div className="img">
          <p>Company Overview</p>
        </div>
        <div className="textBox">
          <p className="p">
            We are a vibrant and results-oriented Business Development
            Consultancy committed to catalyzing organizational success. Our
            primary objective is to assist businesses in unlocking their full
            potential and attaining sustainable growth. Specializing in
            strategic planning, market expansion, and proficient relationship
            management, we serve as the trusted partner that empowers clients to
            navigate the intricacies of the business landscape with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
