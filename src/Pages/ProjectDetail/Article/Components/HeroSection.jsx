import React, { useState } from 'react'
import { Box, Typography, Divider, Stack, Paper, Button } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { motion } from 'framer-motion'
import DownloadDialog from './DownloadDialog' // ajuste o caminho conforme sua pasta

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

const HeroSection = ({ projeto }) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 6 }}>
      <MotionBox
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        sx={{ flex: 1 }}
      >
        <MotionTypography variant="h3" fontWeight={400} color="primary.main" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}>
          {projeto.titulo}
        </MotionTypography>

        <MotionTypography variant="subtitle1" color="text.secondary" gutterBottom>
          {projeto.descricao}
        </MotionTypography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
          <MotionTypography variant="body2" color="text.secondary" mb={1}>
            <strong>Publicado em:</strong> {projeto.data}
          </MotionTypography>

 
            <Button
              onClick={() => {setDialogOpen(true)}}
              startIcon={<PictureAsPdfIcon />}
              variant="text"
              sx={{
                color: 'primary.main',
                textTransform: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                  color: 'primary.main'
                }
              }}
            >
              Acessar via site da revista
            </Button>
    
        </Box>

        {projeto.image && (
          <Box
            component="img"
            src={projeto.image}
            alt={projeto.titulo}
            sx={{ width: '100%', maxHeight: { xs: 260, md: 400 }, objectFit: 'cover', borderRadius: 2, mb: 2 }}
          />
        )}

        <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Área:</strong> {projeto.area}
          </Typography>
        </Stack>

        <Divider />

        {/* Diálogo para acesso restrito */}
        <DownloadDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          externalLink={projeto.link}
        />
      </MotionBox>
    </Box>
  )
}

export default HeroSection
