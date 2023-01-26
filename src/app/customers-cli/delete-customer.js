/*
 * Created on 2/12/2022
 *
 * Axel Oliver <axel.oliver@journeyone.com.au>
 *
 * Copyright (c) 2022 Jibility
 */
import { selectCustomers } from '../customers-domain/selectors'
import { deleteCustomer } from '../customers-domain/actions'
import { prompt } from 'enquirer'

const deleteCustomerMenu = async () => {
  const customerObj = await prompt([
    {
      type: 'select',
      name: 'customer',
      message: 'Please select a customer to delete',
      choices: [
        'cancel',
        ...selectCustomers().map((customer) =>
          JSON.stringify(customer, null, '\t'),
        ),
      ],
    },
  ])
  if (customerObj.customer !== 'cancel') {
    const customer = JSON.parse(customerObj.customer)
    deleteCustomer(customer)
    console.log('Customer Deleted', selectCustomers())
  } else {
    console.log(selectCustomers())
  }
}

export default deleteCustomerMenu
