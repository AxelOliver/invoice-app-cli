/*
 * Created on 2/12/2022
 *
 * Axel Oliver <axel.oliver@journeyone.com.au>
 *
 * Copyright (c) 2022 Jibility
 */
import invoiceAppStore from 'store/invoiceAppStore'
import actions from 'data'

export const addCustomer = (customer) => {
  invoiceAppStore.getState().addCustomer(customer)
  const newState = invoiceAppStore.getState()
  actions.overWriteData(newState)
}

export const deleteCustomer = (customer) => {
  invoiceAppStore.getState().deleteCustomer(customer)
  const newState = invoiceAppStore.getState()
  actions.overWriteData(newState)
}
