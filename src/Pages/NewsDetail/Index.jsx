import React from 'react'
import {
  Box, Typography, Chip, Avatar, Divider, Button, IconButton, Stack
} from '@mui/material'
import { useParams } from 'react-router-dom'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import { newsData } from '../Home/Components/News/Data'
import PageContainer from '../../Utils/Components/Containers/PageContainer'
import Content from './Components/Content'
import NewsImageGrid from './Components/NewsImageGrid.jsx'
import News from '../Home/Components/News/News.jsx'

const NewsDetail = () => {
  const { id } = useParams()
  const article = newsData.find(n => n.id === id)

  if (!article) return <Typography>Notícia não encontrada</Typography>

  const handleShare = () => {
    navigator.share?.({
      title: article.title,
      text: article.resumo,
      url: window.location.href,
    })
  }

  return (
    <PageContainer title={article.title} description={article.resumo}>
      <Box sx={{ px: 1, pt: 8, maxWidth: 'lg', mx: 'auto' }}>
        
        <Typography variant="h3" fontWeight={400} color="primary.main" gutterBottom sx ={{fontSize:{xs:'1.5Rem', md:'3Rem'}
      }}>
           {article.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {article.resumo}
        </Typography> 

        <Typography variant="subtitle2" color="text.secondary" mb={1}>
          {article.category}
        </Typography>

        <Box
          component="img"
          src={article.image}
          alt={article.title}
          sx={{ width: '100%', height: {xs:'260px', md:'550px'}, mb: 1, borderRadius:3, objectFit:'cover' }}
        />

        {/* Ícones e Meta */}
        <Box sx={{ display: 'flex', alignItems: {xs:'center',md:'center'}, justifyContent: {xs:'space-between',md:'start'},gap: 2, mb: 2 }}>
          <Box sx= {{display:{ xs :'flex'}, gap:1}}>
            <Typography variant="caption" color="text.secondary">
              {new Date(article.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{display:{xs:'none', md:'block'}}}>• {article.leituraMinutos} min leitura</Typography>
          </Box>

          <Box sx= {{display:{ xs :'flex'}, gap:1}}>
            <VisibilityIcon sx={{ fontSize: 16, ml: 1, color: 'text.secondary' }} />
            <Typography variant="caption">2.5m</Typography>
            <ThumbUpAltOutlinedIcon sx={{ fontSize: 16, ml: 1, color: 'text.secondary' }} />
            <Typography variant="caption">15k</Typography>
            <BookmarkBorderIcon sx={{ fontSize: 16, ml: 1, color: 'text.secondary' }} />
            <Typography variant="caption">39k</Typography>
          </Box>
        </Box>

        {/* Tags */}
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {article.tags.map((tag, i) => (
            <Chip key={i} label={tag} variant="outlined" size="medium" color='primary.main' />
          ))}
        </Stack>  

        <Content noticia={article}/>
        <NewsImageGrid images = {article.images}/>     

        
        {/* <Box sx={{ mb: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Por {article.autores.map((autor, idx) => (
              <span key={idx}>
                <a href={autor.lattes} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0D3B66' }}>
                  {autor.nome}
                </a>{idx < article.autores.length - 1 && ', '}
              </span>
            ))}
          </Typography>
        </Box> */}
        <News label = {'Veja também'}/>   

      </Box>
    </PageContainer>
  )
}

export default NewsDetail
