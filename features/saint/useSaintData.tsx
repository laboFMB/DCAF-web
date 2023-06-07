import { useQuery } from '@tanstack/react-query'
import { fetchCsv } from 'utils/fetchCsv'
import { SaintData, SaintRow } from 'features/saint/useSaintService'

export const useSaintData = (protein: string) => {
  return useQuery(['saint', protein], () => fetchSaintFile(protein))
}

const fetchSaintFile = async (protein: string): Promise<SaintData> => {
  const url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/IP/saint_score_web.csv`
  const csv = await fetchCsv(url)
  return parseSaintData(csv as string[][])
}

const parseSaintData = (csv: string[][]): SaintData => {
  const header = csv[0].map((column) => column.trim() || 'id')
  const data: SaintRow[] = csv.slice(1).map((row) => {
    return {
      id: parseInt(row[0]),
      bait: row[1],
      prey: row[2],
      saintScore: parseFloat(row[3]),
      log2FC: parseFloat(row[4])
    } as SaintRow
  })
  return {
    header: header,
    rows: data
  } as SaintData
}
