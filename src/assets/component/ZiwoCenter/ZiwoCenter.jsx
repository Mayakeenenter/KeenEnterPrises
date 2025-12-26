import "./ZiwoCenter.css";
import { info } from "./../../Data/DataPricing";
function ZiwoCenter() {
  return (
    <div className="ziwo">
      <img src="/product/ziwo.webp" alt="" loading="lazy" />
      <div className="ziwo-div">
        <p className="ziwo-p">
          A cloud-based call center solution that enhances customer engagement.
        </p>
        {Array &&
          info.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <p className="ziwo-p2">{item.text}</p>
              <p className="ziwo-p2">{item.text2}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ZiwoCenter;
