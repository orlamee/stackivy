import CoolCrowd from '../components/coolCrowd';
import Footer from '../components/footer';
import HeroSave from '../components/heroSave';
import MouthWater from '../components/mouthWater';
import NavbarSavings from '../components/navbarSavings';
import SaveBetter from '../components/saveBetter';
import Standout from '../components/standOut';

function Savings() {
  return (
    <div>
      <NavbarSavings/>
      <HeroSave/>
      <SaveBetter/>
      <CoolCrowd/>
      <MouthWater/>
      <Standout/>
      <Footer/>
    </div>
  );
}

export default Savings;
