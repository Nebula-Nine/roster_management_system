'use client';

import Link from 'next/link';
import { BriefcaseIcon, ClockIcon, UserPlusIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useState } from 'react';
import { addEmployee } from '@/app/lib/actions';


export default function EmployeeForm() {

const [contractedHours, setContractedHours] = useState('');
  const [contractType, setContractType] = useState('');

  return (
    <form action={addEmployee}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Employee Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Employee Name
          </label>
          <div className="relative">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby="name-error"
          />
          <UserPlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        {/* Designation Type */}
        <div className="mb-4">
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">Designation Type</legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="manager"
                  name="designationType"
                  type="radio"
                  value="Manager"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600"
                  aria-describedby="designationType-error"
                />
                <label
                  htmlFor="manager"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                 <BriefcaseIcon className="h-4 w-4" /> Manager 
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="employee"
                  name="designationType"
                  type="radio"
                  value="Employee"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600"
                  aria-describedby="designationType-error"
                />
                <label
                  htmlFor="employee"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                 <UserIcon className="h-4 w-4" /> Employee 
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        </div>

        {/* Contract Type */}
        <div className="mb-4">
            <fieldset>
              <legend className="mb-2 block text-sm font-medium">Contract Type</legend>
              <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      id="casual"
                      name="contract"
                      type="radio"
                      value="Casual"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600"
                      aria-describedby="contract-error"
                      checked={contractType === 'casual'}
      onChange={() => {
        setContractType('casual');
        setContractedHours('0');
      }}
                    />
                    <label
                      htmlFor="casual"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-400 text-white px-3 py-1.5 text-xs font-medium"
                    >
                      Casual
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="partTime"
                      name="contract"
                      type="radio"
                      value="Part-time"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600"
                      aria-describedby="contract-error"
                      checked={contractType === 'partTime'}
      onChange={() => {
        setContractType('partTime');
        setContractedHours('');
      }}
                    />
                    <label
                      htmlFor="partTime"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-400 text-white px-3 py-1.5 text-xs font-medium"
                    >
                      Part-Time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="fullTime"
                      name="contract"
                      type="radio"
                      value="Full-time"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600"
                      aria-describedby="contract-error"
                      checked={contractType === 'fullTime'}
      onChange={() => {
        setContractType('fullTime');
        setContractedHours('38');
      }}
                    />
                    <label
                      htmlFor="fullTime"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-violet-400 text-white px-3 py-1.5 text-xs font-medium"
                    >
                      Full-Time
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
        </div>

        {/* Contract Hours */}
        <div className="mb-4">
          <label htmlFor="contractedHours" className="mb-2 block text-sm font-medium">
            Contract Hours
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="contractedHours"
                name="contractedHours"
                type="number"
                step="1"
                placeholder="Enter contract hours"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="contractedHours-error"
                value={contractedHours}
  onChange={(e) => setContractedHours(e.target.value)}
              />
              <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        
        
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/employee"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add Employee</Button>
      </div>
    </form>
  );
}
