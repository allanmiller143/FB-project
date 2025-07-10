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
        py: { xs: 4, md: 10 },
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
            gap: { xs: 2, md: 6 },
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
                fontSize: { xs: '2rem', md: '3.4rem' },
                color: 'primary.main',
                mb: 3,
                textAlign:{xs:'center',md:'left'},
              }}
            >
              Grupo de Pesquisa
              <span style={{ color: 'primary.main' }}> Prof. Fernando Buarque</span>

            </MotionTypography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.8rem', md: '1.15rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                fontFamily: `'IBM Plex Sans', sans-serif`,
                maxWidth: 600,
                mb: {xs: 2, md: 4},
                textAlign:{xs:'center',md:'left'},
              }}
            >
              Pesquisa aplicada com foco em Inteligência Artificial, Sistemas Complexos e soluções com impacto real. Ciência com propósito, colaboração e visão de futuro.
            </Typography>

            <Button
              variant="outlined"
              sx={{textTransform: 'none', fontWeight: 600, borderRadius: 2, px: 2,display:'flex', margin: {xs: '0 auto',md:'0'}}}
              size="small"
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
                fontSize: { xs: '0.75rem', md: '0.85rem' },
                textAlign:{xs:'center',md:'left'},
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
              width: { xs: '200px', md: '420px' },
              maxHeight: { xs: '200px', md: '420px' },
              objectFit: 'contain',
              flexShrink: 0,
              display: { md: 'block' }
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
