import { ZiwoCardInfo } from "../../Data/DataPricing";
import CardZiwo from "../CardZiwo/CardZiwo";
import "./ZiwoCard.css";

export default function ZiwoCard() {
  return (
    <section className="ziwo-card">
      <div className="row">
        {Array &&
          ZiwoCardInfo.map((item, index) => (
            <CardZiwo
              key={index}
              id={index}
              Number={item.Number}
              title={item.title}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
              text4={item.text4}
            />
          ))}
      </div>
      
    </section>
  );
}
