import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export const SectionBar = ({ value, onChange }) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(event, newValue)
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Proximity Labeling" />
        <Tab label="Pulse Silac" />
        <Tab label="Localisation and Expression" />
      </Tabs>
    </Box>
  )
}
