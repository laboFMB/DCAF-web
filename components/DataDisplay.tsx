import styled from '@emotion/styled'
import Image from 'next/image'

const DataDisplayDiv = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  justify-items: center;
`

export const DataDisplay = ({ section, protein }) => {
  if (section === 0) {
    return (
      <DataDisplayDiv>
        <span>datatable</span>
        <span>graph</span>
      </DataDisplayDiv>
    )
  }
  if (section === 1) {
    return (
      <DataDisplayDiv>
        <span>datatable</span>
        <span>graph</span>
      </DataDisplayDiv>
    )
  }
  if (section === 2) {
    const image1Url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/IF/${protein}-Final.jpg`
    const image2Url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/WB/${protein}.jpg`
    return (
      <DataDisplayDiv>
        <Image alt="Western Blot" src={image2Url} height="500px" />
        <Image alt="Immunofluorescence" src={image1Url} height="500px" />
      </DataDisplayDiv>
    )
  }
  return <DataDisplayDiv>dataDisplay</DataDisplayDiv>
}
