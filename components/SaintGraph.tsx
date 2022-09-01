import { Scatter, ScatterChart, XAxis, YAxis, ZAxis, Tooltip } from 'recharts'

export const SaintGraph = ({ data }) => {
  const rows = data.slice(1).map((rowData: string[]) => {
    return { x: parseFloat(rowData[4]), y: parseFloat(rowData[3]), z: 1 }
  })
  return (
    <ScatterChart width={600} height={400}>
      <XAxis dataKey="x" type="number" name="log2FC" />
      <YAxis dataKey="y" domain={[0, 1]} type="number" name="saint score" />
      <ZAxis dataKey="z" range={[0, 30]} />
      <Scatter name="test" data={rows} fill="#8884d8" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  )
}
