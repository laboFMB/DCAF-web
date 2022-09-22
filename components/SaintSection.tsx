import { useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import { SaintTable } from 'components/SaintTable'
import { SaintGraph } from 'components/SaintGraph'
import { fetchCsv } from 'utils/fetchCsv'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { isValidFloat } from 'utils/isValidFloat'

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
  const [minSaintScore, setMinSaintScore] = useState('0.7')
  const [minLog2FC, setMinLog2FC] = useState('')
  const correctedMinSaintScore = minSaintScore === '' ? '-10000':parseFloat(minSaintScore)
  const correctedMinLog2FC = minLog2FC === '' ? '-10000':parseFloat(minLog2FC)

  if (status === 'loading') {
    return <CircularProgress />
  } else if (status === 'error') {
    return <div style={{ color: 'red' }}>Failed to recover the data.</div>
  } else {
    return (
      <>
        <FlexDiv>
        <div>
      <div style={{ display: 'flex' }}>
        <FormControl>
          <InputLabel>Minimum Saint Score</InputLabel>
          <Input
            sx={{ width: '200px' }}
            value={minSaintScore}
            onChange={(event) => setMinSaintScore(event.target.value)}
            error={!isValidFloat(minSaintScore) && minSaintScore !== ''}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Minimum log2 fold change</InputLabel>
          <Input
            sx={{ width: '250px' }}
            value={minLog2FC}
            onChange={(event) => setMinLog2FC(event.target.value)}
            error={!isValidFloat(minLog2FC) && minLog2FC !== ''}
          />
        </FormControl>
      </div>
      </div>
          <SaintTable data={data} protein={protein} minSaintScore={correctedMinSaintScore} minLog2FC={correctedMinLog2FC} />
        </FlexDiv>
        <FlexDiv>
          <SaintGraph data={data} protein={protein}  minSaintScore={correctedMinSaintScore} minLog2FC={correctedMinLog2FC}/>
        </FlexDiv>
      </>
    )
  }
}
