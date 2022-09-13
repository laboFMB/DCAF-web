import { useQuery } from '@tanstack/react-query'
import { PulseTable } from 'components/PulseTable'
import { PulseGraph } from 'components/PulseGraph'
import { fetchCsv } from 'utils/fetchCsv'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'

const FlexDiv = styled.div`
  height: 450px;
  min-width: 600px;
`
const fetchPulseFile = async (protein: string) => {
  const url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/PULSE/volcano_plot_web.csv`
  const csv = await fetchCsv(url)
  return csv
}

export const PulseSection = ({ protein }) => {
  const { status, data } = useQuery([protein], () => fetchPulseFile(protein))
  if (status === 'loading') {
    return <CircularProgress />
  } else if (status === 'error') {
    return <div style={{ color: 'red' }}>Failed to recover the data.</div>
  } else {
    return (
      <>
        <FlexDiv>
          <PulseTable data={data} protein={protein} />
        </FlexDiv>
        <FlexDiv>
          <PulseGraph data={data} />
        </FlexDiv>
      </>
    )
  }
}
