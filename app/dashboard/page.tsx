import { lusitana } from "@/app/ui/fonts"
import { Suspense } from "react"
import CardWrapper from "../ui/dashboard/card"
import { CardsSkeleton } from "../ui/skeletons"

export default function page() {
  return (
    <main>
      <h1 className={`${lusitana.className} text-2xl`}>Dashboard</h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton/>}>
        <CardWrapper/>
      </Suspense>
    </div>
    </main>
  )
}
