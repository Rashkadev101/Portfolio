import About from './About';
import Banner from './Banner';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Work from './Work';

const Home = () => {
  return (
    <div>
      {/**Header */}
      <Header />

      {/**Banner */}
      <Banner />

      {/**About us */}
      <About />

      {/**work */}
      <Work />

      {/**Experience */}
      <Experience />
      {/**Footer */}
      <Footer />
    </div>
  );
};

export default Home;
