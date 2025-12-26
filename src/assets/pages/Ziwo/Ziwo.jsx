import CardLine from "../../component/CardLine/CardLine";
import ZiwoCard from "../../component/ZiwoCard/ZiwoCard";
import ZiwoCenter from "../../component/ZiwoCenter/ZiwoCenter";
import ZiwoIntegration from "../../component/ZiwoIntegration/ZiwoIntegration";
import "./Ziwo.css";

function Ziwo() {
  return (
    <div>
      <div className="mt-product">
        <CardLine text={"Calls Center Partners"} />
      </div>
      <ZiwoCenter />
      <ZiwoCard />
      <ZiwoIntegration />
    </div>
  );
}

export default Ziwo;
