import FAQBreadcrumb from '../components/faqBreadcrumb';
import FAQContent from '../components/faqContent';
import Footer from '../components/footer';
import Navbar from '../components/navbar';



function FAQ() {
  return (
    <div>
      <Navbar/>
      <FAQBreadcrumb/>
      <FAQContent/>
      <Footer/>
    </div>
  );
}

export default FAQ;
