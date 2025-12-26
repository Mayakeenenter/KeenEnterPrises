import CardLine from "../../component/CardLine/CardLine";
import Footer from "../../component/Footer/Footer";
import Form from "../../component/Form/Form";
import NavBar from "../../component/NavBar/NavBar";

export default function ContactUs() {
  return (
    <>
      <div className="mt-product">
        <CardLine text={"Contact Us"} />
      </div>
      <Form />
    </>
  );
}
