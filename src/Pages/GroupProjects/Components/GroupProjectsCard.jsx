import React from 'react';
import {Box,Typography,Stack,Link as MuiLink,Divider,useTheme,Paper,Chip,} from '@mui/material';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const GroupProjectsCard = ({ projeto }) => {
  const theme = useTheme();
  const { t } = useTranslation('projects');

  return (
    <Paper
      elevation={0}
      sx={{
        borderLeft: `5px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.background.paper,
        p: 4,
        mb: 4,
        borderRadius: 2,
        boxShadow: theme.shadows[1],
        transition: '0.3s',
        '&:hover': {
          boxShadow: theme.shadows[4],
          transform: 'translateY(-2px)',
        },
      }}
    >
      {/* Título e Período */}
      <Box>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {projeto.titulo}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {projeto.periodo} · {projeto.situacao} · {projeto.natureza}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Descrição resumida */}
      <Typography variant="body2" sx={{ mb: 1 }}>
        {projeto.descricao}
      </Typography>

      {/* Detalhes adicionais */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {projeto.detalhes}
      </Typography>

      {/* Alunos */}
      {projeto.alunos && (
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
          {projeto.alunos.graduacao && (
            <Chip label={`${t('projects.graduação')} : ${projeto.alunos.graduacao}`} size="small" />
          )}
          {projeto.alunos.especializacao && (
            <Chip label={`${t('projects.especialização')} : ${projeto.alunos.especializacao}`} size="small" />
          )}
          {projeto.alunos.mestrado && (
            <Chip label={`${t('projects.mestrado')} : ${projeto.alunos.mestrado}`} size="small" />
          )}
          {projeto.alunos.doutorado && (
            <Chip label={`${t('projects.doutorado')} : ${projeto.alunos.doutorado}`} size="small" />
          )}
        </Stack>
      )}

      {/* Integrantes */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" fontWeight={600}>
          {t('projects.members')}:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projeto.integrantes.join('; ')}
        </Typography>
      </Box>

      {/* Link externo */}
      {projeto.link && (
        <Box>
          <MuiLink
            href={projeto.link}
            target="_blank"
            rel="noopener"
            underline="hover"
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}
          >
            <FaExternalLinkAlt size={12} />
            {t('projects.button')}:
          </MuiLink>
        </Box>
      )}
    </Paper>
  );
};

export default GroupProjectsCard;
