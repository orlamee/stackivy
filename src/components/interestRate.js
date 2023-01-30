import pix from "../assets/pix.png";
import pur from "../assets/pur.png";
import ora from "../assets/ora.png";

function Int() {
  return (
    <section className="int bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mt-3">
            <h2 className="mb-4">Interest rates so low, they go <br/>unnoticed</h2>
            <p>while we provide you with access to friendly funds, we don't think you should be charged a lot for it. So we offer you and all our amazing customers one of the lowest loan rates in the market.</p>
          </div>
          <div className="col-md-6">
            <img src={pix} alt="loan" className="img-fluid" />
          </div>
        </div>
        <div className="row loan">
          <div className="col-md-6">
            <img src={pur} alt="loan" className="img-fluid" />
          </div>
          <div className="col-md-6 mt-3">
            <h2 className="mb-4">Enjoy payment flexibility with<br/>our loans.</h2>
            <p>while we provide you with access to friendly funds, we don't think you should be charged a lot for it. So we offer you and all our amazing customers one of the lowest loan rates in the market.</p>
          </div>
        </div>
        <div className="row loan">
          <div className="col-md-6 mb-3 mt-3">
            <h2 className="mb-4">The more loans you pay back, the more funds you can access.</h2>
            <p>while we provide you with access to friendly funds, we don't think you should be charged a lot for it. So we offer you and all our amazing customers one of the lowest loan rates in the market.</p>
          </div>
          <div className="col-md-6">
            <img src={ora} alt="loan" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Int;