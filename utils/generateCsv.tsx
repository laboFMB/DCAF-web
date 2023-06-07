export const generateCsv = (rows, columns) => {
  let csvString = ''
  const columnNames = columns.map((column) => column.field)
  csvString += columnNames.join(',') + '\n'
  for (const row of rows) {
    csvString +=
      columnNames.map((columnName) => row[columnName]).join(',') + '\n'
  }
  return csvString
}
