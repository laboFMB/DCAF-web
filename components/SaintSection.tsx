import { useQuery } from '@tanstack/react-query'
import { SaintTable } from 'components/SaintTable'
import { SaintGraph } from 'components/SaintGraph'
import { fetchCsv } from 'components/fetchCsv'

const fetchSaintFile = async (protein: string) => {
  const url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/IP/saint_score_web.csv`
  const csv = await fetchCsv(url)
  return csv
}

export const SaintSection = ({ protein }) => {
  const { status, data } = useQuery([protein], () => fetchSaintFile(protein))
  console.log(data)
  if (status === 'loading') {
    return <span>loading...</span>
  } else {
    return (
      <>
        <SaintTable data={data} />
        <SaintGraph />
      </>
    )
  }
}
