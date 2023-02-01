import saving from "../assets/11.svg";
import invest from "../assets/22.svg";
import loans from "../assets/33.svg";


function OurProducts() {
  return (
    <section className="ourproducts">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Our Products</h2>
            <h6 className="mt-4">Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum</h6>
          </div>
        </div>
        <div className="row loans">
          <div className="col-md-4 mb-3">
            <div className="bg-services">
              <img src={saving} alt="savings" className="img-fluid" />
              <h3 className="my-4">Savings</h3>
              <p>We have designed several saving plans to enable you live life on your terms.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-services">
              <img src={invest} alt="savings" className="img-fluid" />
              <h3 className="my-4">Investment</h3>
              <p>We have designed several saving plans to enable you live life on your terms.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-services">
              <img src={loans} alt="savings" className="img-fluid" />
              <h3 className="my-4">Loans</h3>
              <p>We have designed several saving plans to enable you live life on your terms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  
}

export default OurProducts;