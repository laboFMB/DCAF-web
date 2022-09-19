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

export const PulseGraph = ({ data }) => {
  const rows = data.slice(1).map((rowData: string[]) => {
    return {
      name: rowData[1],
      x: parseFloat(rowData[2]),
      y: -1 * Math.log10(parseFloat(rowData[3])),
      z: 1
    }
  })
  const filteredRows = rows.filter((row) => row.y !== Infinity)
  return (
    <ScatterChart
      width={600}
      height={450}
      margin={{ top: 50, right: 20, bottom: 20, left: 10 }}
    >
      <Scatter name="test" data={filteredRows} fill="#04AA6D" />
      <LabelList dataKey="name" />
      <XAxis
        label={{
          value: 'log2FC',
          position: 'bottom',
          textAnchor: 'middle'
        }}
        dataKey="x"
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
