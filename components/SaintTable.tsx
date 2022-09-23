import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { download } from 'utils/download'
import { generateCsv } from 'utils/generateCsv'
import { capitalize } from 'utils/capitalize'

export const SaintTable = ({ data, protein, minSaintScore, minLog2FC }) => {
  const rows = data
    .slice(1)
    .map((rowData: string[]) => {
      const row = {}
      for (const i in rowData) {
        if (data[0][i] === '') {
          data[0][i] = 'id'
        }
        if (data[0][i] === 'log2FC') {
          row[data[0][i]] = parseFloat(rowData[i]).toFixed(3)
        } else {
          row[data[0][i]] = rowData[i]
        }
      }
      return row
    })
    .filter(
      (row) =>
        row['Saint Score'] >=
          parseFloat(minSaintScore === '' ? '-100000' : minSaintScore) &&
        row['log2FC'] >= parseFloat(minLog2FC === '' ? '-10000' : minLog2FC)
    )
  const columns = data[0].map((header) => {
    return {
      field: header,
      type: ['Saint Score', 'log2FC', 'id'].includes(header)
        ? 'number'
        : 'string',
      headerName: capitalize(header),
      headerClassName: 'grid-header',
      width: header === 'id' ? 50 : 100
    }
  })
  return (
    <>
      <Box
        sx={{
          height: 400,
          width: 600,
          '& .grid-header': {
            borderBottom: '1px solid grey'
          }
        }}
      >
        <DataGrid
          rowHeight={25}
          disableColumnMenu={true}
          rows={rows}
          columns={columns}
        />
      </Box>
      <Button
        onClick={() =>
          download(`saint_${protein}.csv`, generateCsv(rows, columns))
        }
      >
        Export
      </Button>
    </>
  )
}
