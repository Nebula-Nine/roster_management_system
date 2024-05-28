import { lusitana } from "@/app/ui/fonts"
import Scheduler from "@/app/ui/roster/scheduler"

export default function page() {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h1 className={`${lusitana.className} text-2xl`}>Roster</h1>
      </div>
      <div>
        <Scheduler/>
      </div>
    </div>
  )
}
