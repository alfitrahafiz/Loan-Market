import React from 'react';

export const CircularProgress = ({ percentage, label }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative'>
        <svg className='w-32 h-32'>
          <circle
            className='text-gray-200'
            strokeWidth='10'
            stroke='currentColor'
            fill='transparent'
            r='56'
            cx='64'
            cy='64'
          />
          <circle
            className='text-blue-500'
            strokeWidth='10'
            strokeLinecap='round'
            stroke='currentColor'
            fill='transparent'
            r='56'
            cx='64'
            cy='64'
            strokeDasharray={`${percentage * 3.51} 351`}
            transform='rotate(-90 64 64)'
          />
        </svg>
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-2xl font-bold'>{percentage}%</span>
        </div>
      </div>
      <p className='mt-2 text-center'>{label}</p>
      {/* <p className='text-sm text-gray-500'>{subLabel}</p> */}
    </div>
  );
};
