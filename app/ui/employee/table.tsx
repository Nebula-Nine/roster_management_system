import { fetchFilteredEmployees } from '@/app/lib/data';
import ContractType from './contract';
import { EditEmployee, RemoveEmployee } from './buttons';

export default async function EmployeesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const employees = await fetchFilteredEmployees(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {employees?.map((employee) => (
              <div
                key={employee.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{employee.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">ID: {employee.id}</p>
                  </div>
                  <div>
                    <p>Contract Hours</p>
                    <p>{employee.contracted_hours}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>
                      {employee.contract}
                    </p>
                    <p>{employee.designation_type}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <EditEmployee id={employee.id} />
                    <RemoveEmployee id={employee.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contract Hours
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contract Type
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Designation
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {employees?.map((employee) => (
                <tr
                  key={employee.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-5 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{employee.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {employee.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {employee.contracted_hours}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ContractType contract={employee.contract}/>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {employee.designation_type}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <EditEmployee id={employee.id} />
                      <RemoveEmployee id={employee.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
