import { useState } from 'react'
import { usePulseData } from 'features/pulse/usePulseData'
import { parseMin } from 'utils'

export type PulseRow = {
  id: number
  geneName: string
  log2FC: number
  pValue: number
  log10pVal: number
}

export type PulseData = {
  header: string[]
  rows: PulseRow[]
}

export const usePulseService = (protein: string) => {
  const { status, data } = usePulseData(protein)
  const [minPValue, setMinPValue] = useState('3')
  const [maxLog2FC, setMaxLog2FC] = useState('-1')

  function getFilterMask(): boolean[] {
    const minLog10PVal = parseMin(minPValue)
    const maxFC = parseMin(maxLog2FC)
    return data.rows.map(
      (row) => row.log10pVal >= minLog10PVal && row.log2FC <= maxFC
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
    maxLog2FC,
    setMaxLog2FC
  }
}
