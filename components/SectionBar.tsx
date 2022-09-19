import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export const SectionBar = ({ value, onChange }) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(event, newValue)
  }

  return (
    <Tabs variant="fullWidth" value={value} onChange={handleChange}>
      <Tab disableRipple label="Proximity Labeling" />
      <Tab disableRipple label="Pulse Silac" />
      <Tab disableRipple label="Localisation and Expression" />
    </Tabs>
  )
}
