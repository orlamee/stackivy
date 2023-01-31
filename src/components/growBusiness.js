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
            <h2 className="mb-2">Grow Your Business <br/>With Stackivy Loan</h2>
          </div>
          <div className="col-md-6 mt-4">
            <h6>Build a successfil business by joining several fast -growing business and watch you sales increase by 40%</h6>
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-4 mb-3">
            <div className="gb">
              <h6 className="text-white">Grow Your Business With Stackivy Loan</h6>
              <p className="mt-3 text-white">Build a successfil business by joining several fast -growing business and watch you sales increase </p>
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
            <h3>We offer the best financial assistance for your educational needs.</h3>
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-4 mb-2">
            <div className="ss-cards">
              <img src={lock} alt="lock" className="img-fluid" />
              <h3 className="my-5">Looking For Security ?</h3>
              <p className="mb-4">Build a successfil business by joining several fast -growing business and watch you sales increase by 40%</p>
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
              <h3 className="my-5">Looking For Security ?</h3>
              <p className="mb-4">Build a successfil business by joining several fast -growing business and watch you sales increase by 40%</p>
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
              <h3 className="my-5">Looking For Security ?</h3>
              <p className="mb-4">Build a successfil business by joining several fast -growing business and watch you sales increase by 40%</p>
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