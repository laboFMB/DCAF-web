import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { useSaintService } from 'features/saint/useSaintService'
import { SaintTable } from 'features/saint/SaintTable'
import { SaintGraph } from 'features/saint/SaintGraph'
import { isValidFloat } from 'utils'

type SaintSectionProps = {
  protein: string
  saintService: ReturnType<typeof useSaintService>
}

export const SaintSection = ({ protein, saintService }: SaintSectionProps) => {
  if (saintService.status === 'loading') {
    return <CircularProgress />
  }

  if (saintService.status === 'error') {
    return <div style={{ color: 'red' }}>Failed to recover the data.</div>
  }

  return (
    <>
      <FlexDiv>
        <FormBox>
          <SaintScoreForm
            minSaintScore={saintService.minSaintScore}
            setMinSaintScore={saintService.setMinSaintScore}
          />
          <FoldChangeForm
            minLog2FC={saintService.minLog2FC}
            setMinLog2FC={saintService.setMinLog2FC}
          />
        </FormBox>
        <SaintTable saintData={saintService.filter()} protein={protein} />
      </FlexDiv>
      <FlexDiv>
        <SaintGraph
          saintData={saintService.data}
          filterMask={saintService.getFilterMask()}
          protein={protein}
        />
      </FlexDiv>
    </>
  )
}

const SaintScoreForm = ({ minSaintScore, setMinSaintScore }) => {
  return (
    <FormControl>
      <InputLabel>Minimum Saint Score</InputLabel>
      <Input
        sx={{ width: '200px' }}
        value={minSaintScore}
        onChange={(event) => setMinSaintScore(event.target.value)}
        error={!isValidFloat(minSaintScore) && minSaintScore !== ''}
      />
    </FormControl>
  )
}

const FoldChangeForm = ({ minLog2FC, setMinLog2FC }) => {
  return (
    <FormControl>
      <InputLabel>Minimum log2 fold change</InputLabel>
      <Input
        sx={{ width: '250px' }}
        value={minLog2FC}
        onChange={(event) => setMinLog2FC(event.target.value)}
        error={!isValidFloat(minLog2FC) && minLog2FC !== ''}
      />
    </FormControl>
  )
}

const FlexDiv = styled.div`
  height: 450px;
  min-width: 600px;
`

const FormBox = styled.div`
  display: flex;
`
