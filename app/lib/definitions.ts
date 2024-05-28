export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  
export type FormattedEmployeeTable = {
  id: string;
  name: string;
  contracted_hours: number;
  contract: string;
  designation_type: string;
}
  
export type CustomerField = {
  id: string;
  name: string;
};
  
export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
  
export type EmployeeField = {
  id: string;
  name: string;
  contracted_hours: number;
  contract: 'Casual' | 'Part-time' | 'Full-time';
  designation_type: 'Manager' | 'Employee';
};
  
export type EmployeeForm = {
  id: string;
  name: string;
  contracted_hours: number;
  contract: 'Casual' | 'Part-time' | 'Full-time';
  designation_type: 'Manager' | 'Employee';
};