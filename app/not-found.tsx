import Link from "next/link";
import { GoHome } from "react-icons/go";

export default function NotFoundPage() {
  return (
    <section className='bg-white'>
      <div className='container px-6 py-12 mt-20 mx-auto'>
        <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
          <p className='p-3 text-sm font-medium text-primary rounded-full bg-primary/10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
              />
            </svg>
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800'>Halaman tidak ditemukan</h1>
          <p className='mt-4 text-gray-500'>Halaman yang Anda cari tidak ditemukan.</p>
          <Link
            href='/'
            className='mt-6 px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-primary rounded-lg shrink-0 hover:bg-primary/80 flex items-center gap-x-2'
          >
            <GoHome size={20} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
