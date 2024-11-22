import { useState } from 'react';
import Alamat from '@/components/Contact/Step/Alamat';
import UploadDokumen from '@/components/Contact/Step/UploadDokumen';
import ProgressBar from '@/components/Contact/ProgressBar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const steps = [
  'Pinjaman',
  'Pekerjaan',
  'Alamat',
  'Informasi Asset',
  'Informasi Tambahan',
  'Upload Dokumen',
  'Review',
  'Pilihan Produk & Bank',
  'Bank Officer',
  'Surat Keterangan',
  'PDF CPA',
  'Summary',
];

const ContactPage = () => {
  const [activeStep, setActiveStep] = useState(2); //  (default ke 3: 'Alamat')

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const renderStep = () => {
    switch (activeStep) {
      case 2:
        return <Alamat />;
      case 5:
        return <UploadDokumen />;
      default:
        return (
          <div>
            <h1 className='bg-gray-200 px-4 py-3 rounded-t-lg font-bold'>{steps[activeStep]}</h1>
            <p className='p-4'>Form untuk langkah ini belum tersedia.</p>
          </div>
        );
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <ProgressBar steps={steps} activeStep={activeStep} />
      <div className='bg-neutral-100 px-7'>
        {/* Navigation Bar */}
        <div className='flex items-center justify-between py-7'>
          <button
            onClick={handlePrev}
            className='p-3 rounded-full bg-light-blue hover:bg-light-blue/70'
            disabled={activeStep === 0}
          >
            <FaArrowLeft className='text-white' />
          </button>
          <h1 className='font-bold text-3xl'>{steps[activeStep]}</h1>
          <button
            onClick={handleNext}
            className='p-3 rounded-full bg-light-blue hover:bg-light-blue/70'
            disabled={activeStep === steps.length - 1}
          >
            <FaArrowRight className='text-white' />
          </button>
        </div>

        {/* Card Section */}
        <div className='bg-white rounded-lg p-5'>{renderStep()}</div>
      </div>
    </>
  );
};

export default ContactPage;
