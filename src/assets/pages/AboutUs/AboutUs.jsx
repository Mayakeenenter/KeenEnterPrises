import CardAbout from "../../component/CardAbout/CardAbout";
import CardLine from "../../component/CardLine/CardLine";
export default function AboutUs() {
  return (
    <>
      <div className="mt-product">
        <CardLine text={"About Us"} />
      </div>
      <CardAbout />
    </>
  );
}
