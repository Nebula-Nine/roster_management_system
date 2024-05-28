'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
    id: z.string(),
    employeeName: z.string(),
    employeeContratedHours: z.coerce.number(),
    employeeContractType: z.string(),
    employeeDesignation: z.string(),
})

const AddEmployee = FormSchema.omit({id: true});
const UpdateEmployee = FormSchema.omit({id: true});

export async function addEmployee(formData: FormData) {
    const {employeeName, employeeContratedHours, employeeContractType, employeeDesignation} = AddEmployee.parse({
        employeeName: formData.get('name'),
        employeeContratedHours: formData.get('contractedHours'),
        employeeContractType: formData.get('contract'),
        employeeDesignation: formData.get('designationType')
    });

    await sql`
    INSERT INTO employees (name, contracted_hours, contract, designation_type)
    VALUES (${employeeName}, ${employeeContratedHours}, ${employeeContractType}, ${employeeDesignation})
  `;

  revalidatePath('/dashboard/employee');
  redirect('/dashboard/employee');
}

export async function updateEmployee(id: string, formData: FormData) {
    const {employeeName, employeeContratedHours, employeeContractType, employeeDesignation} = UpdateEmployee.parse({
        employeeName: formData.get('name'),
        employeeContratedHours: formData.get('contractedHours'),
        employeeContractType: formData.get('contract'),
        employeeDesignation: formData.get('designationType')
    });

    try {
        await sql`
          UPDATE employees
          SET name = ${employeeName}, contracted_hours = ${employeeContratedHours}, contract = ${employeeContractType}, designation_type = ${employeeDesignation}
          WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Update Employee.', 
        };
    }

  revalidatePath('/dashboard/employee');
  redirect('/dashboard/employee');
}

export async function removeEmployee(id: string) {
    await sql`DELETE FROM employees WHERE id = ${id}`;
    revalidatePath('/dashboard/employee');
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }