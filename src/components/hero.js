import { Link } from "react-router-dom";
import hero from "../assets/hero.png";


function Hero() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mb-3">
            <h2>We are revolutionising
            your concept of comfort.</h2>
            <h6 className="my-5">Created with a can do and achievers mindset. A self-onboarding application with features that open you to a new way.</h6>
            <Link
              className="btn btn-primary rounded-pill px-5 py-3"
              to="/"
            >
              Get Started
            </Link>
          </div>
          <div className="col-md-5" style={{marginTop: "-30px"}}>
            <img src={hero} alt="hero" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
  
}

export default Hero;