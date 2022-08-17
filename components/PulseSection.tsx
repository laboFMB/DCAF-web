import { useQuery } from '@tanstack/react-query'
import { PulseTable } from 'components/PulseTable'
import { PulseGraph } from 'components/PulseGraph'

const fetchPulseFile = async (protein: string) => {
  const url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/PULSE/volcano_plot_web.csv`
  const response = await fetch(url, { method: 'get' })
  const text = await response.text()
  return text
}

export const PulseSection = ({ protein }) => {
  const { status, data } = useQuery([protein], () => fetchPulseFile(protein))
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
