/*
 * Created on 2/12/2022
 *
 * Axel Oliver <axel.oliver@journeyone.com.au>
 *
 * Copyright (c) 2022 Jibility
 */
import { selectCustomers } from '../customers-domain/selectors'
import { addCustomer } from '../customers-domain/actions'
import { prompt } from 'enquirer'

const createCustomerMenu = async () => {
  const customer = await prompt([
    {
      type: 'form',
      name: 'customer',
      message: 'Please provide the following information:',
      choices: [
        { name: 'firstname', message: 'First Name', initial: 'Jon' },
        { name: 'lastname', message: 'Last Name', initial: 'Smith' },
        { name: 'email', message: 'Email', initial: 'jonSmith@gmail.com' },
      ],
    },
  ])
  addCustomer(customer.customer)
  console.log(selectCustomers())
}

export default createCustomerMenu
