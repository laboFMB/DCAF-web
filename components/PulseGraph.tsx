import {
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  LabelList
} from 'recharts'
import { GraphTooltip } from 'components/GraphTooltip'

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
    <ScatterChart width={600} height={400}>
      <Scatter name="test" data={filteredRows} fill="#8884d8" />
      <LabelList dataKey="name" />
      <XAxis dataKey="x" type="number" name="log2FC" />
      <YAxis dataKey="y" name="-log10pvalue" />
      <ZAxis dataKey="z" range={[0, 30]} />
      <Tooltip content={<GraphTooltip />} cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  )
}
