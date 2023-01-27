import { Link } from "react-router-dom";
import right from "../assets/right.png";

function CoolCrowd() {
  return (
    <section className="coolcrowd bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 save-top">
            <div>
              <h2 className="mb-5">Join the cool crowd.
              Build the future
              you want</h2>
              <Link
                className="btn btn-primary rounded-pill px-5 py-3"
                to="/"
              >
                Join Now
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src={right} alt="group" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoolCrowd;