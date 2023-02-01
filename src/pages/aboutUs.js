import AboutHero from '../components/aboutHero';
import Footer from '../components/footer';
import Mission from '../components/mission';
import NavbarInvest from '../components/navbarInvest';
import OurProducts from '../components/ourProducts';
import Values from '../components/values';



function AboutUs() {
  return (
    <div>
      <NavbarInvest/>
      <AboutHero/>
      <Mission/>
      <Values/>
      <OurProducts/>
      <Footer/>
    </div>
  );
}

export default AboutUs;
