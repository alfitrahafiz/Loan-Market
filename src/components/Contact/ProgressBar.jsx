const ProgressBar = ({ steps, activeStep }) => {
  return (
    <div className='py-1 px-7 bg-white'>
      <ul className='relative flex flex-row gap-x-2 overflow-x-auto py-4 max-w-full'>
        {steps.map((step, index) => (
          <li key={index} className='shrink basis-0 flex-1 min-w-[80px]'>
            <div className='flex items-center'>
              <span
                className={`w-7 h-7 flex justify-center items-center shrink-0 font-medium rounded-full ${
                  index <= activeStep ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {index + 1}
              </span>
              {/* Garis hanya ditampilkan jika bukan langkah terakhir */}
              {index < steps.length - 1 && (
                <div
                  className={`ms-2 w-full h-[5px] ${
                    index < activeStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                ></div>
              )}
            </div>
            <div className='mt-3'>
              <span className='block text-sm font-medium text-gray-800'>{step}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
