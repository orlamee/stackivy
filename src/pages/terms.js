import Footer from '../components/footer';
import Navbar from '../components/navbar';
import TermsBreadcrumb from '../components/termsBreadcrumb';
import TermsContent from '../components/termsContent';


function Terms() {
  return (
    <div>
      <Navbar/>
      <TermsBreadcrumb/>
      <TermsContent/>
      <Footer/>
    </div>
  );
}

export default Terms;
