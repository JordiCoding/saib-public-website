import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import Brokerage from './pages/Brokerage';
import AssetManagement from './pages/AssetManagement';
import InvestmentBanking from './pages/InvestmentBanking';
import RealEstate from './pages/RealEstate';
import PromotionModal from './components/common/PromotionModal';
import { usePromotionPopup } from './hooks/usePromotionPopup';
import { useScrollToTop } from './hooks/useScrollToTop';
import './utils/i18n'; // Initialize i18n

function App() {
  const { popup, isVisible, closePopup } = usePromotionPopup();
  useScrollToTop(); // Scroll to top on route changes

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brokerage" element={<Brokerage />} />
        <Route path="/asset-management" element={<AssetManagement />} />
        <Route path="/investment-banking" element={<InvestmentBanking />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/about" element={<PlaceholderPage title="About Us" />} />
      </Routes>
      
      {/* Promotion Popup */}
      {popup && (
        <PromotionModal
          popup={popup}
          isVisible={isVisible}
          onClose={closePopup}
        />
      )}
    </Layout>
  );
}

export default App;
