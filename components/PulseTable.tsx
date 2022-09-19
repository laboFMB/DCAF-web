import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { download } from 'utils/download'
import { generateCsv } from 'utils/generateCsv'
import { capitalize } from 'utils/capitalize'
import { isValidFloat } from 'utils/isValidFloat'

export const PulseTable = ({ data, protein }) => {
  const [maxPValue, setMaxPValue] = useState('')
  const [minLog2FC, setMinLog2FC] = useState('')

  const rows = data
    .slice(1)
    .map((rowData: string[]) => {
      const row = {}
      for (const i in rowData) {
        if (data[0][i] === '') {
          data[0][i] = 'id'
        }
        if (data[0][i] === 'P-value') {
          row[data[0][i]] = parseFloat(rowData[i]).toExponential()
        } else {
          row[data[0][i]] = rowData[i]
        }
      }
      return row
    })
    .filter(
      (row) =>
        row['P-value'] <= parseFloat(maxPValue === '' ? '100000' : maxPValue) &&
        row['log2(Fold change)'] >=
          parseFloat(minLog2FC === '' ? '-10000' : minLog2FC)
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
    <div>
      <div style={{ display: 'flex' }}>
        <FormControl>
          <InputLabel>Maximum P-value</InputLabel>
          <Input
            sx={{ width: '200px' }}
            value={maxPValue}
            onChange={(event) => setMaxPValue(event.target.value)}
            error={!isValidFloat(maxPValue) && maxPValue !== ''}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Minimum log2 fold change</InputLabel>
          <Input
            sx={{ width: '250px' }}
            value={minLog2FC}
            onChange={(event) => setMinLog2FC(event.target.value)}
            error={!isValidFloat(minLog2FC) && minLog2FC !== ''}
          />
        </FormControl>
      </div>
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
    </div>
  )
}