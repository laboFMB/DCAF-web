import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export const ProteinSelect = ({ options, value, onChange }) => {
  return (
    <div style={{ padding: '10px' }}>
      <Select sx={{ height: '40px' }} value={value} onChange={onChange}>
        {options.map((name: string) => (
          <MenuItem
            data-testid={''.concat('protein-select', '-', name)}
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
