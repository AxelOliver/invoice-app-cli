/*
 * Created on 2/12/2022
 *
 * Axel Oliver <axel.oliver@journeyone.com.au>
 *
 * Copyright (c) 2022 Jibility
 */
import { prompt } from 'enquirer'
import { selectCustomers } from '../customers-domain/selectors'
import createCustomerMenu from './create-customer'
import deleteCustomerMenu from './delete-customer'

const CustomerMenu = async () => {
  const response = await prompt({
    type: 'select',
    name: 'customerOption',
    limit: 4,
    initial: 0,
    message: 'Customers Menu',
    choices: ['Create', 'List', 'Delete', 'back'],
  })
  switch (response.customerOption) {
    case 'Create':
      await createCustomerMenu()
      break
    case 'List':
      console.log(selectCustomers())
      break
    case 'Delete':
      await deleteCustomerMenu()
      break

    default:
      break
  }
}

export default CustomerMenu
