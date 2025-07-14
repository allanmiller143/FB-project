// src/components/NewsList.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent,Chip, Button, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { newsData } from '../../Home/Components/News/Data';
import SubmissionCallsBanner from './SubmissionCallsBanner';
import { useTranslation } from 'react-i18next';
import { newsDataPT } from '../../../locales/Data/News/NewsDataPT'
import { newsDataEN } from '../../../locales/Data/News/NewsDataEn'

const NewsList = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { i18n } = useTranslation()
  const newsData = i18n.language === 'pt' ? newsDataPT : newsDataEN
  
  const { t } = useTranslation('news');

  // Extrair todas as tags únicas
  const tagSet = new Set();
  newsData.forEach(item => item.tags.forEach(tag => tagSet.add(tag)));
  const allTags = ['Todos', ...Array.from(tagSet)];

  // Filtrar notícias pela tag selecionada
  const filteredNews = selectedTag === 'Todos'
    ? newsData
    : newsData.filter(item => item.tags.includes(selectedTag));

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Resetar para página 1 ao trocar a tag
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  return (
    <Box sx={{ px: 1, py: 6, maxWidth: 'lg', mx: 'auto' }}>
      <Grid container spacing={3}>
        {/* Lista de Notícias */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            color="primary.main"
            sx={{
              mb: 2,
              borderBottom: '4px solid #0D3B66',
              pb: 1,
            }}
          >
            {t('news.title')}
          </Typography>

          {/* Filtros de tags */}
          <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {allTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                clickable
                variant={selectedTag === tag ? 'filled' : 'outlined'}
                color="primary"
                onClick={() => setSelectedTag(tag)}
              />
            ))}
          </Box>

          {/* Grid de Cards */}
          <Grid container spacing={3}>
            {paginatedNews.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                <Card
                  onClick={() => navigate(`/noticia/${item.id}`)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 320,
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    transition: '0.3s',
                    '&:hover': { transform: 'scale(1.02)' },
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
              </Grid>
            ))}
          </Grid>

          {/* Paginação */}
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
              <Button
                variant="outlined"
                size="small"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Anterior
              </Button>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Página {currentPage} de {totalPages}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Próxima
              </Button>
            </Box>
          )}
        </Grid>

        {/* Lateral direita */}
        <Grid size={{ xs: 12, md: 3 }}>
          <SubmissionCallsBanner />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsList;
