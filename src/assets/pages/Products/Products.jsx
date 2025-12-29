import "./Products.css";
import CardLine from "../../component/CardLine/CardLine";
import CardBitrix from "../../component/CardBitrix/CardBitrix";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Products() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Keen Enterprises | bitrix24</title>
        </Helmet>
        <div className="mt-product">
          <CardLine text={"Bitrix24 Support"} />
        </div>
        <CardBitrix
          one={true}
          partOne={"What makes Bitrix24"}
          partTwo={"better than 99%"}
          partThree={"of other solutions on the market?"}
          img={"/product/features.png.webp"}
        />
        <CardBitrix
          one={false}
          partOne={"Discover"}
          partTwo={"Bitrix24"}
          partThree={":Your all-in-One Solution!"}
          img={"/product/bitrixman.webp"}
        />
        <img
          src="/product/copilet.webp"
          alt=""
          srcset=""
          className="img-copilet"
        />
      </HelmetProvider>
    </>
  );
}

export default Products;
