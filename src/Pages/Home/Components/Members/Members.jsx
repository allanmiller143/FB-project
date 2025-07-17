import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Slider from 'react-slick'
import {members} from '../../../../Pages/Team/Components/Data'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const Members = () => {
  const { t } = useTranslation('home');
  
  return (       

    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      sx={{
        width: '100%',
        maxWidth: 'lg',
        marginX: 'auto',
        mt: 4,
        py: { xs: 4, md: 6 },
        pb: 10,
        px: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        gap: 6,
        alignItems: { md: 'center' },
        justifyContent: 'center',
        fontFamily: "'Inter', 'Poppins', 'DM Sans', sans-serif",
      }}
    >
      {/* Slider de membros */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Slider {...sliderSettings}>
          {members.map((membro, i) => (
            <Box
              key={i}
              sx={{
                textAlign: 'center',
                outline: 'none',
                cursor: 'grab',
                '&:focus': { outline: 'none' },
              }}
            >
              <Box
                component="img"
                src={membro.image}
                alt={membro.name}
                sx={{
                  width: 220,
                  height: 220,
                  borderRadius: 2,
                  objectFit: 'cover',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  mx: 'auto',
                }}
              />
              <Typography sx={{ mt: 1, fontWeight: 600, fontSize: '0.95rem' }}>
                {membro.name}
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                {membro.role}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Texto de apresentação */}
      <Box
        sx={{
          maxWidth: { xs: 'lg', md: 400 },
          textAlign: { md: 'left' },
          flexShrink: 0,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            textTransform: 'uppercase',
            fontWeight: 500,
            fontSize: '0.75rem',
            letterSpacing: 1,
            color: 'text.secondary',
            textAlign:{xs:'center',md:'left'},
            mb: 2,
          }}
        >
          {t('home_team.title')}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '1.5rem', md: '2rem' },
            color: 'primary.main',
            fontWeight: 400,
            lineHeight: 1.1,
            textAlign:{xs:'center',md:'left'},
          }}
        >
          {t('home_team.subtitle')}
        </Typography>
        <Typography
          sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 3, textAlign:{xs:'center',md:'left'}}}>
          {t('home_team.text')}
        </Typography>
        <Button
          variant="outlined"
          sx={{ textTransform: 'none', fontWeight: 600, display:'flex',margin: {xs: '0 auto',md:'0'}, alignSelf:'center', }}
          onClick={() => window.location.href = '/time'}
        >
          {t('home_team.button')}
        </Button>
      </Box>
    </Box>
  )
}

export default Members
