import { DataTable } from 'components/DataTable'

export const SaintTable = ({ data }) => {
  const rows = data.slice(1).map((rowData: string[]) => {
    const row = {}
    for (const i in rowData) {
      row[data[0][i]] = rowData[i]
    }
    return row
  })
  const columns = data[0].map((header) => {
    return { field: header, headerName: header }
  })
  console.log(rows)
  console.log(columns)
  return <DataTable rows={rows} columns={columns} />
}
