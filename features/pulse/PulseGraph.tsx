import {
  Scatter,
  LabelList,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip
} from 'recharts'
import { GraphTooltip } from 'components/GraphTooltip'
import * as colors from 'styles/colors'
import { PulseRow, PulseData } from 'features/pulse/usePulseService'

type PointInfo = {
  name: string
  x: number
  y: number
  z: number
}

const makeInfo = (row: PulseRow): PointInfo => {
  return {
    name: row.geneName,
    x: row.log2FC,
    y: row.log10pVal,
    z: 1
  }
}

type PulseGraphProps = {
  pulseData: PulseData
  filterMask: boolean[]
}

export const PulseGraph = ({ pulseData, filterMask }: PulseGraphProps) => {
  const data = pulseData.rows
  const filteredRows = []
  const otherRows = []

  if (data.length !== filterMask.length) {
    console.error('data and filterMask length mismatch')
    return null
  }
  data.forEach((row: PulseRow, i: number) => {
    if (filterMask[i]) {
      filteredRows.push(makeInfo(row))
    } else {
      otherRows.push(makeInfo(row))
    }
  })

  return (
    <ScatterChart
      width={600}
      height={450}
      margin={{ top: 50, right: 20, bottom: 20, left: 10 }}
    >
      <Scatter name="Other" data={filteredRows} fill={colors.theme} />
      <Scatter name="filtered" data={otherRows} fill={colors.filtered} />
      <LabelList dataKey="name" />
      <XAxis
        label={{
          value: 'log2FC',
          position: 'bottom',
          textAnchor: 'middle'
        }}
        dataKey="x"
        domain={[
          (dataMin: number) => Math.floor(dataMin),
          (dataMax: number) => Math.ceil(dataMax)
        ]}
        type="number"
        name="log2FC"
      />
      <YAxis
        label={{
          value: '-log10pvalue',
          angle: -90,
          position: 'insideLeft',
          textAnchor: 'middle'
        }}
        domain={[
          (dataMin: number) => Math.floor(dataMin),
          (dataMax: number) => Math.ceil(dataMax)
        ]}
        dataKey="y"
        name="-log10pvalue"
      />
      <ZAxis dataKey="z" range={[0, 30]} />
      <Tooltip content={<GraphTooltip />} cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  )
}
