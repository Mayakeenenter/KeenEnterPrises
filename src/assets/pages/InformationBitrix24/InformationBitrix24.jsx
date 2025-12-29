import { NavLink } from "react-router-dom";
import CradInformationBitrix from "../../component/CradInformationBitrix/CradInformationBitrix";
import "./InformationBitrix24.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function InformationBitrix24() {
  return (
    <HelmetProvider>
      <Helmet>
        <title> bitrix24 | Keen Enterprises</title>
      </Helmet>
      <div className="infoBitrix">
        <h2> Your ultimate workspace.</h2>
        <p className="p-info">All-in-one solution for smarter business.</p>
        <CradInformationBitrix />
       
      </div>
    </HelmetProvider>
  );
}
