// src/components/News/NewsImageGallery.jsx
import React, { useState } from 'react'
import {
  Box,
  Typography,
  Collapse,
  IconButton,
  Stack
} from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Masonry from '@mui/lab/Masonry'
import { useTranslation } from 'react-i18next';

const NewsImageGallery = ({ images }) => {
  const [expanded, setExpanded] = useState(true)
  const { t } = useTranslation('news_detail');

  if (!images || images.length === 0) return null

  const imageHeight = () => {
    const count = images.length
    if (count <= 3) return 400
    if (count <= 6) return 240
    return 180
  }

  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h5" fontWeight={600} color="primary.main">
        {t('news_detail.images')}
        </Typography>
        <IconButton onClick={() => setExpanded(prev => !prev)} size="small">
          <ArrowDownwardIcon
            sx={{
              transition: 'transform 0.3s',
              transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            }}
          />
        </IconButton>
      </Stack>

      <Collapse in={expanded}>
        <Masonry columns={{ xs: 1, sm: 2, md: 2 }} spacing={2}>
          {images.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Imagem ${index + 1}`}
              loading="lazy"
              sx={{
                width: '100%',
                height: imageHeight(),
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
                display: 'block',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          ))}
        </Masonry>
      </Collapse>
    </Box>
  )
}

export default NewsImageGallery
