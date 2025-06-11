import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './pages/HeroSection';
import AllureSection from './pages/AllureSection';
import MythsRealitySection from './pages/MythsRealitySection';
import GallerySection from './pages/GallerySection';
import HelpSection from './pages/HelpSection';
import TopArc from './components/common/TopArc';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AllureSection />
        <MythsRealitySection />
        <GallerySection />
        <HelpSection />
      </main>
      <TopArc />
      <Footer />
    </div>
  );
}

export default App;
