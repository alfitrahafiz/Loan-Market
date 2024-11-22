import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Layout/Sidebar';
import { Navbar } from './components/Layout/Navbar';

import DashboardPage from './pages/Dashboard';
import ContactPage from './pages/Contact';
import LoanPage from './pages/Loan';
import ProductPage from './pages/Product';
import CreditScoringPage from './pages/CreditScoring';
import FAQPage from './pages/FAQ';
import PipelinePage from './pages/Pipeline';
import PipelineDeveloperPage from './pages/PipelineDeveloper';
import MarketingPage from './pages/Marketing';
import WhatsAppPage from './pages/WhatsApp';
import BankPage from './pages/Bank';
import icons from './config/icons';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const user = {
    name: 'YOHANNES AFFANDY',
    email: 'it@loanmarket.co.id',
    role: 'Loan Market Office Dev',
    id: 'LMR9900001',
    phone: '628123456789',
    avatar: icons.avatar,
    call: 'JOJO',
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden'
          onClick={closeSidebar}
        />
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div className='flex-1 lg:ml-64'>
        <Navbar user={user} onMenuClick={toggleSidebar} />

        <Routes>
          {/* Tambahkan route untuk semua halaman */}
          <Route path='/dashboard' element={<DashboardPage user={user} />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/loan' element={<LoanPage />} />
          <Route path='/product/*' element={<ProductPage />} />
          <Route path='/bank' element={<BankPage />} />
          <Route path='/credit-scoring' element={<CreditScoringPage />} />
          <Route path='/faqs' element={<FAQPage />} />
          <Route path='/pipeline' element={<PipelinePage />} />
          <Route path='/pipeline-developer' element={<PipelineDeveloperPage />} />
          <Route path='/marketing/*' element={<MarketingPage />} />
          <Route path='/whatsapp/*' element={<WhatsAppPage />} />

          {/* Redirect default ke dashboard */}
          <Route path='/' element={<Navigate to='/dashboard' replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
