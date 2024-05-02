import { PencilIcon, PlusIcon, TrashIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
//import { deleteInvoice } from '@/app/lib/actions';

export function AddEmployee() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-yellow-400 px-4 text-sm font-medium text-gray transition-colors hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
    >
      <span className="hidden md:block">Add Employee</span>{' '}
      <UserPlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function Edit({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function RemoveEmployee({ id }: { id: string }) {
  const deleteInvoiceWithID = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithID}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}