import React from 'react'
import { Box, Typography, IconButton, Stack, Divider, Grid } from '@mui/material'
import { GitHub, LinkedIn, Email, Instagram } from '@mui/icons-material'
import CIRG from '../../../assets/Logos/CIRG.svg'
import UPE from '../../../assets/Logos/upe-logo.png'
import PPGEC from '../../../assets/Logos/logo-v3.png'
import POLI from '../../../assets/Logos/Poliupe.avif'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box)

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


const Footer = () => {

  const { t } = useTranslation('footer');
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        pt: 8,
        pb: 6,
        backgroundColor: '#eef2f6',
        color: '#333',
      }}
    >
      <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 2 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Bloco de Texto */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={700} sx={{ color: 'primary.main', mb: 1,textAlign:{xs:'center',md:'left'}, }}>
              {t('footer.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', maxWidth: 500,textAlign:{xs:'center',md:'left'}, }}>
              {t('footer.subtitle')}            
            </Typography>
          </Grid>
          {/* Ícones sociais */}
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
              <IconButton href="https://github.com/" target="_blank">
                <GitHub sx={{ color: '#0D3B66' }} />
              </IconButton>
              <IconButton href="https://linkedin.com/in/" target="_blank">
                <LinkedIn sx={{ color: '#0D3B66' }} />
              </IconButton>
              <IconButton href="mailto:contato@pesquisa.ai">
                <Email sx={{ color: '#0D3B66' }} />
              </IconButton>
              <IconButton href="https://instagram.com/" target="_blank">
                <Instagram sx={{ color: '#0D3B66' }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#ccc' }} />

        <Grid container spacing={4} justifyContent="space-between" alignItems="center" sx ={{width:"100%", maxWidth:'sm'}}>
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
                        height: { xs: 80, sm: 100, md: 150 },
                      }}
                    >
                      <Box
                        component="img"
                        src={logo.src}
                        alt={logo.alt}
                        sx={{
                          maxHeight: '50px',
                          maxWidth: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>
        {/* Rodapé final */}
        <Typography variant="caption" display="block" textAlign="center" sx={{ color: '#777' }}>
          {t('footer.rights')}    
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
