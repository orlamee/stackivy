import save from "../assets/savehero.svg";
import { Link } from "react-router-dom";

function HeroSave() {
  return (
    <section className="hero-save">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-3 offset-md-2 mt-5" >
            <h2 className="">Build up your savings for a better <span className="future">financial future</span></h2>
            <h6 className="my-5 text-white">Start building up your savings and set up your tomorrow to be better. We are here to help.</h6>
            <Link
              className="btn btn-primary rounded-pill btn-save px-5 py-3"
              to="/"
            >
              Get Started
            </Link>
          </div>
          <div className="col-md-5 offset-md-1 p-0 text-end mb-n1">
            <img src={save} alt="savings" className="img-fluid w-100" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default HeroSave; 