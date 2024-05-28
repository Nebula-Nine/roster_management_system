import { CubeTransparentIcon, BoltIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function RMALogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <CalendarDaysIcon className="h-14 w-14" />
      <p className="text-[40px]">RMA</p>
    </div>
  );
}
