import stepone from "../assets/step3.svg";
import { Link } from "react-router-dom";
function SetP() {
  return (
    <section className="">
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-1 new-aside"></div>
        <div className="contents order-2 order-md-2">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="right ms-3">
                  <div className="login-form">
                    <img src={stepone} alt="1" className="img-fluid" />
                    <h3 className="mt-5">Set Password</h3>
                    <h6 className="mt-3">
                      Set Password
                    </h6>
                    <form className="mt-5">
                      <div className="mb-5">
                        <input type="password" className="form-control l-control" placeholder="At least 8 characters"/>
                      </div>
                      <Link
                        className="btn btn-primary rounded-pill px-4 py-3 w-100"
                        to="/"
                      >
                        Continue
                      </Link>
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

export default SetP;