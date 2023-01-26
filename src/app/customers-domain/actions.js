/*
 * Created on 2/12/2022
 *
 * Axel Oliver <axel.oliver@journeyone.com.au>
 *
 * Copyright (c) 2022 Jibility
 */
import { isEqual } from 'lodash'
import { selectCustomers } from './selectors'

export const createCustomer = (customer) => {
  const customers = selectCustomers()
  customers.push(customer)
}

export const deleteCustomer = (customer) => {
  console.log({ customer })
  const customers = selectCustomers()
  const index = customers.findIndex((existingCustomer) =>
    isEqual(existingCustomer, customer),
  )
  if (index !== -1) {
    customers.splice(index, 1)
  }
}
