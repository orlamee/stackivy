import Footer from '../components/footer';
import GrowBusiness from '../components/growBusiness';
import HeroInvest from '../components/heroInvest';
import O from '../components/investmentOpportunities';
import NavbarInvest from '../components/navbarInvest';



function Invest() {
  return (
    <div>
      <NavbarInvest/>
      <HeroInvest/>
      <GrowBusiness/>
      <O/>
      <Footer/>
    </div>
  );
}

export default Invest;
