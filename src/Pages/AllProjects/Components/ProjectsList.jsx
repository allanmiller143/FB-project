// src/components/Projects.jsx
import React, { useRef } from 'react'
import { Box, Typography, Card, CardContent, Chip, Avatar, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const MotionCard = motion(Card)

const Projects = ({projetosData}) => {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' }) // dispara só uma vez
  const { i18n,t } = useTranslation('publications');

  return (
    <Box
      ref={containerRef}
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        py: 4,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{ mb: 4, textAlign: 'left', borderBottom: '4px solid #0D3B66', pb: 1, color: 'primary.main' }}
      >
        {t('publications_list.title')}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {projetosData.map((projeto, index) => (
          <MotionCard
            key={projeto.id}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            sx={{
              borderRadius: 2,
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
              backgroundColor: '#fefefe',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              px: 2,
              pt: 2,
              pb: 0,
            }}
          >
            {/* Imagem opcional */}
            {projeto.image && (
              <Avatar
                variant="rounded"
                src={projeto.image}
                alt={projeto.titulo}
                sx={{
                  width: 64,
                  height: 64,
                  flexShrink: 0,
                  borderRadius: 2,
                  objectFit: 'cover',
                  display:{xs:'none',md:'block'}
                }}
              />
            )}

            <CardContent sx={{ p: 0, flex: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  mb: 0.5,
                }}
              >
                <Box>
                    <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        lineHeight: 1.3,
                        fontSize: { xs: '0.8rem', md: '1rem' },
                        mb:{xs:1, md:0}

                    }}
                    >
                    {projeto.titulo}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                        color: 'text.secondary',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
                        maxWidth: '100%',
                        }}
                    >
                        {projeto.descricao}
                    </Typography>

                </Box>

                <Box sx = {{display: {xs:'none', md:'flex'}, gap: 1, flexDirection: {xs:'column', md: 'row'}}}>
                    <Chip
                    label={projeto.area}
                    size="small"
                    sx={{
                        fontSize: { xs: '0.6rem', md: '0.6rem' },
                        backgroundColor: 'primary.main',
                        fontWeight: 500,
                        color: 'primary.contrastText',
                    }}
                    />
                </Box>
              </Box>
              {projeto.abstract && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                    mt: 2,
                    mb : {xs: 2, md: 0},
                    fontSize: { xs: '0.70rem', md: '0.85rem' },
                  }}
                >
                  {projeto.abstract}
                </Typography>
              )}

              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems:'end', mt:1 }}>
                <Typography
                  variant="caption"
                  sx={{ display: 'block', color: 'primary.main' }}
                >
                {new Date(projeto.data).toLocaleDateString(i18n.language === 'pt' ? 'pt-BR' : 'en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}                  
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: 'none', fontWeight: 600, padding: '2px 12px' }}
                  onClick={() => navigate(`/publicacoes/${projeto.id}`)}
                >
                  {t('publications_list.card_button')}
                </Button>
              </Box>
            </CardContent>
          </MotionCard>
        ))}
      </Box>
    </Box>
  )
}

export default Projects
