import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { download } from 'utils/download'
import { generateCsv } from 'utils/generateCsv'
import { capitalize } from 'utils/capitalize'

export const PulseTable = ({ data, protein, minPvalue, minLog2FC }) => {
  const rows = data
    .slice(1)
    .map((rowData: string[]) => {
      const row = {}
      for (const i in rowData) {
        if (data[0][i] === '') {
          data[0][i] = 'id'
        }
        if (data[0][i] === 'P-value') {
          row[data[0][i]] = parseFloat(rowData[i]).toExponential(2)
        } else if (data[0][i] === 'log2(Fold change)') {
          row[data[0][i]] = parseFloat(rowData[i]).toFixed(3)
        } else {
          row[data[0][i]] = rowData[i]
        }
      }
      return row
    })
    .filter(
      (row) =>
        row['P-value'] >=
          -1 *
            Math.log10(parseFloat(minPvalue === '' ? '-100000' : minPvalue)) &&
        row['log2(Fold change)'] >=
          parseFloat(minLog2FC === '' ? '-100000' : minLog2FC)
    )

  const columns = data[0].map((header) => {
    return {
      field: header,
      headerName: capitalize(header),
      type: ['log2(Fold change)', 'P-value', 'id'].includes(header)
        ? 'number'
        : 'string',
      headerClassName: 'grid-header',
      width: header === 'id' ? 70 : 140
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
          download(`PULSE_${protein}.csv`, generateCsv(rows, columns))
        }
      >
        Export
      </Button>
    </>
  )
}
