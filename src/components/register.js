import stepone from "../assets/step1.svg";
import { Link } from "react-router-dom";
function Register() {
  return (
    <section className="">
      <div className="d-lg-flex half">
        <Link to="/" className="bg order-1 order-md-1 new-aside"></Link>
        <div className="contents order-2 order-md-2">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="right ms-3">
                  <div className="login-form">
                    <img src={stepone} alt="1" className="img-fluid" />
                    <h3 className="mt-5">Welcome to Stackivy</h3>
                    <h6 className="mt-3">
                      Get started with an account on Stackivy
                    </h6>
                    <form className="mt-5">
                      <div className="row mb-4">
                        <div className="col">
                          <input type="text" className="form-control l-control" placeholder="First name" aria-label="First Name"/>
                        </div>
                        <div className="col">
                          <input type="text" className="form-control l-control" placeholder="Last name" aria-label="Last Name"/>
                        </div>
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-text" id="basic-addon1">+234</span>
                        <input type="tel" className="form-control l-control" placeholder="(000) 000 0000"/>
                      </div>
                      <div className="mb-4">
                        <input type="email" className="form-control l-control" placeholder="Email Address"/>
                      </div>
                      <div className="form-check mb-5 agree">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          I agree to our <Link to="/terms">Terms and Conditions</Link> and <Link to="/privacy"> Privacy Policy</Link>.
                        </label>
                      </div>
                      <Link
                        className="btn btn-primary rounded-pill px-4 py-3 w-100"
                        to="/otp"
                      >
                        Sign Up
                      </Link>
                      <div className="text-center mt-4">
                        <p>Already have an account? <Link to="/login">Log In</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;