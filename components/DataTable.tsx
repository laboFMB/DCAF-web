import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export const DataTable = ({ rows, columns, width = 330 }) => {
  function cellContent(row, params) {
    return row[params.field]
  }

  function headerCells() {
    return (
      <TableRow>
        {columns.map((column) => {
          return (
            <TableCell padding="none" key={column.field}>
              {column.headerName}
            </TableCell>
          )
        })}
      </TableRow>
    )
  }

  function rowCells(rowDefinition) {
    return (
      <TableRow key={rowDefinition['']}>
        {columns.map((column) => {
          return (
            <TableCell padding="none" key={column.field + rowDefinition['']}>
              {cellContent(rowDefinition, column)}
            </TableCell>
          )
        })}
      </TableRow>
    )
  }

  return (
    <TableContainer sx={{ maxHeight: '400px' }}>
      <Table
        stickyHeader
        style={{ margin: 'auto', textAlign: 'center' }}
        sx={{ align: 'center', width: width }}
      >
        <TableHead>{headerCells()}</TableHead>
        <TableBody>{rows.map((row) => rowCells(row))}</TableBody>
      </Table>
    </TableContainer>
  )
}
