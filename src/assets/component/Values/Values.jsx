import CardValues from '../CardValues/CardValues'
import './Values.css'
import { motion } from "framer-motion";
function Values() {
  return (
    <div className='value'>
      <motion.h3
       initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        >Values & Principles</motion.h3>
      <CardValues
      number={"1"}
      title={"Sustainability,"}
      description={"Diversity, Equity, and Inclusion (DEI)"}
      className= {false}/>
      <CardValues
      number={"2"}
      title={"Transparency"}
      description={"Innovation"}
      className={false}/>
      <CardValues
      number={"3"}
      title={"Employee Well-being"}
      description={"Customer-Centricity"}
      className={false}/>
      <CardValues
      number={"4"}
      title={"Social Responsibility"}
      description={"Excellence Ihsan"}
      className={true}/>
    </div>
  )
}

export default Values
