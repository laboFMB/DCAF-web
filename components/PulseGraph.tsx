import {
  Scatter,
  ScatterChart,
  ReferenceLine,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  LabelList
} from 'recharts'
import { GraphTooltip } from 'components/GraphTooltip'
import { percentile } from 'utils/percentile'
import * as colors from 'styles/colors'

const makeInfo = (rowData) => {
  return {
    name: rowData[1],
    x: parseFloat(rowData[2]),
    y: -1 * Math.log10(parseFloat(rowData[3])),
    z: 1
  }
}

export const PulseGraph = ({ data, maxPValue, minLog2FC }) => {
  const rows = []
  const filteredRows = []
  const otherRows = []

  for (const rowData of data.slice(1)) {
    if (
      -1 * Math.log10(parseFloat(rowData[3])) <= maxPValue &&
      parseFloat(rowData[2]) >= minLog2FC
    ) {
      filteredRows.push(makeInfo(rowData))
      rows.push(makeInfo(rowData))
    } else {
      otherRows.push(makeInfo(rowData))
      rows.push(makeInfo(rowData))
    }
  }

  console.log(rows)
  console.log(filteredRows)
  console.log(otherRows)
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
          (dataMin) => Math.floor(dataMin),
          (dataMax) => Math.ceil(dataMax)
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
          (dataMin) => Math.floor(dataMin),
          (dataMax) => Math.ceil(dataMax)
        ]}
        dataKey="y"
        name="-log10pvalue"
      />
      <ZAxis dataKey="z" range={[0, 30]} />
      <ReferenceLine
        x={percentile(rows.map((row) => row.x))}
        stroke="grey"
        strokeDasharray="3 3"
      />
      <ReferenceLine
        y={percentile(rows.map((row) => row.y))}
        stroke="grey"
        strokeDasharray="3 3"
      />
      <Tooltip content={<GraphTooltip />} cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  )
}
