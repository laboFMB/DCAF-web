import { useState } from 'react'
import Box from '@mui/material/Box'
import { SectionBar } from 'components/SectionBar'
import { NavBar } from 'components/NavBar'
import { ProteinSelect } from 'components/ProteinSelect'
import { useQuery } from '@tanstack/react-query'
import { DataDisplay } from 'components/DataDisplay'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const fetchProteinList = async () => {
  const url =
    'https://raw.githubusercontent.com/laboFMB/DCAF-data/main/dcaf_list.txt'
  const response = await fetch(url, {
    method: 'get'
  })
  const text = await response.text()
  const lines = text.split(/\r?\n/).filter((line) => line)
  return lines
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#04AA6D'
    },
    secondary: {
      main: '#04AA6D'
    }
  }
})




export const DataPage = () => {
  const { status, data } = useQuery(['proteins'], fetchProteinList)
  const [protein, setProtein] = useState('AMBRA1')
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
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex' }}>
          <NavBar />
          <Paper elevation={20} sx={{ maxWidth: '1300px' }}>
            <div style={{ display: 'block' }}>
              <Box sx={{ display: 'flex', borderBottom: '1px solid grey' }}>
                <ProteinSelect
                  options={data}
                  value={protein}
                  onChange={handleProteinChange}
                />
                <SectionBar value={section} onChange={handleSectionChange} />
              </Box>
              <DataDisplay section={section} protein={protein} />
            </div>
          </Paper>
        </div>
      </ThemeProvider>
    )
  }
}
