import {
  Scatter,
  Legend,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip
} from 'recharts'
import { GraphTooltip } from 'components/GraphTooltip'
import * as colors from 'styles/colors'
import { SaintRow, SaintData } from 'features/saint/useSaintService'

type PointInfo = {
  name: string
  x: number
  y: number
  z: number
}

const makeInfo = (row: SaintRow): PointInfo => {
  return {
    name: row.prey,
    x: row.log2FC,
    y: row.saintScore,
    z: 1
  }
}

type SaintGraphProps = {
  saintData: SaintData
  filterMask: boolean[]
  protein: string
}

export const SaintGraph = ({
  saintData,
  filterMask,
  protein
}: SaintGraphProps) => {
  const data = saintData.rows
  const filteredRows = []
  const otherRows = []
  const DDB1 = []
  const Cul4 = []
  const DCAF = []

  if (data.length !== filterMask.length) {
    console.error('data and filterMask length mismatch')
    return null
  }
  data.forEach((row: SaintRow, i: number) => {
    if (row.prey === 'CUL4A' || row[2] === 'CUL4B') {
      Cul4.push(makeInfo(row))
    } else if (row.prey === 'DDB1') {
      DDB1.push(makeInfo(row))
    } else if (row.prey === protein) {
      DCAF.push(makeInfo(row))
    } else if (filterMask[i]) {
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
