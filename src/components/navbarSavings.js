import { Link } from "react-router-dom";
import logo from "../assets/logo-white.svg";
import savings from "../assets/s.svg";
import loan from "../assets/l.svg";
import invest from "../assets/i.svg";
import 'bootstrap/dist/css/bootstrap.min.css';



function NavbarSavings() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg py-4 navbar-light px-1 navsave">
      <div className="container header">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt=""
            className="img-fluid"
            style={{ marginTop: "-8px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="me-auto">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-current="page"
                  to="/"
                >
                  Products 
                </Link>
                <ul className="dropdown-menu navdrop">
                  <li>
                    <Link to="/savings" className="d-flex flex-row p-2">
                      <img src={savings} alt="save" className="img-fluid me-3" />
                      <h6>Savings</h6>
                    </Link>
                  </li>
                  <li>
                    <Link to="/invest" className="d-flex flex-row p-2">
                      <img src={invest} alt="save" className="img-fluid me-3" />
                      <h6>Investment</h6>
                    </Link>
                  </li>
                  <li>
                    <Link to="/loans" className="d-flex flex-row p-2">
                      <img src={loan} alt="save" className="img-fluid me-3" />
                      <h6>Loans</h6>
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  Business <span className="nav-badge ms-2 border-white">Beta</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-current="page"
                  to="/"
                >
                  Company 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learn-more" target="_blank">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link me-3" href="/login">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-primary btn-save rounded-pill px-4 py-2"
                  to="/"
                >
                  Create Account
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-current="page"
                  to="/"
                >
                  <i className="bi bi-globe fs-5"></i>
                </Link>
                {/* <div className="dropdown-menu dropdown-globe">
                  <div className="row">
                    <div className="col-md-12">
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={earth} alt="" className="img-fluid" />
                          <h2 className="mt-3">Global</h2>
                          <div className="mt-2 ms-5">
                            <p className="d-inline-flex p-1 border text-muted soon">Coming Soon</p>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={naija} alt="" className="img-fluid" />
                          <h2 className="mt-3">Nigeria</h2>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={us} alt="" className="img-fluid" />
                          <h2 className="mt-3 ">United States</h2>
                          <div className="mt-2 ms-5">
                            <p className="d-inline-flex p-1 border text-muted soon">Coming Soon</p>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={uk} alt="" className="img-fluid" />
                          <h2 className="mt-3">United Kingdom</h2>
                          <div className="mt-2 ms-5">
                            <p className="d-inline-flex p-1 border text-muted soon">Coming Soon</p>
                          </div>
                        </div>
                      </Link>
                      <Link>
                        <div className="d-flex flex-row">
                          <img src={zim} alt="" className="img-fluid" />
                          <h2 className="mt-3">Zimbabwe</h2>
                          <div className="mt-2 ms-5">
                            <p className="d-inline-flex p-1 border text-muted soon">Coming Soon</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
  
}

export default NavbarSavings;