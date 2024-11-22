import React from 'react';

const NotificationCard = () => {
  const notifications = [
    {
      id: 1,
      time: '2 hrs',
      message: 'admin_branch has updated',
      details: 'Harry Handoko - Contact|MYCRM',
      status: 'active',
    },
    {
      id: 2,
      time: '2 hrs',
      message: 'admin_branch has updated',
      details: 'Harry Handoko - Contact|MYCRM',
      status: 'inactive',
    },
    {
      id: 3,
      time: '4 hrs',
      message: 'admin_branch has updated',
      details: 'Harry Handoko - Contact|MYCRM',
      status: 'active',
    },
    {
      id: 4,
      time: '4 hrs',
      message: 'admin_branch has updated',
      details: 'Harry Handoko - Contact|MYCRM',
      status: 'inactive',
    },
  ];

  return (
    <div className='bg-white rounded-lg shadow p-4 w-full h-full'>
      {/* Header */}
      <div className='flex items-center gap-2 mb-4'>
        <h3 className='text-lg font-semibold'>NOTIFICATION</h3>
      </div>

      {/* Notifications List */}
      <div>
        {notifications.map((notification, index) => (
          <div key={notification.id} className='flex items-start gap-3 relative pl-6'>
            {/* Timeline dot */}
            <div
              className={`absolute left-0 w-3 h-3 rounded-full mt-1.5
                ${notification.status === 'active' ? 'bg-blue-500' : 'bg-gray-500'}`}
            />

            {/* Timeline line */}
            {index !== notifications.length - 1 && (
              <div className='absolute left-1.5 top-4 w-0.5 h-full -ml-px bg-gray-200' />
            )}

            {/* Time */}
            <div className='min-w-16 text-sm text-gray-500 pt-1'>{notification.time}</div>

            {/* Message Content */}
            <div className='flex-1 pb-5'>
              <p className='text-sm font-medium text-gray-900'>{notification.message}</p>
              <p className='text-sm text-gray-500'>{notification.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCard;
