import { useEffect, useState } from "react";
import "./CardZiwo.css";

export default function CardZiwo({
  Number,
  title,
  text1,
  text2,
  text3,
  text4,
  id,
}) {
  const [number, setnumber] = useState(3);

  useEffect(() => {
   const changeNumber = () => {
   
     if(window.innerWidth < 800){
      setnumber(3)
    }
     else if(window.innerWidth < 1500){
      setnumber(2)
    }
    else{
        setnumber(3)
    }
   }
    changeNumber();
   window.addEventListener("resize", changeNumber);
   return () => window.removeEventListener("resize", changeNumber);
  }, []);
  return (
    <div
      className={`card-ziwo ${
        id == 1 || id == number || id == 5 ? "border-card" : ""
      }`}
    >
      <p className="number-card">{Number}</p>
      <h3>{title}</h3>
      <ul>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
      </ul>
    </div>
  );
}
