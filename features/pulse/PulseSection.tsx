import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { isValidFloat } from 'utils'
import { usePulseService } from 'features/pulse/usePulseService'
import { PulseTable } from 'features/pulse/PulseTable'
import { PulseGraph } from 'features/pulse/PulseGraph'

type PulseSectionProps = {
  protein: string
  pulseService: ReturnType<typeof usePulseService>
}

export const PulseSection = ({ protein, pulseService }: PulseSectionProps) => {
  if (pulseService.status === 'loading') {
    return <CircularProgress />
  }

  if (pulseService.status === 'error') {
    return <div style={{ color: 'red' }}>Failed to recover the data.</div>
  }

  return (
    <>
      <FlexDiv>
        <FormBox>
          <PValueForm
            minPValue={pulseService.minPValue}
            setMinPValue={pulseService.setMinPValue}
          />
          <FoldChangeForm
            maxLog2FC={pulseService.maxLog2FC}
            setMaxLog2FC={pulseService.setMaxLog2FC}
          />
        </FormBox>
        <PulseTable pulseData={pulseService.filter()} protein={protein} />
      </FlexDiv>
      <FlexDiv>
        <PulseGraph
          pulseData={pulseService.data}
          filterMask={pulseService.getFilterMask()}
        />
      </FlexDiv>
    </>
  )
}

const PValueForm = ({ minPValue, setMinPValue }) => {
  return (
    <FormControl>
      <InputLabel>Minimum P-value</InputLabel>
      <Input
        sx={{ width: '200px' }}
        value={minPValue}
        onChange={(event) => setMinPValue(event.target.value)}
        error={!isValidFloat(minPValue) && minPValue !== ''}
      />
    </FormControl>
  )
}

const FoldChangeForm = ({ maxLog2FC, setMaxLog2FC }) => {
  return (
    <FormControl>
      <InputLabel>Maximum log2 fold change</InputLabel>
      <Input
        sx={{ width: '250px' }}
        value={maxLog2FC}
        onChange={(event) => setMaxLog2FC(event.target.value)}
        error={!isValidFloat(maxLog2FC) && maxLog2FC !== ''}
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
