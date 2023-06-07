import { useSaintService } from 'features/saint'
import { usePulseService } from 'features/pulse'
import styled from '@emotion/styled'
import { SaintData } from 'features/saint'
import { PulseData } from 'features/pulse'

type VennSectionProps = {
  saintService: ReturnType<typeof useSaintService>
  pulseService: ReturnType<typeof usePulseService>
}

const VennDiagramBox = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
`

const LeftCircle = styled.div<{ label: string }>`
  width: 300px;
  height: 300px;
  display: flex;
  margin-right: -100px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 255, 0.2);

  position: relative;
  &:after {
    content: '${(props) => props.label}';
    position: absolute;
    top: 0;
    left: 0;
`

const Overlap = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  margin: 0px -100px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  z-index: 2;
`

const RightCircle = styled.div<{ label: string }>`
  width: 300px;
  height: 300px;
  display: flex;
  margin-left: -100px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.2);

  position: relative;
  &:after {
    content: '${(props) => props.label}';
    position: absolute;
    top: 0;
    right: 0;
  }
`

function OverlapCount(saint: SaintData, pulse: PulseData) {
  let count = 0
  const seen = new Set()
  for (const row of saint.rows) {
    seen.add(row.prey)
  }
  for (const row of pulse.rows) {
    if (seen.has(row.geneName)) {
      count++
    }
  }
  return count
}

export const VennSection = ({
  saintService,
  pulseService
}: VennSectionProps) => {
  const filteredSaint = saintService.filter()
  const filteredPulse = pulseService.filter()
  const overlapCount = OverlapCount(filteredSaint, filteredPulse)

  return (
    <VennDiagram
      leftValue={filteredSaint.rows.length}
      leftLabel="Proximity Labeling"
      rightValue={filteredPulse.rows.length}
      rightLabel="Pulse Silac"
      overlapValue={overlapCount}
    />
  )
}

type VennDiagramProps = {
  leftValue: number
  leftLabel: string
  rightValue: number
  rightLabel: string
  overlapValue: number
}

const VennDiagram = ({
  leftValue,
  leftLabel,
  rightValue,
  rightLabel,
  overlapValue
}: VennDiagramProps) => {
  return (
    <VennDiagramBox>
      <LeftCircle label={leftLabel}>{leftValue}</LeftCircle>
      <Overlap>{overlapValue}</Overlap>
      <RightCircle label={rightLabel}>{rightValue}</RightCircle>
    </VennDiagramBox>
  )
}
