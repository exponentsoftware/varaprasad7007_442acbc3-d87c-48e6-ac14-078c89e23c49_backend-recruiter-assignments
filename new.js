const exportUserToExcel = require('./exportUserToExcel')

const users = [
  {
    id: 0,
    name: 'peter',
    age: 31,
  },
  {
    id: 1,
    name: 'john',
    age: 23,
  },
]

const workSheetColumnName = ['ID', 'Name', 'Age']

const filePath = './outputFiles/excel-from-js.xlsx'

exportUserToExcel(users, workSheetColumnName, workSheetName, filePath)
