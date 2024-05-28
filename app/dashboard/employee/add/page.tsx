import EmployeeForm from '@/app/ui/employee/add-form';
import Breadcrumbs from '@/app/ui/employee/breadcrumbs';
 
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Employees', href: '/dashboard/employee' },
          {
            label: 'Add Employee',
            href: '/dashboard/employee/add',
            active: true,
          },
        ]}
      />
      <EmployeeForm/>
    </main>
  );
}