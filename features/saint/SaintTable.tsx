import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { download } from 'utils/download'
import { generateCsv } from 'utils/generateCsv'
import { capitalize } from 'utils/capitalize'
import { SaintData } from './useSaintService'

type SaintDisplayRow = {
  id: string
  bait: string
  preyGene: string
  saintScore: string
  log2fc: string
}

type SaintDisplayColumn = {
  field: string
  type: 'number' | 'string'
  headerName: string
  headerClassName: 'grid-header'
  width: number
}

function toCamelCase(str: string): string {
  return str
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

type SaintDisplayTable = {
  rows: SaintDisplayRow[]
  columns: SaintDisplayColumn[]
}

function saintDataToDisplayTable(saintData: SaintData): SaintDisplayTable {
  const { header, rows: dataRows } = saintData
  const columns = header
    .filter((header) => header != 'id')
    .map((header) => {
      return {
        field: toCamelCase(header),
        type: ['Saint Score', 'log2FC', 'id'].includes(header)
          ? 'number'
          : 'string',
        headerName: capitalize(header),
        headerClassName: 'grid-header',
        width: header === 'id' ? 50 : 100
      } as SaintDisplayColumn
    })
  const rows = dataRows.map((row) => {
    return {
      id: row.id.toString(),
      bait: row.bait,
      preyGene: row.prey,
      saintScore: row.saintScore.toFixed(3),
      log2fc: row.log2FC.toFixed(3)
    } as SaintDisplayRow
  })
  return {
    rows,
    columns
  }
}

type SaintTableProps = {
  saintData: SaintData
  protein: string
}

export const SaintTable = ({ saintData, protein }: SaintTableProps) => {
  const { rows, columns } = saintDataToDisplayTable(saintData)
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
