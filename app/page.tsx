import RMAlogo from '@/app/ui/rma-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#4f46e5] p-4 md:h-52">
        <RMAlogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} antialiased text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong className='text-[#6760e2]'>Welcome to Roster Management Application (RMA). </strong> 
            The <text className='text-[#6760e2]'>rostering</text> solution for your business. 
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-[#6760e2] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4f46e5] md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
