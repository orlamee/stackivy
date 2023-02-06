import card from "../assets/card.svg";
import lock from "../assets/lock.svg";
import locks from "../assets/locks.svg";
import { Link } from "react-router-dom";
function GrowBusiness() {
  return (
    <section className="growbusiness">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-2">A solid investment<br/> with great returns</h2>
          </div>
          <div className="col-md-6 mt-4">
            <h6>You can have best of both worlds when you invest in stackivy. A reliable investment portfolio and mouthwatering returns.</h6>
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-4 mb-3">
            <div className="gb">
              <h6 className="text-white">Grow Your Business With Stackivy Loan</h6>
              <p className="mt-3 text-white">Build a successful business by joining several fast -growing business and watch you sales increase </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 mb-2">
                <div className="gb-outline">
                  <h4>2% Interest</h4>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="gb-outline">
                  <h4>2% Interest</h4>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="gb-outline">
                  <h4>2% Interest</h4>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mb-2">
                <div className="gb-outline">
                  <h4>2% Interest</h4>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="gb-outline">
                  <h4>2% Interest</h4>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="gb-outline">
                  <h4>2% Interest</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row loans">
          <div className="col ss">
            <h2>SPECIAL SERVICES</h2>
            <h3>Flex your portfolio with a sure business.</h3>
            <h6>An investment in stackivy is an investment in your financial potential.</h6>
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-4 mb-2">
            <div className="ss-cards">
              <img src={lock} alt="lock" className="img-fluid" />
              <h3 className="my-5">Security</h3>
              <p className="mb-4">Our business has enjoyed a year-on-year increase and we are adding more customers everyday.</p>
              <Link
                className="btn btn-primary rounded-pill px-4 py-2 one-c"
                to="/"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="ss-cards" style={{background: "#EBE5FA"}}>
              <img src={card} alt="lock" className="img-fluid" />
              <h3 className="my-5">Returns</h3>
              <p className="mb-4">Your investment returns will make your investment portfolio the envy of your peers.</p>
              <Link
                className="btn btn-primary rounded-pill px-4 py-2 two-c"
                to="/"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="ss-cards" style={{background: "#FEE6E6"}}>
              <img src={locks} alt="lock" className="img-fluid" />
              <h3 className="my-5">Ethical</h3>
              <p className="mb-4">Our business follows the environmental, social, and governance guidelines closely and we are always updating it to reflect a better work environment.</p>
              <Link
                className="btn btn-primary rounded-pill px-4 py-2 three-c"
                to="/"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowBusiness;