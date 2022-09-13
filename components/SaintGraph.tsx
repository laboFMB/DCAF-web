import { Scatter, ScatterChart, XAxis, YAxis, ZAxis, Tooltip } from 'recharts'
import { GraphTooltip } from 'components/GraphTooltip'

export const SaintGraph = ({ data }) => {
  const rows = data.slice(1).map((rowData: string[]) => {
    return {
      name: rowData[2],
      x: parseFloat(rowData[4]),
      y: parseFloat(rowData[3]),
      z: 1
    }
  })
  return (
    <ScatterChart
      width={600}
      height={450}
      margin={{ top: 50, right: 20, bottom: 20, left: 10 }}
    >
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
          value: 'SaintScore',
          angle: -90,
          position: 'insideLeft',
          textAnchor: 'middle'
        }}
        dataKey="y"
        domain={[0, 1]}
        type="number"
        name="saint score"
      />
      <ZAxis dataKey="z" range={[0, 30]} />
      <Scatter name="test" data={rows.slice()} fill="#042fcc" />
      <Tooltip content={<GraphTooltip />} cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  )
}
