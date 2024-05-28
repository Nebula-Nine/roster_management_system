import { PencilIcon, TrashIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { removeEmployee } from '@/app/lib/actions';

export function AddEmployee() {
  return (
    <Link
      href="/dashboard/employee/add"
      className="flex h-10 items-center rounded-lg bg-[#6760e2] px-4 text-sm font-medium text-white transition-colors hover:bg-[#4f46e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
    >
      <span className="hidden md:block">Add Employee</span>{' '}
      <UserPlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function EditEmployee({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/employee/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function RemoveEmployee({ id }: { id: string }) {
  const removeEmployeeWithID = removeEmployee.bind(null, id);
  return (
    <form action={removeEmployeeWithID}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}