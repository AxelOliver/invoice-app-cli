import dataActions from 'data'
import { filter } from 'lodash'
import { create } from 'zustand'

const invoiceAppStore = create((set) => ({
  ...dataActions.getData(),
  addCustomer: (customer) =>
    set((state) => ({ ...state, customers: [...state.customers, customer] })),
  deleteCustomer: ({ firstName, lastName, email }) =>
    set((state) => ({
      ...state,
      customers: filter(
        state.customers,
        (customer) =>
          !(
            customer.firstName === firstName &&
            customer.lastName === lastName &&
            customer.email === email
          ),
      ),
    })),
}))

export default invoiceAppStore
