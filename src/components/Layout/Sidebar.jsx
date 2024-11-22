import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import icons from '@/config/icons';

export const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { icon: icons.dashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: icons.contact, label: 'Contact', path: '/contact' },
    { icon: icons.loan, label: 'Loan', path: '/loan' },
    {
      icon: icons.product,
      label: 'Product',
      path: '/product',
      hasChildren: true,
      children: [
        { label: 'Bank Product', path: '/product/bank' },
        { label: 'Product', path: '/product/add' },
        { label: 'Category Product', path: '/product/category' },
      ],
    },
    { icon: icons.bank, label: 'Bank', path: '/bank' },
    { icon: icons.creditScoring, label: 'Credit Scoring', path: '/credit-scoring' },
    { icon: icons.faq, label: "FAQ's", path: '/faqs' },
    { icon: icons.pipeline, label: 'Pipeline', path: '/pipeline' },
    { icon: icons.pipeline, label: 'Pipeline Developer', path: '/pipeline-developer' },
    {
      icon: icons.marketing,
      label: 'Marketing Tools',
      path: '/marketing',
      hasChildren: true,
      children: [
        { label: 'Email Campaign', path: '/marketing/email' },
        { label: 'Social Media', path: '/marketing/social' },
      ],
    },
    {
      icon: icons.whatsapp,
      label: 'WhatsApp',
      path: '/whatsapp',
      hasChildren: true,
      children: [
        { label: 'Send Message', path: '/whatsapp/send' },
        { label: 'Templates', path: '/whatsapp/templates' },
      ],
    },
  ];

  const [openMenus, setOpenMenus] = useState({});

  const handleMenuClick = (item) => {
    navigate(item.path);

    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const toggleSubMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActiveMenu = (path) => {
    return location.pathname === path;
  };

  const renderMenuItem = (item, index) => {
    const isActive = isActiveMenu(item.path);
    const hasChildren = item.hasChildren && item.children;

    return (
      <div key={index} className='relative'>
        <div
          className={`
            px-4 py-2 cursor-pointer transition-colors duration-200 rounded-lg
            ${isActive ? 'bg-blue-500 text-white hover:bg-blue-600' : 'hover:bg-gray-100'}
            flex items-center
          `}
          onClick={() => {
            if (hasChildren) {
              toggleSubMenu(item.label);
            } else {
              handleMenuClick(item);
            }
          }}
        >
          <div className='w-5 h-5 mr-3 flex items-center justify-center'>
            <img
              src={item.icon}
              alt={item.label}
              className={`
                w-full h-full object-contain
                ${isActive ? 'brightness-0 invert' : ''}
              `}
            />
          </div>
          <span className={isActive ? 'text-white' : 'text-gray-700'}>{item.label}</span>
          {hasChildren && (
            <ChevronDown
              className={`
                w-4 h-4 ml-auto transform transition-transform duration-200
                ${openMenus[item.label] ? 'rotate-180' : ''}
                ${isActive ? 'text-white' : 'text-gray-500'}
              `}
            />
          )}
        </div>

        {/* Submenu */}
        {hasChildren && openMenus[item.label] && (
          <div className='pl-6 bg-gray-50 rounded-lg mt-1'>
            {item.children.map((child, childIndex) => (
              <div
                key={childIndex}
                className={`
                  px-4 py-2 cursor-pointer transition-colors duration-200 rounded-lg
                  ${isActiveMenu(child.path) ? 'bg-blue-400 text-white' : 'hover:bg-gray-100'}
                `}
                onClick={() => handleMenuClick(child)}
              >
                <span className={isActiveMenu(child.path) ? 'text-white' : 'text-gray-700'}>
                  {child.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`
        fixed top-0 left-0 h-screen bg-white border-r z-30
        transition-transform duration-300 ease-in-out
        w-64 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className='px-4 flex justify-between items-center'>
        <div className='flex w-full justify-center'>
          <img src={icons.logo} alt='Loan Market' className='w-1/3' />
        </div>
        <button onClick={onClose} className='lg:hidden text-gray-500 hover:text-gray-700'>
          <X className='w-6 h-6' />
        </button>
      </div>
      <nav className='mt-7 overflow-y-auto h-[calc(100vh-5rem)] px-2'>
        {navLinks.map(renderMenuItem)}
      </nav>
    </div>
  );
};
