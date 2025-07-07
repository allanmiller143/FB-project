import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Img from '../../../../assets/download.png'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(to right, #f4f6f8, #ffffff)',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 8, md: 6 },
          }}
        >
          {/* Texto */}
          <MotionBox
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            sx={{ flex: 1 }}
          >
            <MotionTypography
              variant="h1"
              sx={{
                fontWeight: 500,
                fontSize: { xs: '2.2rem', md: '3.4rem' },
                color: 'primary.main',
                mb: 3,
              }}
            >
              Grupo de Pesquisa
              <span style={{ color: 'primary.main' }}> Prof. Fernando Buarque</span>

            </MotionTypography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                fontFamily: `'IBM Plex Sans', sans-serif`,
                maxWidth: 600,
                mb: 4,
              }}
            >
              Pesquisa aplicada com foco em Inteligência Artificial, Sistemas Complexos e soluções com impacto real. Ciência com propósito, colaboração e visão de futuro.
            </Typography>

            <Button
              variant="outlined"
              sx={{textTransform: 'none', fontWeight: 600, borderRadius: 2, px: 4}}
              size="large"
              color="primary"
              onClick={() => navigate('/projetos')}
            >
              Conheça nossos projetos
            </Button>

            <Typography
              variant="caption"
              sx={{
                mt: 2,
                display: 'block',
                color: 'text.secondary',
                fontFamily: `'IBM Plex Sans', sans-serif`,
              }}
            >
              Centro de Inovação em Inteligência Artificial – Universidade de Pernambuco
            </Typography>
          </MotionBox>

          {/* Imagem */}
          <MotionBox
            component="img"
            src={Img}
            alt="Ilustração de pesquisa"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            sx={{
              width: { xs: '100%', md: '420px' },
              maxHeight: 400,
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
