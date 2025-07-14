import { Box, Typography, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next';

const ContribuicoesTecnicas = ({projeto}) => {
  if(!projeto.contribuicoes){
    return
  }
  const { t } = useTranslation('publication_detail');

  return (
    <Box>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        {t('publication_detail.contribuitions')}
      </Typography>

      <Stack spacing={1} component="ul" sx={{ pl: 2, mt: 1 }}>
        {projeto.contribuicoes.map((item, index) => (
          <Typography
            key={index}
            variant="body2"
            component="li"
            sx={{ color: 'text.secondary' }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  )
}

export default ContribuicoesTecnicas
