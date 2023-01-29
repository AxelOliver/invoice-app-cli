/*
 * Created on 26/11/2022
 *
 * Axel Oliver <axel.oliver@journeyone.com.au>
 *
 * Copyright (c) 2022 Jibility
 */
import invoiceAppStore from 'store/invoiceAppStore'

export const selectCustomers = () => invoiceAppStore.getState().customers
