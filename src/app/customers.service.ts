import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers = [
    {id:Math.random(), name: 'sandeep', description: 'sandeep description', email:'sandeep@gmail.com',contact: '9666466541'},
    {id:Math.random(), name: 'chinna', description: 'chinna description', email:'chinna@gmail.com',contact: '9849485860'},
    {id:Math.random(), name: 'sanjay', description: 'sanjay description', email:'sanjay@gmail.com',contact: '9293949949'},
    {id:Math.random(), name: 'ganesh', description: 'ganesh description', email:'ganesh@gmail.com',contact: '9666345543'},
    {id:Math.random(), name: 'bannu', description: 'bannu description', email:'bannu@gmail.com',contact: '9938599300'},
    {id:Math.random(), name: 'alex', description: 'alex description', email:'alex@gmail.com',contact: '9666444323'},

  ]

  constructor() { }

  public getCustomers(): Array<{id,name,description,email,contact}> {
    return this.customers;
  }

  public createCustomer (customer: {id,name,description,email,contact}) {
    this.customers.push(customer);
  }
}
