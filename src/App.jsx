import './App.css';
import Banner from './components/Poster';
import Navbar from './components/Navbar';
import LogoBar from './components/LogoBar';
import Features from './components/Features/Features';
import LatestNews from './components/Berita/LatestNews';
import SubscriptionCard from './components/Features/Berlangganan/Subscription';
import SmartTani from './components/Smarttani'
import Testimonials from './components/Testi';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Banner />
      <LogoBar />
      <Features />
      <LatestNews />
      <SubscriptionCard />
      <SmartTani />
      <Testimonials />
      <Footer/>
   
      
    </>
  );
}

export default App;
