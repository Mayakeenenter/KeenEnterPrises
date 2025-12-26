import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./CardPricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardPricing({ title, numberUser, price , array , oldPrice ,rate}) {
  return (
    <div className="card-pricing">
      <div className="card-pricing-title">
        <h4>{title}</h4>
        <p className="number-user">{numberUser}</p>
      </div>
      <div className="rate-price">
        <p className="oldPrice">{oldPrice}</p>
        <div className="rate">
          <p>{rate}</p>
        </div>
      </div>
      <p className="price">
        <span >{price}</span> per annum
      </p>
      <div>
        {
            array && array.map((item , index) => (
                <div key={index} className="array">
                    <FontAwesomeIcon icon={faCheck} />
                    <p>{item.text}</p>
                </div>
            ))
        }
      </div>
      <button className="btn-get">Get Started</button>
      
    </div>
  );
}
