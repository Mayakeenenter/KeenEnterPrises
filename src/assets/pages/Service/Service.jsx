import "./Service.css";
import CardLine from "../../component/CardLine/CardLine";
import CardStep from "../../component/CardStep/CardStep";
import { step } from "../../Data/DataPricing";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Service() {
  return (
    <>
        <HelmetProvider>
              <Helmet>
                <title>Keen Enterprises | our services </title>
              </Helmet>
      <div className="mt-product">
        <CardLine text={"Our Services Bitrix24"} />
      </div>
      <div className="all-step">
        {Array &&
          step.map((item, index) => (
            <CardStep
              key={index}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
      </HelmetProvider>
    </>
  );
}

export default Service;
