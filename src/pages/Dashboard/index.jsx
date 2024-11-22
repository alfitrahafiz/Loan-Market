import React from 'react';
import { StatsCard } from '@/components/Dashboard/StatsCard';
import { CircularProgress } from '@/components/Dashboard/CircularProgress';
import { DonutChart } from '@/components/Dashboard/DonutChart';
import NameCard from '@/components/Dashboard/NameCard';
import NotificationCard from '@/components/Dashboard/NotoficationCard';

export default function DashboardPage({ user }) {
  const statsData = [
    { iconKey: 'contact', label: 'CONTACT', value: '51' },
    { iconKey: 'loan', label: 'LOAN', value: '56' },
    { iconKey: 'product', label: 'PRODUCT', value: '80' },
    { iconKey: 'bank', label: 'BANK', value: '30' },
  ];

  const bankData = [
    { name: 'KEB Hana Bank', value: 10, color: '#6150C1' },
    { name: 'Mandiri', value: 15, color: '#146C94' },
    { name: 'Bank BTN', value: 20, color: '#51C4E9' },
    { name: 'Anitha Graha', value: 25, color: '#1FFFE1' },
    { name: 'BRI', value: 30, color: '#4A3764' },
  ];

  return (
    <>
      <div className='p-4 lg:p-6'>
        <NameCard user={user} />
      </div>

      <div className='px-4 lg:p-6 bg-neutral-100'>
        {/* Upper Section Container */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
          {/* Left Side - Stats and Progress */}
          <div className='lg:col-span-2'>
            {/* Stats Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Circular Progress Cards */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* Pinjaman Disetujui */}
              <div className='bg-white p-4 lg:p-6 rounded-lg shadow'>
                <h3 className='text-lg font-semibold mb-4 text-center'>PINJAMAN DISETUJUI</h3>
                <CircularProgress percentage={40} label='2/5 Pinjaman telah disetujui' />
              </div>

              {/* Target */}
              <div className='bg-white p-4 lg:p-6 rounded-lg shadow'>
                <h3 className='text-lg font-semibold mb-4 text-center'>TARGET</h3>
                <CircularProgress percentage={280} label='Rp14.000.000.000 / Rp5.000.000.000' />
              </div>
            </div>
          </div>

          {/* Right Side - Notification */}
          <div className='lg:col-span-1'>
            <NotificationCard />
          </div>
        </div>

        {/* Lower Section - Donut Chart */}
        <div className='lg:col-span-2 lg:w-2/3 bg-white p-4 lg:p-6 rounded-lg shadow'>
          <div className='w-full'>
            <DonutChart data={bankData} />
          </div>
        </div>
      </div>
    </>
  );
}
