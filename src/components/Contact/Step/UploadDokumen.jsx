import { useState } from 'react';
import { Save, Upload } from 'lucide-react';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';

const UploadDokumen = () => {
  const [sections, setSections] = useState({
    dataPribadi: true,
    dataJaminan: true,
    dataKeuangan: true,
    dataTambahan: true,
  });

  const [files, setFiles] = useState({});

  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFileChange = (fieldName, event) => {
    const file = event.target.files[0];
    setFiles((prev) => ({
      ...prev,
      [fieldName]: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Files to submit:', files);
  };

  const UploadButton = ({ label, name }) => {
    return (
      <div className='flex items-center justify-between py-3 border-b border-gray-200'>
        <label htmlFor={name} className='text-gray-700 w-1/2 font-semibold'>
          {label}
        </label>
        <div className='w-1/3 relative'>
          <input
            type='text'
            readOnly
            value={`--${files[name]?.name || label}--`}
            className='w-full px-3 pr-10 py-2 border rounded text-gray-500 bg-white cursor-pointer truncate md:text-base text-sm'
          />
          <label
            htmlFor={name}
            className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer'
          >
            <Upload className='w-5 h-5 text-gray-500' />
          </label>
          <input
            type='file'
            id={name}
            name={name}
            onChange={(e) => handleFileChange(name, e)}
            className='hidden'
          />
        </div>
      </div>
    );
  };

  const Section = ({ title, isOpen, onToggle, children }) => (
    <div className='mb-4'>
      <button
        type='button'
        onClick={onToggle}
        className='w-full flex items-center px-5 py-3 gap-3 bg-dark-blue text-white rounded-t'
      >
        {isOpen ? <TiArrowSortedUp size={20} /> : <TiArrowSortedDown size={20} />}
        <span>{title}</span>
      </button>
      {isOpen && <div className='border border-t-0 rounded-b p-4 bg-white'>{children}</div>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className='max-w-full mx-auto p-4'>
      <Section
        title='Data Pribadi'
        isOpen={sections.dataPribadi}
        onToggle={() => toggleSection('dataPribadi')}
      >
        <UploadButton label='Fotokopi KTP Pemohon' name='ktp_pemohon' />
        <UploadButton label='Fotokopi KTP Suami / Istri' name='ktp_pasangan' />
        <UploadButton label='Fotokopi Kartu Keluarga' name='kartu_keluarga' />
        <UploadButton label='Fotokopi Akta Nikah/Cerai' name='akta_nikah' />
        <UploadButton label='Fotokopi NPWP Pemohon' name='npwp' />
        <UploadButton
          label='Akta Pisah Harta Notaril dan disahkan ke KUA atau catatan sipil (Jika Ada)'
          name='akta_pisah_harta'
        />
      </Section>

      <Section
        title='Data Jaminan'
        isOpen={sections.dataJaminan}
        onToggle={() => toggleSection('dataJaminan')}
      >
        <UploadButton
          label='Fotokopi Dokumen Jaminan (SHM/SHGB, IMB, dan PBB tahun terakhir'
          name='dokumen_jaminan'
        />
        <UploadButton
          label='Scan Signed PDF Surat Pernyataan Baik yang Dituju, CPA, & Keterangan'
          name='surat_pernyataan'
        />
        <UploadButton
          label='Fotokopi Perjanjian Kredit (Jika Over Kredit)'
          name='perjanjian_kredit'
        />
        <UploadButton label='Dokumen PPJB (Jika Developer)' name='dokumen_ppjb' />
      </Section>

      <Section
        title='Data Keuangan'
        isOpen={sections.dataKeuangan}
        onToggle={() => toggleSection('dataKeuangan')}
      >
        <UploadButton label='Fotokopi SPT / PPh21' name='spt' />
        <UploadButton
          label='Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir'
          name='slip_gaji'
        />
        <UploadButton label='Fotokopi R/K atau tabungan 6 bulan terakhir' name='rekening_koran' />
        <UploadButton label='Surat Keterangan / Rekomendasi Perusahaan' name='surat_rekomendasi' />
      </Section>

      <Section
        title='Data Tambahan'
        isOpen={sections.dataTambahan}
        onToggle={() => toggleSection('dataTambahan')}
      >
        <UploadButton label='File Kekurangan 1' name='kekurangan_1' />
        <UploadButton label='File Kekurangan 2' name='kekurangan_2' />
      </Section>

      <button
        type='submit'
        className='flex gap-3 ms-auto mt-4 bg-dark-blue text-white py-2 px-4 rounded hover:bg-dark-blue/90'
      >
        <Save />
        UPDATE
      </button>
    </form>
  );
};

export default UploadDokumen;
