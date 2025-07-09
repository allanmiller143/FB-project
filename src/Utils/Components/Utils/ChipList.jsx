// src/components/ChipList.jsx
import React from 'react'
import { Box, Typography, Chip } from '@mui/material'

const ChipList = ({ title, itens = [] }) => {
  if (!itens.length) return null

  return (
    <Box>
      {title && (
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {title}
        </Typography>
      )}

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: 1,
          rowGap: 1,
        }}
      >
        {itens.map((item, i) => (
          <Chip
            key={i}
            label={item}
            variant="outlined"
            color="primary"
            size="small"
          />
        ))}
      </Box>
    </Box>
  )
}

export default ChipList
