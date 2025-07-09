// src/pages/Projetos/ProjetoDetalhado.jsx
import React from 'react'
import { Box, Typography, Divider, Stack, Paper, Button } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

const HeroSection = ({ projeto }) => {
  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 6}}>
      <MotionBox
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        sx={{ flex: 1 }}
       >
        <MotionTypography variant="h3" fontWeight={400} color="primary.main" gutterBottom sx ={{fontSize:{xs:'2Rem', md:'3Rem'}}}>
           {projeto.titulo}
        </MotionTypography>
        <MotionTypography variant="subtitle1" color="text.secondary" gutterBottom>
            {projeto.descricao}
        </MotionTypography>        

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
            <MotionTypography variant="body2" color="text.secondary" mb= {1}>
            <strong>Publicado em:</strong> {projeto.data}
            </MotionTypography>

            {projeto.pdf && (
            <Button
                href={projeto.pdf}
                download
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
                Baixar PDF
            </Button>
            )}
        </Box>        

        {projeto.image && (
            <Box
            component="img"
            src={projeto.image}
            alt={projeto.titulo}
            sx={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 2, mb: 2 }}
            />
        )}

        {/* Informações refinadas */}
        <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
            <Typography variant="body2" color="text.secondary">
            <strong>Área:</strong> {projeto.area}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <strong>Instituição:</strong> {projeto.instituicao}
            </Typography>
        </Stack>
        <Divider/>
        </MotionBox>
    </Box>
  )
}

export default HeroSection
