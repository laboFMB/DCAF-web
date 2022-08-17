import { useQuery } from '@tanstack/react-query'
import { PulseTable } from 'components/PulseTable'
import { PulseGraph } from 'components/PulseGraph'
import { fetchCsv } from 'components/fetchCsv'

const fetchPulseFile = async (protein: string) => {
  const url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/PULSE/volcano_plot_web.csv`
  const csv = await fetchCsv(url)
  return csv
}

export const PulseSection = ({ protein }) => {
  const { status, data } = useQuery([protein], () => fetchPulseFile(protein))
  console.log(data)
  if (status === 'loading') {
    return <span>loading...</span>
  } else {
    return (
      <>
        <PulseTable />
        <span>{data}</span>
        <PulseGraph />
      </>
    )
  }
}
