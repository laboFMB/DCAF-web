import { useQuery } from '@tanstack/react-query'
import { SaintTable } from 'components/SaintTable'
import { SaintGraph } from 'components/SaintGraph'

const fetchSaintFile = async (protein: string) => {
  const url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/IP/saint_score_web.csv`
  const response = await fetch(url, { method: 'get' })
  const text = await response.text()
  return text
}

export const SaintSection = ({ protein }) => {
  const { status, data } = useQuery([protein], () => fetchSaintFile(protein))
  if (status === 'loading') {
    return <span>loading...</span>
  } else {
    return (
      <>
        <SaintTable />
        <span>{data}</span>
        <SaintGraph />
      </>
    )
  }
}
