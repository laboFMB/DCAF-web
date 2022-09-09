import { useState } from 'react'
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
  const [maximumPValue, setMaximumPValue] = useState(10000)
  const [minimumLog2Fold, setMinimumLog2Fold] = useState(-10000)
  const filtered_data = false
  if (status === 'loading') {
    return <span>loading...</span>
  } else {
    return (
      <>
        <PulseTable data={data} />
        <PulseGraph data={data} />
      </>
    )
  }
}
