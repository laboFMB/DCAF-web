import { useQuery } from '@tanstack/react-query'
import { fetchCsv } from 'utils/fetchCsv'
import { PulseData, PulseRow } from 'features/pulse/usePulseService'

export const usePulseData = (protein: string) => {
  return useQuery(['pulse', protein], () => fetchPulseFile(protein))
}

const fetchPulseFile = async (protein: string): Promise<PulseData> => {
  const url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/PULSE/volcano_plot_web.csv`
  const csv = await fetchCsv(url)
  return parsePulseData(csv as string[][])
}

const parsePulseData = (csv: string[][]): PulseData => {
  const header = csv[0].map((column) => column.trim() || 'id')
  const data: PulseRow[] = csv.slice(1).map((row) => {
    return {
      id: parseInt(row[0]),
      geneName: row[1],
      log2FC: parseFloat(row[2]),
      pValue: parseFloat(row[3]),
      log10pVal: -1 * Math.log10(parseFloat(row[3]))
    } as PulseRow
  })
  return {
    header: header,
    rows: data
  } as PulseData
}
