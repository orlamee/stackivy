import { Link } from "react-router-dom";
function ResetP() {
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
                    <h3 className="">Reset Password</h3>
                    <h6 className="mt-3">
                      Enter your email to reset password
                    </h6>
                    <form className="mt-5">
                      <div className="mb-5">
                        <input type="email" className="form-control l-control" placeholder="Enter email"/>
                      </div>
                      <Link
                        className="btn btn-primary rounded-pill px-4 py-3 w-100"
                        to="/set-new-password"
                      >
                        Reset Password
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

export default ResetP;