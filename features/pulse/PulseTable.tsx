import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { download } from 'utils/download'
import { generateCsv } from 'utils/generateCsv'
import { capitalize } from 'utils/capitalize'
import { PulseData } from './usePulseService'

type PulseDisplayRow = {
  id: string
  geneName: string
  log2FoldChange: string
  pValue: string
}

type PulseDisplayColumn = {
  field: string
  type: 'number' | 'string'
  headerName: string
  headerClassName: 'grid-header'
  width: number
}

function toCamelCase(str: string): string {
  return str
    .replace('(', ' ')
    .replace(')', ' ')
    .replace('-', ' ')
    .split(' ')
    .map((word, i) => {
      if (i === 0) {
        return word.toLowerCase()
      } else {
        return capitalize(word)
      }
    })
    .join('')
}

type PulseDisplayTable = {
  rows: PulseDisplayRow[]
  columns: PulseDisplayColumn[]
}

function pulseDataToDisplayTable(pulseData: PulseData): PulseDisplayTable {
  const { header, rows: dataRows } = pulseData
  const columns = header
    .filter((header) => header != 'id')
    .map((header) => {
      return {
        field: toCamelCase(header),
        headerName: capitalize(header),
        type: ['log2(Fold change)', 'P-value', 'id'].includes(header)
          ? 'number'
          : 'string',
        headerClassName: 'grid-header',
        width: header === 'id' ? 70 : 140
      } as PulseDisplayColumn
    })
  const rows = dataRows.map((row) => {
    return {
      id: row.id.toString(),
      geneName: row.geneName,
      log2FoldChange: row.log2FC.toFixed(3),
      pValue: row.pValue.toExponential(2)
    } as PulseDisplayRow
  })
  return {
    rows,
    columns
  }
}

type PulseTableProps = {
  pulseData: PulseData
  protein: string
}

export const PulseTable = ({ pulseData, protein }: PulseTableProps) => {
  const { rows, columns } = pulseDataToDisplayTable(pulseData)
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
          download(`pulse_${protein}.csv`, generateCsv(rows, columns))
        }
      >
        Export
      </Button>
    </>
  )
}
