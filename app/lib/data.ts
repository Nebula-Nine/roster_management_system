import { sql } from '@vercel/postgres';
import {
  User,
  FormattedEmployeeTable,
  EmployeeForm,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';


export async function fetchCardData() {
  noStore();
  try {
    const totalStaffCountPromise = sql`SELECT COUNT(*) FROM employees`;
    const totalManagerCountPromise = sql`SELECT COUNT(*) FROM employees WHERE designation_type = 'Manager'`;
    const totalEmployeeCountPromise = sql`SELECT COUNT(*) FROM employees WHERE designation_type = 'Employee'`;
    
    const data = await Promise.all([
      totalStaffCountPromise,
      totalManagerCountPromise,
      totalEmployeeCountPromise,
    ]);

    const totalNumberOfStaff = Number(data[0].rows[0].count ?? '0');
    const numberOfManagers = Number(data[1].rows[0].count ?? '0');
    const numberOfEmployees = Number(data[2].rows[0].count ?? '0');

    return {
      numberOfManagers,
      totalNumberOfStaff,
      numberOfEmployees
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 10;

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

//employee table
export async function fetchEmployees() {
    noStore();
    try {
      
      const data = await sql<FormattedEmployeeTable>`
        SELECT
          id,
          name,
          contracted_hours,
          contract,
          designation_type
        FROM employees
        ORDER BY id ASC
      `;
  
      const customers = data.rows;
      return customers;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch all customers.');
    }
  }

  export async function fetchEmployeesPages(query: string) {
    noStore();
    try {
      const count = await sql`SELECT COUNT(*)
      FROM employees
      WHERE
        id::text ILIKE ${`%${query}%`} OR
        name ILIKE ${`%${query}%`} OR
        contracted_hours::text ILIKE ${`%${query}%`} OR
        contract ILIKE ${`%${query}%`} OR
        designation_type ILIKE ${`%${query}%`}
    `;
  
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
    }
  }

  export async function fetchFilteredEmployees(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {

        console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
      const employees = await sql<FormattedEmployeeTable>`
        SELECT
          id,
          name,
          contracted_hours,
          contract,
          designation_type
        FROM employees
        WHERE
          id::text ILIKE ${`%${query}%`} OR
          name ILIKE ${`%${query}%`} OR
          contracted_hours::text ILIKE ${`%${query}%`} OR
          contract ILIKE ${`%${query}%`} OR
          designation_type ILIKE ${`%${query}%`}
        ORDER BY employees.id ASC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
  
      return employees.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoices.');
    }
  }

  export async function fetchEmployeeById(id: string) {
    noStore();
    try {
      const data = await sql<EmployeeForm>`
        SELECT
          employees.id,
          employees.name,
          employees.contracted_hours,
          employees.contract,
          employees.designation_type
        FROM employees
        WHERE employees.id = ${id};
      `;
  
      const employee = data.rows.map((employee) => ({
        ...employee,
      }));
  
      console.log(employee);
      return employee[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }