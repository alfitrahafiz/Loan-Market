import React from 'react';
import icons from '@/config/icons';

export const StatsCard = ({ iconKey, label, value }) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow flex items-center space-x-4'>
      <div className='p-3 rounded-full bg-icon-bg'>
        <img src={icons[iconKey]} alt={label} className='w-6 h-6' />
      </div>
      <div>
        <p className='text-sm font-bold'>{label}</p>
        <p className='text-2xl font-semibold text-light-blue'>{value}</p>
      </div>
    </div>
  );
};
