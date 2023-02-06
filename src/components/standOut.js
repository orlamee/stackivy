import invest from "../assets/st.png";

function Standout() {
  return (
    <section className="stand">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h2>Did you know that investing in the right business can 10X your net worth?</h2>
          </div>
        </div>
        <div className="row save-top">
          <div className="col-md-6 mb-3">
            <img src={invest} alt="invest" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="ex">
              <h4>With Stackivy, you have that business that could make all the difference.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Standout;