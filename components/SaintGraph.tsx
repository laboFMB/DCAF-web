import {
  Scatter,
  Legend,
  ReferenceLine,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip
} from 'recharts'
import { GraphTooltip } from 'components/GraphTooltip'
import { percentile } from 'utils/percentile'
import * as colors from 'styles/colors'

const makeInfo = (rowData) => {
  return {
    name: rowData[2],
    x: parseFloat(rowData[4]),
    y: parseFloat(rowData[3]),
    z: 1
  }
}

export const SaintGraph = ({ data, protein, minSaintScore, minLog2FC }) => {
  const rows = []
  const filteredRows = []
  const otherRows = []
  const DDB1 = []
  const Cul4 = []
  const DCAF = []

  for (const rowData of data.slice(1)) {
    if (rowData[2] === 'CUL4A' || rowData[2] === 'CUL4B') {
      Cul4.push(makeInfo(rowData))
    } else if (rowData[2] === 'DDB1') {
      DDB1.push(makeInfo(rowData))
    } else if (rowData[2] === protein) {
      DCAF.push(makeInfo(rowData))
    } else if (
      parseFloat(rowData[3]) >= minSaintScore &&
      parseFloat(rowData[4]) >= minLog2FC
    ) {
      filteredRows.push(makeInfo(rowData))
      rows.push(makeInfo(rowData))
    } else {
      otherRows.push(makeInfo(rowData))
      rows.push(makeInfo(rowData))
    }
  }

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
        domain={[
          (dataMin) => Math.floor(dataMin),
          (dataMax) => Math.ceil(dataMax)
        ]}
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
      <Scatter name="Other" data={filteredRows} fill={colors.theme} />
      <Scatter name="filtered" data={otherRows} fill={colors.filtered} />
      <Scatter name="Cul4A & Cul4B" data={Cul4} fill={colors.cul4} />
      <Scatter name="DDB1" data={DDB1} fill={colors.ddb1} />
      <Scatter name="DCAF" data={DCAF} fill={colors.dcaf} />
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
      <Legend
        verticalAlign="top"
        height={36}
        payload={[
          { value: 'DCAF', color: colors.dcaf },
          { value: 'CUL4A & CUL4B', color: colors.cul4 },
          { value: 'DDB1', color: colors.ddb1 }
        ]}
      />
    </ScatterChart>
  )
}
