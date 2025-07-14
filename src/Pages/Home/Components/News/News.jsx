// src/components/News.jsx
import React from 'react'
import {Box,Typography,Card,CardMedia,CardContent,Chip,Button,} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import { newsDataPT } from '../../../../locales/Data/News/NewsDataPT'
import { newsDataEN } from '../../../../locales/Data/News/NewsDataEn'

import { useTranslation } from 'react-i18next';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
}

const News = () => {

  const { t } = useTranslation('home');
  const { i18n } = useTranslation()
  const newsData = i18n.language === 'pt' ? newsDataPT : newsDataEN
  const navigate = useNavigate()

  return (
    <Box sx={{ px: { xs: 1 }, py: 6, maxWidth: 'lg', mx: 'auto' }}>
      <Typography
        variant="h5"
        fontWeight={600}
        color='primary.main'
        sx={{
          mb: 2,
          borderBottom: '4px solid #0D3B66',
          pb: 1,
        }}
      >
        {t('home_news.title')}
      </Typography>

      <Slider {...sliderSettings}>
        {newsData.map((item) => (
          <Box
            key={item.id}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/noticia/${item.id}`)}
            sx={{ px: 1, cursor: 'pointer' }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 320,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      mb: 1,
                      backgroundColor: '#e0e0e0',
                      fontWeight: 500,
                      fontSize: '0.7rem',
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{
                      mb: 1,
                      lineHeight: 1.3,
                      fontSize: '0.95rem',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    mt: 'auto',
                  }}
                >
                  {new Date(item.date).toLocaleDateString(i18n.language === 'pt' ? 'pt-BR' : 'en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', mt: 2 }}>
        <Button
          variant="outlined"
          sx={{ textTransform: 'none', fontWeight: 600, display: 'flex', alignSelf: 'end', padding: '6px 12px' }}
          onClick={() => window.location.href = '/noticias'}
        >
          {t('home_news.button')}
        </Button>
       </Box>
    </Box>
  )
}

export default News
