import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { download } from 'utils/download'
import { generateCsv } from 'utils/generateCsv'
import { capitalize } from 'utils/capitalize'
import { isValidFloat } from 'utils/isValidFloat'

export const SaintTable = ({ data, protein }) => {
  const [minSaintScore, SetMinSaintScore] = useState('')
  const [minLog2FC, setMinLog2FC] = useState('')

  const rows = data
    .slice(1)
    .map((rowData: string[]) => {
      const row = {}
      for (const i in rowData) {
        if (data[0][i] === '') {
          data[0][i] = 'id'
        }
        row[data[0][i]] = rowData[i]
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
    <div>
      <div style={{ display: 'flex' }}>
        <FormControl>
          <InputLabel>Minimum Saint Score</InputLabel>
          <Input
            sx={{ width: '200px' }}
            value={minSaintScore}
            onChange={(event) => SetMinSaintScore(event.target.value)}
            error={!isValidFloat(minSaintScore) && minSaintScore !== ''}
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
          download(`saint_${protein}.csv`, generateCsv(rows, columns))
        }
      >
        Export
      </Button>
    </div>
  )
}
