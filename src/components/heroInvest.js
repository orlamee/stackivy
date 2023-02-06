import { Link } from "react-router-dom";

function HeroInvest() {
  return (
    <section className="hero-invest">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h2 className="mb-4 text-white">Invest now and enjoy the future on your terms</h2>
            <h6 className="text-white mb-5">Start investing in stackivy today and enjoy risk free investment portfolio.</h6>
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