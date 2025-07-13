import React from 'react'
import {Box,Typography,Card,CardContent,Avatar,Chip,Button,} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionCard = motion(Card)

const DestaqueCard = ({ projeto }) => {
  const navigate = useNavigate()

  if (!projeto) return null

  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        width: '100%',
        maxWidth: 420,
        borderRadius: 4,
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        display: {xs:'none',md:'flex'},
        flexDirection: 'column',
        alignItems:'center',
        overflow: 'hidden',
        bgcolor: '#FAFAFA',
        border: '1px solid #E0E0E0',
      }}
    >
      {/* Imagem ampla no topo */}
  
      <CardContent sx={{ px: 3, py: 4 }}>
        <Chip
          label={projeto.area}
          size="small"
          sx={{
            mb: 1.5,
            backgroundColor: '#E3F2FD',
            color: 'primary.main',
            fontWeight: 600,
            fontSize: '0.75rem',
          }}
        />

        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
          {projeto.titulo}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {projeto.text}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          Publicado em {new Date(projeto.data).toLocaleDateString('pt-BR')}
        </Typography>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: 2,
            }}
            onClick={() => navigate(`/publicacoes/${projeto.id}`)}
          >
            Ver detalhes
          </Button>
        </Box>
      </CardContent>
    </MotionCard>
  )
}

export default DestaqueCard
