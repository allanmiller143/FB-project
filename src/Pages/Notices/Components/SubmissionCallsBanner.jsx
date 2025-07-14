import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useTranslation } from 'react-i18next';

const SubmissionCallsBanner = () => {
  const calls = [
    {
      title: 'Revista Brasileira de Inteligência Artificial',
      deadline: 'Submissões até 30/08/2025',
    },
    {
      title: 'Congresso SBMAC 2025',
      deadline: 'Envio de trabalhos até 12/09/2025',
    },
    {
      title: 'IEEE Latin America Transactions – Edição Especial',
      deadline: 'Deadline: 15/10/2025',
    },
  ];
  const { t } = useTranslation('news');
  

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: '#F9FAFB',
        border: '1px solid #E0E0E0',
        boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
        <CampaignIcon fontSize="small" color="primary" />
        <Typography variant="subtitle1" fontWeight={700} color="primary">
          {t('news_alert.title')}
        </Typography>
      </Stack>

      {calls.map((call, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="body2" fontWeight={600}>
            {call.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {call.deadline}
          </Typography>
        </Box>
      ))}

    </Box>
  );
};

export default SubmissionCallsBanner;
