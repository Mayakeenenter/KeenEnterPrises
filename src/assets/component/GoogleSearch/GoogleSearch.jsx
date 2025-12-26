import { useEffect } from "react";

const GoogleSearch = () => {
  useEffect(() => {
    //programmable search engine
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=f12f13e4ad09345b2"; 
    script.async = true;
    document.body.appendChild(script);

    return () => {
      
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="search-modal-content">
      <div className="gcse-search"></div>
    </div>
  );
};

export default GoogleSearch;