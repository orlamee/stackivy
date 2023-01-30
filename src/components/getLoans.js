import getloans from "../assets/getloans.svg";
import { Link } from "react-router-dom";

function GetLoans() {
  return (
    <section className="getloans">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5 downing">
            <h5 className="mb-5">Get access to funds and enjoy the seamless lifestyle you deserve</h5>
            <p className="mb-5">Checkout our loan interest, using our loan calculator.</p>
            <Link
              className="btn btn-primary rounded-pill px-5 py-3"
              to="/"
            >
              Get Loans
            </Link>
          </div>
          <div className="col-md-6">
            <img src={getloans} alt="loans" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row downing mt-5">
          <div className="col">
            <h2>Grow Your Business With Stackivy</h2>
            <p>Build a successfil business by joining several fast -growing business and watch you sales increase by 40%</p>
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-6 mb-3">
            <div className="loan-cards">
              <h1>Grow Your Business With Stackivy</h1>
              <h1 className="loans">52+</h1>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="loan-cards" style={{background: "#E2E8F0"}}>
              <h1>Grow Your Business With Stackivy</h1>
              <h1 className="loans">52+</h1>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mb-3">
            <div className="loan-cards" style={{backround: "#CBD5E1"}}>
              <h1>Grow Your Business With Stackivy</h1>
              <h1 className="loans">52+</h1>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="loan-cards" style={{background: "#F9FAFB"}}>
              <h1>Grow Your Business With Stackivy</h1>
              <h1 className="loans">52+</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetLoans;