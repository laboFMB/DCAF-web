import { useRef, useState } from 'react'
import { useSaintService } from 'features/saint'
import { usePulseService } from 'features/pulse'
import styled from '@emotion/styled'
import { SaintData } from 'features/saint'
import { PulseData } from 'features/pulse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const Tooltip = styled(List)`
  max-height: 200px;
  min-width: 70px;
  overflow-y: scroll;
  scrollbar-width: thin;
  padding: 0;
  .MuiListItem-root {
    padding: 0;
  }
  .MuiListItemText-root {
    margin: 0;
  }
  background-color: white;
  border: 1px solid black;
`

const GeneListBox = styled.div<{ top: number; left: number; hidden: boolean }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  diplay: ${({ hidden }) => (hidden ? 'none' : 'block')};
`

type Position = {
    top: number
    left: number
}

const TooltipList = ({
    pos,
    list,
    hidden
}: {
    pos: Position
    list: string[]
    hidden: boolean
}) => {
    return (
        <GeneListBox hidden={hidden} top={pos.top} left={pos.left}>
            <Tooltip dense>
                {list.map((el) => (
                    <ListItem key={el}>
                        <ListItemText primary={el} />
                    </ListItem>
                ))}
            </Tooltip>
        </GeneListBox>
    )
}

function VennSets(
    saint: SaintData,
    pulse: PulseData
): [Set<string>, Set<string>, Set<string>] {
    const left = new Set<string>()
    const overlap = new Set<string>()
    const right = new Set<string>()
    for (const row of saint.rows) {
        for (const prey of row.prey.split(';')) {
            left.add(prey)
        }
    }
    for (const row of pulse.rows) {
        for (const gene of row.geneName.split(';')) {
            if (left.has(gene)) {
                overlap.add(gene)
                left.delete(gene)
            } else {
                right.add(gene)
            }
        }
    }
    return [left, overlap, right]
}

type VennSectionProps = {
    saintService: ReturnType<typeof useSaintService>
    pulseService: ReturnType<typeof usePulseService>
}

export const VennSection = ({
    saintService,
    pulseService
}: VennSectionProps) => {
    if (saintService.status === 'loading' || pulseService.status === 'loading') {
        return null
    }
    if (saintService.status === 'error' || pulseService.status === 'error') {
        return null
    }
    const filteredSaint = saintService.filter()
    const filteredPulse = pulseService.filter()
    const [leftSet, overlapSet, rightSet] = VennSets(filteredSaint, filteredPulse)

    return (
        <VennDiagram
            leftSet={leftSet}
            leftLabel="Proximity Labeling"
            rightSet={rightSet}
            rightLabel="Pulse Silac"
            overlapSet={overlapSet}
        />
    )
}

type VennDiagramProps = {
    leftSet: Set<string>
    leftLabel: string
    rightSet: Set<string>
    rightLabel: string
    overlapSet: Set<string>
}

type TooltipState = 'left' | 'right' | 'overlap' | 'none'
type TooltipInfo = {
    state: TooltipState
    position: Position
}

function newTooltipInfo(
    state: TooltipState = 'none',
    top = 0,
    left = 0
): TooltipInfo {
    return {
        state: state,
        position: { top: top, left: left }
    }
}

