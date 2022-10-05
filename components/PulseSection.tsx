import { useQuery } from '@tanstack/react-query'
import { PulseTable } from 'components/PulseTable'
import { PulseGraph } from 'components/PulseGraph'
import { fetchCsv } from 'utils/fetchCsv'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { isValidFloat } from 'utils/isValidFloat'

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
  const [minPvalue, setMinPvalue] = useState('1.3')
  const [minLog2FC, setMinLog2FC] = useState('1')
  const correctedMinPvalue = minPvalue === '' ? '-10000' : parseFloat(minPvalue)
  const correctedMinLog2FC = minLog2FC === '' ? '-10000' : parseFloat(minLog2FC)

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
                <InputLabel>Minimum P-value</InputLabel>
                <Input
                  sx={{ width: '200px' }}
                  value={minPvalue}
                  onChange={(event) => setMinPvalue(event.target.value)}
                  error={!isValidFloat(minPvalue) && minPvalue !== ''}
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
            <PulseTable
              data={data}
              protein={protein}
              minPvalue={correctedMinPvalue}
              minLog2FC={correctedMinLog2FC}
            />
          </div>
        </FlexDiv>
        <FlexDiv>
          <PulseGraph
            data={data}
            minPvalue={correctedMinPvalue}
            minLog2FC={correctedMinLog2FC}
          />
        </FlexDiv>
      </>
    )
  }
}
