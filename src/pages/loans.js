import Footer from '../components/footer';
import GetAccess from '../components/getAccess';
import GetLoans from '../components/getLoans';
import Int from '../components/interestRate';
import NavbarWhite from '../components/navbarwhite';
import TypeLoans from '../components/typesOfLoan';


function Loans() {
  return (
    <div>
      <NavbarWhite/>   
      <TypeLoans/>
      <GetAccess/>
      <GetLoans/>
      <Int/>   
      <Footer/>
    </div>
  );
}

export default Loans;
