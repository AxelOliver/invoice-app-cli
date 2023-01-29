import fs from 'fs'

const filePath = './public/state.json'

const overWriteData = ({ customers, invoices }) => {
  const dataObject = { customers, invoices }
  try {
    fs.writeFileSync(filePath, JSON.stringify(dataObject, null, 2), 'utf8')
  } catch (err) {
    console.error('An error occured while saving file...', err)
  }
}

const getData = () => JSON.parse(fs.readFileSync(filePath, 'utf8'))

const actions = { overWriteData, getData }

export default actions
