// src/pages/Projetos/ProjetoDetalhado.jsx
import React from 'react'
import { Box, Typography, Chip, Divider, Stack, Paper, Link } from '@mui/material'
import Authors from './Authors'
import ContribuicoesTecnicas from './ContribuicoesTecnicas'
import ChipList from '../../../../Utils/Components/Utils/ChipList'
import { useTranslation } from 'react-i18next';

const ProjectInformation = ({ projeto }) => {
  const { t } = useTranslation('publication_detail');
  
  return (
    <Box  sx={{ maxWidth: 'lg', mx: 'auto', py: 2}}>
    <Box sx={{ display:'flex', justifyContent:'space-between', flexDirection:{xs:'column', md: 'row'}, alignItems:'start', width:'100%', gap:3}}>
      <Stack spacing={2} >
        <Typography variant="h6" fontWeight={600} gutterBottom>
            {t('publication_detail.info')}
        </Typography>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {t('publication_detail.authors')}
          </Typography>
          <Authors projeto= {projeto}/>          
        </Box>
        <ChipList title={'Palavras chave'} itens = {projeto.palavrasChave} />  

      </Stack>
      <ContribuicoesTecnicas projeto = {projeto}/>
    </Box>
    {projeto.publicacoes?.length > 0 && ( <>
        <Divider sx={{ my: 2 }} />
        <Box>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            {t('publication_detail.publications')}
            </Typography>
            <Stack spacing={2}>
            {projeto.publicacoes.map((pub, i) => (
                <Paper
                key={i}
                variant="outlined"
                sx={{ p: 2, borderLeft: '4px solid', borderColor: 'primary.main' }}
                >
                <Typography variant="body1" fontWeight={600}>
                    {pub.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {pub.revista}
                </Typography>
                <Link
                    href={pub.doi}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    color="primary"
                    sx={{ fontSize: '0.875rem' }}
                >
                    {pub.doi}
                </Link>
                </Paper>
            ))}
            </Stack>
        </Box>
        </>
    )}
    </Box>

  )
}

export default ProjectInformation
