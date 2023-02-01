import { Link } from "react-router-dom";
function Signin() {
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
                    <h3 className="">Hi, Welcome Back</h3>
                    <h6 className="mt-3">
                      Login to access your account
                    </h6>
                    <Link
                      className="btn btn-outline-primary rounded-pill px-4 py-3 w-100 my-5"
                      to="/"
                    >
                      <i className="bi bi-box-arrow-in-right me-3 fs-6"></i> Sign in with your SAN ID
                    </Link>
                    <div className="separator">
                      <div className="line"></div>
                      <h5>or</h5>
                      <div className="line"></div>
                    </div>
                    <form className="mt-5">
                      <div className="mb-4">
                        <input type="email" className="form-control l-control" placeholder="Email Address"/>
                      </div>
                      <div className="mb-4">
                        <input type="password" className="form-control l-control" placeholder="Password"/>
                      </div>
                      <div className="mb-5 fp">
                        <div className="form-check agree">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                          </label>
                        </div>
                        <Link to="/forgot-password" className="float-end" style={{marginTop: "-21px"}}>Forgot Password</Link>
                      </div>
                      <Link
                        className="btn btn-primary rounded-pill px-4 py-3 w-100"
                        to=""
                      >
                        Log In
                      </Link>
                      <div className="text-center mt-4">
                        <p>Don't have an account? <Link to="/sign-up">Create Account</Link></p>
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

export default Signin;