const VennDiagram = ({
    leftSet,
    leftLabel,
    rightSet,
    rightLabel,
    overlapSet
}: VennDiagramProps) => {
    const leftCircle = useRef(null)
    const rightCircle = useRef(null)
    const box = useRef(null)
    const [tooltipInfo, setTooltipInfo] = useState<TooltipInfo>(newTooltipInfo())

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (leftCircle.current === null || rightCircle.current === null) {
            return
        }
        const leftCirclePosition = leftCircle.current.getBoundingClientRect()
        const rightCirclePosition = rightCircle.current.getBoundingClientRect()
        const boxPosition = box.current.getBoundingClientRect()
        const relativeX = e.clientX - boxPosition.left
        const relativeY = e.clientY - boxPosition.top
        const leftCircleCenter = {
            x: leftCirclePosition.left + leftCirclePosition.width / 2,
            y: leftCirclePosition.top + leftCirclePosition.height / 2
        }
        const rightCircleCenter = {
            x: rightCirclePosition.left + rightCirclePosition.width / 2,
            y: rightCirclePosition.top + rightCirclePosition.height / 2
        }
        const leftCenterToClickDistance = Math.sqrt(
            Math.pow(leftCircleCenter.x - e.clientX, 2) +
            Math.pow(leftCircleCenter.y - e.clientY, 2)
        )
        const rightCenterToClickDistance = Math.sqrt(
            Math.pow(rightCircleCenter.x - e.clientX, 2) +
            Math.pow(rightCircleCenter.y - e.clientY, 2)
        )
        const isInsideLeftCircle = leftCenterToClickDistance < 150
        const isInsideRightCircle = rightCenterToClickDistance < 150
        if (
            isInsideLeftCircle &&
            isInsideRightCircle &&
            tooltipInfo.state !== 'overlap'
        ) {
            setTooltipInfo(newTooltipInfo('overlap', relativeY, relativeX))
        } else if (
            isInsideLeftCircle &&
            !isInsideRightCircle &&
            tooltipInfo.state !== 'left'
        ) {
            setTooltipInfo(newTooltipInfo('left', relativeY, relativeX))
        } else if (
            !isInsideLeftCircle &&
            isInsideRightCircle &&
            tooltipInfo.state !== 'right'
        ) {
            setTooltipInfo(newTooltipInfo('right', relativeY, relativeX))
        } else {
            setTooltipInfo(newTooltipInfo('none', relativeY, relativeX))
        }
    }

    return (
        <VennDiagramBox ref={box} onClick={handleClick}>
            <svg height="350" width="450">
                <path
                    cursor="pointer"
                    id="left"
                    d="M 150, 200
                   m -150, 0
                   a 150,150 0 1,0 300,0
                   a 150,150 0 1,0 -300,0"
                    fill="red"
                    fillOpacity="0.2"
                    ref={leftCircle}
                />

                <path
                    cursor="pointer"
                    id="right"
                    d="M 300, 200
                    m -150, 0
                    a 150,150 0 1,0 300,0
                    a 150,150 0 1,0 -300,0"
                    fill="blue"
                    fillOpacity="0.2"
                    ref={rightCircle}
                />
                <text
                    fontSize="1.3rem"
                    stroke="black"
                    strokeWidth="0"
                    x="100"
                    y="40"
                    textAnchor="middle"
                    fill="black"
                >
                    {leftLabel}
                </text>
                <text
                    fontSize="1.3rem"
                    stroke="black"
                    strokeWidth="0"
                    x="350"
                    y="40"
                    textAnchor="middle"
                    fill="black"
                >
                    {rightLabel}
                </text>
                <text
                    fontSize="1.4rem"
                    stroke="black"
                    strokeWidth="0"
                    x="100"
                    y="200"
                    textAnchor="middle"
                    fill="black"
                >
                    {leftSet.size}
                </text>
                <text
                    fontSize="1.4rem"
                    stroke="black"
                    strokeWidth="0"
                    x="350"
                    y="200"
                    textAnchor="middle"
                    fill="black"
                >
                    {rightSet.size}
                </text>
                <text
                    fontSize="1.4rem"
                    stroke="black"
                    strokeWidth="0"
                    x="225"
                    y="200"
                    textAnchor="middle"
                    fill="black"
                >
                    {overlapSet.size}
                </text>
            </svg>
            <TooltipList
                pos={tooltipInfo.position}
                hidden={tooltipInfo.state != 'left' || leftSet.size == 0}
                list={Array.from(leftSet)}
            />
            <TooltipList
                pos={tooltipInfo.position}
                hidden={tooltipInfo.state != 'overlap' || overlapSet.size == 0}
                list={Array.from(overlapSet)}
            />
            <TooltipList
                pos={tooltipInfo.position}
                hidden={tooltipInfo.state != 'right' || rightSet.size == 0}
                list={Array.from(rightSet)}
            />
        </VennDiagramBox>
    )
}

const VennDiagramBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
