import { useState } from 'react'
import { SectionBar } from 'components/SectionBar'
import { NavBar } from 'components/NavBar'
import { ProteinSelect } from 'components/ProteinSelect'
import { useQuery } from '@tanstack/react-query'

const fetchProteinList = async () => {
  const url =
    'https://raw.githubusercontent.com/laboFMB/DCAF-data/main/dcaf_list.txt'
  const response = await fetch(url, {
    method: 'get'
  })
  const text = await response.text()
  return text.split(/\r?\n/)
}

export const DataPage = () => {
  const { status, data } = useQuery(['proteins'], fetchProteinList)
  const [protein, setProtein] = useState(data?.[0] ?? '')
  const [section, setSection] = useState(0)

  const handleProteinChange = (event) => {
    setProtein(event.target.value)
  }
  const handleSectionChange = (_, newValue) => {
    setSection(newValue)
  }
  if (status === 'loading') {
    return (
      <>
        <NavBar />
        <span>isLoading</span>
      </>
    )
  } else {
    return (
      <div style={{ display: 'flex' }}>
        <NavBar />
        <ProteinSelect
          options={data}
          value={protein}
          onChange={handleProteinChange}
        />
        <SectionBar value={section} onChange={handleSectionChange} />
      </div>
    )
  }
}
