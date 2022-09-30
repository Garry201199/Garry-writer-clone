import './App.css';
import HeroContainer from './Comp/HeroContainer';
import Clients from './Comp/Clients/Clients';
import Features1 from './Comp/Features1';
import Customers from './Comp/Customers/Customers';
import Security from './Comp/Security';
import Footer from './Comp/Footer';

function App() {
  return (
    <div className=' text-black  bg-[#F7F4FF] max-h-screen selection:text-slate-900 selection:bg-sky-300/20 '>
     <HeroContainer/>
      <Clients/>
      <Features1/>
      <Customers/>
      <Security/>
      <Footer/>
    </div>
  );
}

export default App;
