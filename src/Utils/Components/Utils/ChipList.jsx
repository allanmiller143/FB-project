// src/components/ChipList.jsx
import React from 'react'
import { Box, Typography, Chip } from '@mui/material'
import { useTranslation } from 'react-i18next';

const ChipList = ({ itens = [] }) => {
  if (!itens.length) return null
  const { t } = useTranslation('publication_detail');

  return (
    <Box>

      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        {t('publication_detail.key_words')}
      </Typography>
  

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
