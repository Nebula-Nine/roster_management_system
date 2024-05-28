import {
    UserGroupIcon,
    UsersIcon,
    BriefcaseIcon,
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';
  import { fetchCardData } from '@/app/lib/data';
  
  const iconMap = {
    employees: UsersIcon,
    managers: BriefcaseIcon,
    totalEmployees: UserGroupIcon,
  };
  
  export default async function CardWrapper() {
    const{
      totalNumberOfStaff,
      numberOfManagers,
      numberOfEmployees,
    } = await fetchCardData();
    return (
      <>
        <Card title="Total Employees" value={totalNumberOfStaff} type="totalEmployees" />
        <Card title="Managers" value={numberOfManagers} type="managers" />
        <Card title="Employees" value={numberOfEmployees} type="employees" />
      </>
    );
  }
  
  export function Card({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'totalEmployees' | 'managers' | 'employees';
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className="mt-4 rounded-xl bg-[#807be4] p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
          <h3 className="ml-2 text-sm text-white font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      </div>
    );
  }
  