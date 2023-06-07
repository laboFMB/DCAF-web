import { useState } from 'react'
import { usePulseData } from 'features/pulse/usePulseData'
import { parseMin } from 'utils'

export type PulseRow = {
  id: number
  geneName: string
  log2FC: number
  pValue: number
}

export type PulseData = {
  header: string[]
  rows: PulseRow[]
}

export const usePulseService = (protein: string) => {
  const { status, data } = usePulseData(protein)
  const [minPValue, setMinPValue] = useState('1.3')
  const [minLog2FC, setMinLog2FC] = useState('1')

  function getFilterMask(): boolean[] {
    const minLog10PVal = parseMin(minPValue)
    const minFC = parseMin(minLog2FC)
    return data.rows.map(
      (row) =>
        -1 * Math.log10(row.pValue) >= minLog10PVal && row.log2FC >= minFC
    )
  }

  function filter(): PulseData {
    const pulseMask = getFilterMask()
    return {
      header: data.header,
      rows: data.rows.filter((_, index) => pulseMask[index])
    }
  }

  return {
    status,
    data,
    filter,
    getFilterMask,
    minPValue,
    setMinPValue,
    minLog2FC,
    setMinLog2FC
  }
}
