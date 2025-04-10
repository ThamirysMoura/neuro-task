import Header from './components/Header';
import MainContent from './components/MainContent';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Objectives from './components/Objectives';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background:'#202020',minHeight:'100vh'}}>
      <Header />
     <MainContent />
     <Features />
     <Benefits />
     <Objectives />
     <Footer />
    </div>
  );
}

export default App;