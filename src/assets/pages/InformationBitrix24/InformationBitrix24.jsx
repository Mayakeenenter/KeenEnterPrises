import { NavLink } from "react-router-dom";
import CradInformationBitrix from "../../component/CradInformationBitrix/CradInformationBitrix";
import "./InformationBitrix24.css";
import Partner from "../../component/Partner/Partner";

export default function InformationBitrix24() {
  return (
    <div className="infoBitrix">
      <h2> Your ultimate workspace.</h2>
      <p className="p-info">All-in-one solution for smarter business.</p>
      <CradInformationBitrix />
      <div className="div-property">
        <h3>One System Every Listing Every Lead In Real Time.</h3>
        <p>
          Managing property listings across multiple platforms can get messy
          fast. Details change. Leads get missed. Teams waste time copying data
          back and forth.
        </p>
        <p>
          We built a listing integration application that fixes this problem at
          the source.
        </p>
        <button className="button">
          <NavLink to={"/propertyfinder"}>Show More</NavLink>
        </button>
      </div>
      <Partner />
      <div className="whatsAppSolution">
        <h3>What are the key features of Gupshup’s WhatsApp solution?</h3>
        <p>
          Gupshup Conversation Cloud enhances WhatsApp conversations by
          leveraging AI Agents for intelligent, 2-way interactions. It also
          offers pre-approved templates for faster time to market, real-time
          customer segmentation, and personalized campaigns at scale. Businesses
          can automate campaigns and customer support, design journeys with a
          no-code visual builder, and seamlessly integrate live human agent
          assistance for enhanced customer service. Additionally, Gupshup
          provides consulting services, industry best practices, ROI analysis,
          and implementation support to help optimize your channel strategy.
        </p>
      </div>
    </div>
  );
}
