import React from 'react'
import { TextField } from '@mui/material'

const TextInput = ({ label, value, setValue, placeholder = '', multiline = false, rows = 4 }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      fullWidth
      size="small"
      variant="outlined"
      multiline={multiline}
      rows={multiline ? rows : 1}
      InputLabelProps={{
        sx: {
          color: 'text.light',
          '&.Mui-focused': {
            color: 'text.light',
          },
          fontSize: '0.875rem',
        },
      }}
      sx={{
        mb: 2,
        borderRadius: 2,
        '& .MuiOutlinedInput-root': {
          color: 'white',
          '& fieldset': {
            borderColor: 'text.light',
          },
          '&:hover fieldset': {
            borderColor: 'text.light',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'text.light',
          },
        },
        '& .MuiInputBase-input::placeholder': {
          color: 'rgba(255,255,255,0.7)',
          opacity: 1,
          fontSize: '0.875rem',
        },
      }}
    />
  )
}

export default TextInput
