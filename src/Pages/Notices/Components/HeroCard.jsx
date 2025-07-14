import React from 'react';
import { Box, Typography, Avatar, Stack, Chip, Grid } from '@mui/material';
import { Card } from '@mui/material';
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
const MotionCard = motion(Box)

const HeroCard = ({ noticia }) => {
  const { t } = useTranslation('news');
  
  return ( 
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Grid container spacing={4} alignItems="flex-start" sx ={{display:{xs:'none', md:'flex' }}}>
        {/* Imagem */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            src={noticia.image}
            alt={noticia.title}
            sx={{
              width: '100%',
              height: {xs:'200px', md: '350px'},
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* Conteúdo */}
        <Grid size={{ xs: 12, md: 7 }}>


          <Typography variant="h6" fontWeight={700} gutterBottom color='primary.main' sx = {{ fontSize:{ xs:'1Rem',md:'2.2Rem'}, lineHeight:"40px"}}>
            {noticia.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            {noticia.resumo}
          </Typography>

          <Typography variant='h7' color='primary.main'>
            {t('news.content')}
          </Typography>

          <Typography variant="body2"
            sx={{
            color: 'text.secondary',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: { xs: '0.75rem', md: '0.85rem' },
            maxWidth: '95%',
            }}
          >
            {noticia.content}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" mt={3}>
            <Chip
              label={noticia.category}
              size="small"
              variant="outlined"
              color="primary"
            />
            <Typography variant="caption" color="text.secondary">
              · {noticia.leituraMinutos} min read - {new Date(noticia.date).toLocaleDateString('pt-BR')}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      </MotionCard>
  );
};

export default HeroCard;
