import { useState } from 'react'
import { useSaintData } from 'features/saint/useSaintData'
import { parseMin } from 'utils'

export type SaintRow = {
  id: number
  bait: string
  prey: string
  saintScore: number
  log2FC: number
}

export type SaintData = {
  header: string[]
  rows: SaintRow[]
}

export const useSaintService = (protein: string) => {
  const { status, data } = useSaintData(protein)
  const [minSaintScore, setMinSaintScore] = useState('0.7')
  const [minLog2FC, setMinLog2FC] = useState('')

  function getFilterMask(): boolean[] {
    const minScore = parseMin(minSaintScore)
    const minLog = parseMin(minLog2FC)
    return data.rows.map(
      (row) => row.saintScore >= minScore && row.log2FC >= minLog
    )
  }

  function filter(): SaintData {
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
    minSaintScore,
    setMinSaintScore,
    minLog2FC,
    setMinLog2FC
  }
}
