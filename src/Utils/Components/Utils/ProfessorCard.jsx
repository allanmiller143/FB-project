import React from 'react';
import { Box, Typography, Button, Stack, Grid, Paper } from '@mui/material';
import { FaGlobe, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import Fernando from '../../../assets/Members/Fernando.jpg';

const ProfessorCardHero = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: 6,
        px: 3,
        backgroundColor: '#f9fafb',
        borderTop: '1px solid #e5e7eb',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
        sx={{ mx: 'auto' }}
      >
        {/* IMAGEM */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              width: '100%',
              maxWidth: 300,
              boxShadow: 3,
              mx: 'auto'
            }}
          >
            <img
              src={Fernando}
              alt="Prof. Fernando Buarque"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        </Grid>

        {/* CONTEÚDO */}
        <Grid item xs={12} md={8}>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            SOBRE O PESQUISADOR
          </Typography>

          <Typography variant="h5" fontWeight={600} gutterBottom>
            Prof. Fernando Buarque
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: '#4b5563', maxWidth: 700 }}
            paragraph
          >
            Livre-docente, PhD pela University of London, é Professor Associado Sênior da UPE e referência em Inteligência Artificial Híbrida, Simulação de Problemas Complexos e Decisão Explicável. Líder do CIRG e pesquisador internacional com forte atuação ética e científica.
          </Typography>

          {/* ESTATÍSTICAS */}
          <Stack direction="row" spacing={3} mt={2} mb={3}>
            {[
              { label: 'Anos de Experiência', value: '+30' },
              { label: 'Publicações', value: '+90' },
              { label: 'Projetos Internacionais', value: '+15' },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  px: 2.5,
                  py: 1.5,
                  border: '1px solid #d1d5db',
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {item.value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* AÇÕES */}
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
            <Button
              variant="outlined"
              href="mailto:fernando.buarque@upe.br"
              sx={{ borderRadius: 3, px: 4, fontWeight: 500 }}
            >
              Contato por e-mail
            </Button>

            <Stack direction="row" spacing={2}>
              <a href="https://fernandobuarque.com" target="_blank" rel="noreferrer">
                <FaGlobe size={18} color="#374151" />
              </a>
              <a href="https://linkedin.com/in/fernandobuarque" target="_blank" rel="noreferrer">
                <FaLinkedin size={18} color="#374151" />
              </a>
              <a href="https://twitter.com/fernandobuarque" target="_blank" rel="noreferrer">
                <FaXTwitter size={18} color="#374151" />
              </a>
              <a href="https://instagram.com/fernandobuarque" target="_blank" rel="noreferrer">
                <FaInstagram size={18} color="#374151" />
              </a>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessorCardHero;
