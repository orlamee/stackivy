import grad from "../assets/grad.svg";
import invest from "../assets/invest.svg";
import save from "../assets/savings.svg";
import { Link } from "react-router-dom";

function SpecialServices() {
  return (
    <section className="special-services">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h2>SPECIAL SERVICES</h2>
            <h3>We Provide Best Facility For Personal Wishes.</h3>
            <p>We offer the best financial assistance for your educational needs.</p>
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-6 mb-3 downing">
            <h1 className="mb-3">Loans</h1>
            <p className="mb-5">You never have to put your educational dream on hold because of finances. With no fuss at all, you can get quick access to our loan facilities. Apply and get the loans into your stackivy account.</p>
            <Link
              className="btn btn-primary rounded-pill px-5 py-3"
              to="/"
            >
              Apply Now
            </Link>
          </div>
          <div className="col-md-6 text-end">
            <img src={grad} alt="grad" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-6 text-end">
            <img src={invest} alt="grad" className="img-fluid w-100" />
          </div>
          <div className="col-md-6 mb-3 downing">
            <h1 className="mb-3">Investments</h1>
            <p className="mb-5">You never have to put your educational dream on hold because of finances. With no fuss at all, you can get quick access to our loan facilities. Apply and get the loans into your stackivy account.</p>
            <Link
              className="btn btn-primary rounded-pill px-5 py-3"
              to="/"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-6 mb-3 downing">
            <h1 className="mb-3">Savings</h1>
            <p className="mb-5">You never have to put your educational dream on hold because of finances. With no fuss at all, you can get quick access to our loan facilities. Apply and get the loans into your stackivy account.</p>
            <Link
              className="btn btn-primary rounded-pill px-5 py-3"
              to="/"
            >
              Apply Now
            </Link>
          </div>
          <div className="col-md-6 text-end">
            <img src={save} alt="grad" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialServices;