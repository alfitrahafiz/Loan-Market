import React from 'react';
import icons from '../../config/icons';

export default function NameCard({ user }) {
  return (
    <div className='bg-white p-4 rounded-lg'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-7'>
        {/* Avatar */}
        <div className='flex justify-center sm:justify-start'>
          <img
            src={user.avatar}
            alt={user.name}
            className=' sm:w-20 sm:h-20 rounded-full object-cover'
          />
        </div>

        {/* User Info */}
        <div className='flex-1 space-y-3'>
          {/* Name and Call Sign */}
          <h2 className='text-xl sm:text-2xl font-semibold text-sky-400 text-center sm:text-left'>
            {user.name} ({user.call})
          </h2>

          {/* Info Grid */}
          <div className='flex flex-col sm:flex-row sm:divide-x sm:divide-neutral-300 gap-4 sm:gap-7'>
            {/* Left Column */}
            <div className='space-y-2'>
              {['role', 'id'].map((key) => (
                <div key={key} className='flex items-center gap-3'>
                  <img src={icons[key]} alt={key} className='w-5 sm:w-6' />
                  <p className='text-sm sm:text-base break-all'>{user[key]}</p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className='sm:pl-7 space-y-2'>
              {['email', 'phone'].map((key) => (
                <div key={key} className='flex items-center gap-3'>
                  <img src={icons[key]} alt={key} className='w-5 sm:w-6' />
                  <p className='text-sm sm:text-base break-all'>{user[key]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
