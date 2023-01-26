/*
 * Created on 26/11/2022
 *
 * Axel Oliver <axel.oliver@journeyone.com.au>
 *
 * Copyright (c) 2022 Jibility
 */
import customerMenu from './customers-cli/customer-menu'
import { prompt } from 'enquirer'
import { isEqual } from 'lodash'

const cliIndex = async () => {
  let response
  while (!isEqual(response, { option: 'exit' })) {
    response = await prompt({
      type: 'select',
      name: 'option',
      limit: 3,
      initial: 2,
      message: 'What would you like to do?',
      choices: ['Customers', 'Invoices', 'exit'],
    })
    switch (response.option) {
      case 'Customers':
        await customerMenu()
        break

      default:
        break
    }
    console.log(response)
  }
}

export default cliIndex
