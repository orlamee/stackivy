import { Link } from "react-router-dom";

function HeroInvest() {
  return (
    <section className="hero-invest">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h2 className="mb-4 text-white">Start Investing to Secure a better Financial Future</h2>
            <h6 className="text-white mb-5">Lorem ipsum dolor sit amet consectetur. Scelerisque natoque quis vitae eget tellus. Vitae venenatis egestas facilisis amet auct</h6>
            <Link
              className="btn btn-primary btn-save rounded-pill px-5 py-3"
              to="/"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroInvest;