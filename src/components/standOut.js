import invest from "../assets/st.png";

function Standout() {
  return (
    <section className="stand">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h2>Stand out with excellent financial portfolios</h2>
          </div>
        </div>
        <div className="row save-top">
          <div className="col-md-6 mb-3">
            <img src={invest} alt="invest" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="ex">
              <h4>By saving with stackivy, you can build a financial portfolios that stands out, giving you more freedom to pursue your dream.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Standout;