import { useLocation } from 'react-router-dom';
import { Bell, ChevronDown, Menu } from 'lucide-react';

export const Navbar = ({ user, onMenuClick }) => {
  const location = useLocation();

  const pageTitles = {
    '/dashboard': 'Dashboard',
    '/contact': 'Edit Aplication',
    '/loan': 'Loan',
    '/product': 'Product',
    '/product/bank': 'Bank Produk',
    '/product/category': 'Category Produk',
    '/product/add': 'Add Product',
    '/bank': 'Bank',
    '/credit-scoring': 'Credit Scoring',
    '/faqs': 'FAQs',
    '/pipeline': 'Pipeline',
    '/pipeline-developer': 'Pipeline Developer',
    '/marketing': 'Marketing Tools',
    '/marketing/email': 'Kampanye Email',
    '/marketing/social': 'Media Sosial',
    '/whatsapp': 'WhatsApp',
    '/whatsapp/send': 'Kirim Pesan',
    '/whatsapp/templates': 'Template Pesan',
  };

  const getPageTitle = () => {
    const matchedTitle = Object.keys(pageTitles)
      .filter((path) => location.pathname.startsWith(path))
      .sort((a, b) => b.length - a.length)[0];

    return pageTitles[matchedTitle] || 'Halaman Tidak Dikenal';
  };

  return (
    <div className='h-16 bg-white border-b flex items-center justify-between px-4'>
      <div className='flex items-center'>
        <button onClick={onMenuClick} className='lg:hidden mr-4 text-gray-500 hover:text-gray-700'>
          <Menu className='w-6 h-6' />
        </button>
        <h1 className='text-2xl font-semibold text-gray-800'>{getPageTitle()}</h1>
      </div>
      <div className='flex items-center space-x-4 border-x-2 px-4 border-gray-200 divide-x-2'>
        <button>
          <Bell className='w-5 h-5 text-gray-600' />
        </button>
        <div className='flex items-center pl-4'>
          <span className='hidden md:inline mr-2'>{user.name}</span>
          <button>
            <ChevronDown className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
};
