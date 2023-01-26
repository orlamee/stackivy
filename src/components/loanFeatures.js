import loan from "../assets/loan.svg";
function LoanFeatures() {
  return (
    <section className="loanfeat">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="separator">
              <div className="line"></div>
              <h3>Loan Features</h3>
              <div className="line"></div>
            </div>
            <img src={loan} alt="loan" className="img-fluid w-100 mt-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoanFeatures