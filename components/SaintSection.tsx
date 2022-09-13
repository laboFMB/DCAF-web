import { useQuery } from '@tanstack/react-query'
import { SaintTable } from 'components/SaintTable'
import { SaintGraph } from 'components/SaintGraph'
import { fetchCsv } from 'utils/fetchCsv'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'

const FlexDiv = styled.div`
  height: 450px;
  min-width: 600px;
`

const fetchSaintFile = async (protein: string) => {
  const url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/IP/saint_score_web.csv`
  const csv = await fetchCsv(url)
  return csv
}

export const SaintSection = ({ protein }) => {
  const { status, data } = useQuery([protein], () => fetchSaintFile(protein))
  if (status === 'loading') {
    return <CircularProgress />
  } else if (status === 'error') {
    return <div style={{ color: 'red' }}>Failed to recover the data.</div>
  } else {
    return (
      <>
        <FlexDiv>
          <SaintTable data={data} protein={protein} />
        </FlexDiv>
        <FlexDiv>
          <SaintGraph data={data} />
        </FlexDiv>
      </>
    )
  }
}
