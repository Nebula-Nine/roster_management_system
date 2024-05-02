import { AddEmployee } from "@/app/ui/employee/buttons"
import Search from '@/app/ui/search';
import { lusitana } from "@/app/ui/fonts"

export default function page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Employees</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search employee..." />
        <AddEmployee />
      </div>
    </div>
  )
}
