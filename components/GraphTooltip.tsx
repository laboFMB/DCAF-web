import styled from '@emotion/styled'

const CustomTooltip = styled.div`
  display: block;
  padding: 5px;
  border-style: ridge;
  background-color: white;
`

export const GraphTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltip className="custom-tooltip">
        <div>{payload[0].payload.name}</div>
      </CustomTooltip>
    )
  }

  return null
}
