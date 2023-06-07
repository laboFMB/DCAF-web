import styled from '@emotion/styled'
import { SaintSection, useSaintService } from 'features/saint'
import { PulseSection, usePulseService } from 'features/pulse'
import { VennSection } from 'features/venn'
import { ImgSection } from 'components/ImgSection'

const DataDisplayDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  gap: 20px;
  & > div {
    flex: 50%;
    max-width: 600px;
  }
`

export const DataDisplay = ({ section, protein }) => {
  const saint = useSaintService(protein)
  const pulse = usePulseService(protein)

  if (section === 0) {
    return (
      <>
        <DataDisplayDiv>
          <SaintSection saintService={saint} protein={protein} />
          <VennSection saintService={saint} pulseService={pulse} />
        </DataDisplayDiv>
      </>
    )
  }
  if (section === 1) {
    return (
      <DataDisplayDiv>
        <PulseSection pulseService={pulse} protein={protein} />
        <VennSection saintService={saint} pulseService={pulse} />
      </DataDisplayDiv>
    )
  }
  if (section === 2) {
    return (
      <DataDisplayDiv>
        <ImgSection protein={protein} />
      </DataDisplayDiv>
    )
  }
  return <DataDisplayDiv>dataDisplay</DataDisplayDiv>
}
