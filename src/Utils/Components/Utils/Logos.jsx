// src/components/ProgramLogos.jsx
import React from 'react'
import { Box, Grid, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

import CIRG from '../../../assets/Logos/CIRG.svg'
import UPE from '../../../assets/Logos/upe-logo.png'
import PPGEC from '../../../assets/Logos/logo-v3.png'
import POLI from '../../../assets/Logos/Poliupe.avif'


const logos = [
  {
    name: 'CIRG',
    src: CIRG,
    alt: 'Grupo CIRG',
    link: '/'
  },
  {
    name: 'PPGEC',
    src: PPGEC,
    alt: 'PPGEC',
    link: 'https://w2.solucaoatrio.net.br/somos/upe-ppgec/index.php/pt/'
  },
  {
    name: 'UPE',
    src: UPE,
    alt: 'Universidade de Pernambuco',
    link: 'https://www.upe.br/'
  },
  {
    name: 'Poli',
    src: POLI,
    alt: 'Escola politêcnica de Pernambuco',
    link: 'https://poli.br/'
  },
]

const MotionBox = motion(Box)

const ProgramLogos = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        py: {xs:2, md:10},
        background: {md:'linear-gradient(135deg, #062144, #0D3B66,rgb(75, 109, 141))'},
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
      sx={{
        width: '100%',
        mx: 'auto',
        maxWidth:'lg',
        px: 1,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Grid container spacing={4} justifyContent="space-between" alignItems="center" sx ={{width:"100%"}}>
        {logos.map((logo, index) => (
          <Grid item size={{xs:4, md:3}} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <MotionBox
              component="a"
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: '#fff',
                boxShadow: '0px 8px 30px rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: 80, sm: 100, md: 150 },
              }}
            >
              <Box
                component="img"
                src={logo.src}
                alt={logo.alt}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </MotionBox>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  )
}

export default ProgramLogos
