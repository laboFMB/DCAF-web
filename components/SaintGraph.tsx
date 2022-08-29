import { Scatter, ScatterChart, XAxis, YAxis, ZAxis, Tooltip } from 'recharts'

export const SaintGraph = ({ data }) => {
  const rows = data.slice(1).map((rowData: string[]) => {
    return { x: rowData[3], y: rowData[4], z: 1 }
  })
  return (
    <ScatterChart width={400} height={400}>
      <YAxis dataKey="x" type="number" name="saint score" />
      <XAxis dataKey="y" name="log2FC" />
      <ZAxis dataKey="z" range={[0, 30]} />
      <Scatter name="test" data={rows} fill="#8884d8" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  )
}
