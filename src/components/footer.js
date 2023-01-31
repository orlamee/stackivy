import logo from "../assets/footerlogo.svg";
import facebook from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/link.svg";
import { Link } from "react-router-dom";

function Footer() {
  return(
    <section className="">
      <footer className="footer-bottom">
        <div className="container">
          <div className="row bottom-line" >
            <div className="col-md-12">
              <div className="row">
                <div className="col-sm mb-3">
                  <img src={logo} alt="logo" className="img-fluid" style={{marginTop: "-18px"}} />
                </div>
                <div className="col-sm mb-3">
                  <h4>Products</h4>
                  <ul className="list-unstyled links">
                    <li><Link to="/savings">Savings</Link></li>
                    <li><Link to="/invest">Invest</Link></li>
                    <li><Link to="/loans">Loan</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Company</h4>
                  <ul className="list-unstyled links">
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/faq">FAQS</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Transparency</h4>
                  <ul className="list-unstyled links">
                    <li><Link to="/terms">Terms & conditions</Link></li>
                    <li><Link to="/privacy">Privacy policy</Link></li>
                  </ul>
                </div>
                <div className="col-sm mb-3">
                  <h4>Address</h4>
                  <ul className="list-unstyled links">
                    <li>33B, Ogundana street, Allen, Ikeja.</li>
                  </ul>
                  <h4 className="mb-3">Contact</h4>
                  <ul className="list-unstyled links">
                    <li>support@stackivy.africa</li>
                    <li>(234)801 000 1234</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-md-10 mb-3">
              <h6>© 2023 Stackivy. All right reserved</h6>
            </div>
            <div className="col-md-2">
              <div className="d-flex flex-row">
                <Link to="/"><img src={facebook} alt="" className="img-fluid me-3" /></Link>
                <Link to="/"><img src={linkedin} alt="" className="img-fluid me-3" /></Link>
                <Link to="/"><img src={twitter} alt="" className="img-fluid me-3" /></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;