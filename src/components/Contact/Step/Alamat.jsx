import { useState } from 'react';

const FormInput = ({ label, placeholder, name, value, onChange, disabled }) => (
  <div>
    <label className='block text-sm font-medium mb-1'>{label}</label>
    <input
      type='text'
      placeholder={`--${placeholder}--`}
      className='w-full border rounded p-2 text-black'
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  </div>
);

const FormSelect = ({ label, placeholder, name, value, onChange, disabled }) => (
  <div>
    <label className='block text-sm font-medium mb-1'>{label}</label>
    <select
      className='w-full border rounded p-2 text-black '
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option value=''>{`--Pilih ${placeholder}--`}</option>
      <option value=''>{`--Pilih ${placeholder}--`}</option>
    </select>
  </div>
);

const FormHeader = ({ title }) => (
  <div className='bg-dark-blue text-white py-2 px-5 mb-2'>
    <div className='text-xl font-semibold'>{title}</div>
  </div>
);

const FormCheckboxSection = ({ label, checked, onChange, onClear }) => (
  <div className='flex justify-between items-center mb-3'>
    <div className='flex items-center'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='mr-2 transform scale-125'
      />
      <label className='text-sm font-semibold'>{label}</label>
    </div>
    <button onClick={onClear} className='bg-red-500 text-white px-3 py-1 rounded text-sm'>
      CLEAR
    </button>
  </div>
);

const AddressSection = ({ title, data, onChange, isDisabled }) => (
  <div className='mb-4'>
    <FormHeader title={title} />
    <div className='bg-white p-4 border rounded'>
      <div className='grid grid-cols-2 gap-4 mb-3'>
        <FormInput
          label='Alamat Lengkap (Jalan, Komplek, RT/RW)'
          placeholder='Isi Alamat Lengkap'
          name='alamat'
          value={data.alamat}
          onChange={onChange}
          disabled={isDisabled}
        />
        <FormInput
          label='Kode POS'
          placeholder='Isi Kode POS'
          name='kodePos'
          value={data.kodePos}
          onChange={onChange}
          disabled={isDisabled}
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mb-3'>
        <FormSelect
          label='Provinsi'
          placeholder='Provinsi'
          name='provinsi'
          value={data.provinsi}
          onChange={onChange}
          disabled={isDisabled}
        />
        <FormSelect
          label='Kabupaten / Kota'
          placeholder='Kota'
          name='kabupaten'
          value={data.kabupaten}
          onChange={onChange}
          disabled={isDisabled}
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <FormSelect
          label='Kecamatan'
          placeholder='Kecamatan'
          name='kecamatan'
          value={data.kecamatan}
          onChange={onChange}
          disabled={isDisabled}
        />
        <FormSelect
          label='Kelurahan'
          placeholder='Kelurahan'
          name='kelurahan'
          value={data.kelurahan}
          onChange={onChange}
          disabled={isDisabled}
        />
      </div>
    </div>
  </div>
);

const initialAddressState = {
  alamat: '',
  kodePos: '',
  provinsi: '',
  kabupaten: '',
  kecamatan: '',
  kelurahan: '',
};

const Alamat = () => {
  const [ktpAddress, setKtpAddress] = useState(initialAddressState);
  const [domisiliAddress, setDomisiliAddress] = useState(initialAddressState);
  const [workAddress, setWorkAddress] = useState(initialAddressState);
  const [isDomisiliSameAsKtp, setIsDomisiliSameAsKtp] = useState(false);
  const [isWorkSameAsKtp, setIsWorkSameAsKtp] = useState(false);

  const handleKtpChange = (e) => {
    const { name, value } = e.target;
    const newKtpAddress = { ...ktpAddress, [name]: value };
    setKtpAddress(newKtpAddress);

    if (isDomisiliSameAsKtp) setDomisiliAddress(newKtpAddress);
    if (isWorkSameAsKtp) setWorkAddress(newKtpAddress);
  };

  const handleClear = (formType) => {
    if (formType === 'domisili') {
      setDomisiliAddress(initialAddressState);
      setIsDomisiliSameAsKtp(false);
    } else if (formType === 'work') {
      setWorkAddress(initialAddressState);
      setIsWorkSameAsKtp(false);
    }
  };

  const handleUpdate = () => {
    const allData = {
      ktp: ktpAddress,
      domisili: domisiliAddress,
      work: workAddress,
    };
    console.log('Updated Data:', allData);
  };

  return (
    <div className=' max-w-full mx-auto'>
      {/* KTP Section */}
      <AddressSection title='Data KTP' data={ktpAddress} onChange={handleKtpChange} />

      {/* Domisili Section */}
      <FormCheckboxSection
        label='Domisili Sesuai KTP'
        checked={isDomisiliSameAsKtp}
        onChange={(e) => {
          setIsDomisiliSameAsKtp(e.target.checked);
          if (e.target.checked) setDomisiliAddress(ktpAddress);
        }}
        onClear={() => handleClear('domisili')}
      />
      <AddressSection
        title='Data Domisili'
        data={domisiliAddress}
        onChange={(e) =>
          setDomisiliAddress({ ...domisiliAddress, [e.target.name]: e.target.value })
        }
        isDisabled={isDomisiliSameAsKtp}
      />

      {/* Work Address Section */}
      <FormCheckboxSection
        label='Alamat tempat bekerja / perusahaan Sesuai KTP'
        checked={isWorkSameAsKtp}
        onChange={(e) => {
          setIsWorkSameAsKtp(e.target.checked);
          if (e.target.checked) setWorkAddress(ktpAddress);
        }}
        onClear={() => handleClear('work')}
      />
      <AddressSection
        title='Data Alamat Tempat Bekerja'
        data={workAddress}
        onChange={(e) => setWorkAddress({ ...workAddress, [e.target.name]: e.target.value })}
        isDisabled={isWorkSameAsKtp}
      />

      {/* Update Button */}
      <div className='flex justify-end mt-4'>
        <button
          onClick={handleUpdate}
          className='bg-dark-blue text-white px-4 py-2 rounded flex items-center'
        >
          <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
            />
          </svg>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default Alamat;
