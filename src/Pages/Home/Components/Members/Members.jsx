import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Slider from 'react-slick'
import { membrosDestaque } from './Data'
import { motion } from 'framer-motion'

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
    }
  ]
}

const Members = () => {
  return (       

    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      sx={{
        width: '100%',
        maxWidth: 1280,
        mx: 'auto',
        py: 8,
        pb: 10,
        px: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 6,
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontFamily: "'Inter', 'Poppins', 'DM Sans', sans-serif",
      }}
    >
      {/* Slider de membros */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Slider {...sliderSettings}>
          {membrosDestaque.map((membro, i) => (
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
                src={membro.foto}
                alt={membro.nome}
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
                {membro.nome}
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                {membro.funcao}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Texto de apresentação */}
      <Box
        sx={{
          maxWidth: 400,
          textAlign: { xs: 'center', md: 'left' },
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
            mb: 2,
          }}
        >
          Conheça nossa equipe
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
          }}
        >
          Pesquisadores unidos, ideias ilimitadas
        </Typography>
        <Typography
          sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 3 }}
        >
          Nosso time de pesquisa é formado por professores, alunos de graduação,
          mestrado e doutorado. Atuamos em diversas áreas com foco em ciência e
          inovação com propósito.
        </Typography>
        <Button
          variant="outlined"
          sx={{ textTransform: 'none', fontWeight: 600 }}
          onClick={() => window.location.href = '/sobre'}
        >
          Saiba mais sobre nossa equipe
        </Button>
      </Box>
    </Box>
  )
}

export default Members
