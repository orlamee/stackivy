import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PrivacyBreadcrumb from '../components/privacyBreadcrumb';
import PrivacyContent from '../components/privacyContent';


function Privacy() {
  return (
    <div>
      <Navbar/>
      <PrivacyBreadcrumb/>
      <PrivacyContent/>
      <Footer/>
    </div>
  );
}

export default Privacy;
