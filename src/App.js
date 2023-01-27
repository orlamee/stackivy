import Counter from './components/counter';
import Footer from './components/footer';
import Hero from './components/hero';
import LoanFeatures from './components/loanFeatures';
import Navbar from './components/navbar';
import SpecialServices from './components/specialServices';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LoanFeatures/>
      <SpecialServices/>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;
