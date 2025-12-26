import "./CardAbout.css";

function CardAbout() {
  return (
    <div className="sec-about">
      <p className="p-keen">
        KEEN Enterprises is a leading professional Technology,
        <span className="s-keen">Business Development Firm</span> located in Dubai with extended
        network in GCC Countries.
      </p>
      <ul>
        <li>
          Since <span className="s-keen2">2020</span>
        </li>
        <li>
          <span className="s-keen2" >5</span> Experts
        </li>
        <li>
          <span className="s-keen2">3</span> Countries
        </li>
      </ul>
      <div className="div-team">
        <p>
          Our team is driven by your success. Every single day, we’ll support
          your business and help you to succeed.
        </p>
      </div>
      <div className="div-keen">
        <h3>Our History</h3>
        <p>
          Founded in Dec 2020 after 20 years experience into Sales & Business
          Management with multi-national organizations B2B & B2G corporate
          Enterprises
        </p>
      </div>
      <div className="div-keen">
        <h3>Our Promise</h3>
        <p>
          We are a vibrant and results-oriented Business Development Consultancy
          committed to catalyzing organizational success. Our primary objective
          is to assist businesses in unlocking their full potential and
          attaining sustainable growth. Specializing in strategic planning,
          market expansion, and proficient relationship management, we serve as
          the trusted partner that empowers clients to navigate the intricacies
          of the business landscape with confidence
        </p>
      </div>
    </div>
  );
}

export default CardAbout;
