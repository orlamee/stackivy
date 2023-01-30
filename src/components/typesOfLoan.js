import { Link } from "react-router-dom";

function TypeLoans() {
  return (
    <section className="typeloans">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 px-0">
            <div className="s-loan">
              <h6 className="l-heading">Study Loans</h6>
              <h4 className="l-text">Study abroad with ease. Get access to financial facilities that will accelerate your educational journey</h4>
              <Link
                className="btn btn-primary btn-save rounded-pill px-4 py-2"
                to="/"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="b-loan">
              <h6 className="l-heading">Business Loans</h6>
              <h4 className="l-text">Grow your business with unlimited capital. We love building big businesses and yours is the next one.</h4>
              <Link
                className="btn btn-primary btn-save rounded-pill px-4 py-2"
                to="/"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="p-loan">
              <h6 className="l-heading">Personal Loans</h6>
              <h4 className="l-text">You never have to get stranded again, when you have friendly funds at your finger tips. Why not take advantage now?</h4>
              <Link
                className="btn btn-primary btn-save rounded-pill px-4 py-2"
                to="/"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TypeLoans;