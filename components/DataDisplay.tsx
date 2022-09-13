import styled from '@emotion/styled'
import { SaintSection } from 'components/SaintSection'
import { PulseSection } from 'components/PulseSection'
import { ImgSection } from 'components/ImgSection'

const DataDisplayDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  gap: 20px;
`

export const DataDisplay = ({ section, protein }) => {
  if (section === 0) {
    return (
      <DataDisplayDiv>
        <SaintSection protein={protein} />
      </DataDisplayDiv>
    )
  }
  if (section === 1) {
    return (
      <DataDisplayDiv>
        <PulseSection protein={protein} />
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
