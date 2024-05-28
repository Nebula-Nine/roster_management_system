import EditEmployeeForm from '@/app/ui/employee/edit-form';
import Breadcrumbs from '@/app/ui/employee/breadcrumbs';
import { fetchEmployeeById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [employee] = await Promise.all([
        fetchEmployeeById(id),
      ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Employee', href: '/dashboard/employee' },
          {
            label: 'Edit Employee Details',
            href: `/dashboard/employee/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditEmployeeForm employee={employee}/>
    </main>
  );
}