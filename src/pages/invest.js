import Footer from '../components/footer';
import GrowBusiness from '../components/growBusiness';
import HeroInvest from '../components/heroInvest';
import O from '../components/investmentOpportunities';
import MouthWater from '../components/mouthWater';
import NavbarInvest from '../components/navbarInvest';
import Standout from '../components/standOut';



function Invest() {
  return (
    <div>
      <NavbarInvest/>
      <HeroInvest/>
      <GrowBusiness/>
      <O/>
      <Standout/>
      <MouthWater/>
      <Footer/>
    </div>
  );
}

export default Invest;
