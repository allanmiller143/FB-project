import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Img from '../../../assets/Projects/HeroSectionImg.svg'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        pt: { xs: 4, md: 5 },
        pb: { xs: 4, md: 10 },
      }}
    >
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
              Projetos com participação de membros do CIRG
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
CIRG – Computational Intelligence Research Group, vinculado à Universidade de Pernambuco e ativo há mais de 20 anos na formação de pesquisadores e desenvolvimento de soluções baseadas em IA.            </Typography>


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
    </Box>
  )
}

export default HeroSection
