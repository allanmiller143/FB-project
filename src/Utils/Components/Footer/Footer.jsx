import React from 'react'
import { Box, Typography, IconButton, Stack, Divider, Grid } from '@mui/material'
import { GitHub, LinkedIn, Email, Instagram } from '@mui/icons-material'

const Footer = () => {
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
            <Typography variant="h6" fontWeight={700} sx={{ color: 'primary.main', mb: 1 }}>
              Laboratório de Pesquisa em IA & Ciência de Dados
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', maxWidth: 500 }}>
              Pesquisa aplicada em Inteligência Artificial, Ontologias e Aprendizado de Máquina para resolver desafios reais nas áreas da saúde, meio ambiente e engenharia.
            </Typography>
          </Grid>

          {/* Ícones sociais */}
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
              <IconButton href="https://github.com/seulab" target="_blank">
                <GitHub sx={{ color: '#0D3B66' }} />
              </IconButton>
              <IconButton href="https://linkedin.com/in/seuperfil" target="_blank">
                <LinkedIn sx={{ color: '#0D3B66' }} />
              </IconButton>
              <IconButton href="mailto:contato@pesquisa.ai">
                <Email sx={{ color: '#0D3B66' }} />
              </IconButton>
              <IconButton href="https://instagram.com/seuperfil" target="_blank">
                <Instagram sx={{ color: '#0D3B66' }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#ccc' }} />

        {/* Rodapé final */}
        <Typography variant="caption" display="block" textAlign="center" sx={{ color: '#777' }}>
          © {new Date().getFullYear()} Todos os direitos reservados | UPE | Allan Miller
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
