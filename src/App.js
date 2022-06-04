import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import './App.css';
import Work from './components/work/Work';
import Writing from './components/writing/Writing';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="section">
        <div className="wrapper">
          <Header />
          <Hero />
        </div>
      </div>

      <div className="section-alt">
        <div className="wrapper">
          <Work />
        </div>
      </div>

      <div className="section">
        <div className="wrapper">
          <Writing />
        </div>
      </div>

      <div className="section-alt">
        <div className="wrapper">
          <Contact />
        </div>
      </div>

      <div className="section">
        <div className="wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
