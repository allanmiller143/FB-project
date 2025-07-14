import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useTranslation } from 'react-i18next';

const SubmissionCallsBanner = () => {
  const calls = [
  {
    id: 1,
    name: "THE EUROPEAN CONFERENCE OF ARTIFICIAL INTELLIGENCE (ECAI) 2025",
    qualis: "A2",
    url: "https://ecai2025.org/"
  },
  {
    id: 2,
    name: "HUMAN LANGUAGE TECHNOLOGY CONFERENCE",
    qualis: "A2",
    url: "https://bracis.sbc.org.br/2024/15th-symposium-in-information-and-human-language-technology/"
  },
  {
    id: 3,
    name: "IEEE SYMPOSIUM OF FOUNDATIONS IN COMPUTER SCIENCE",
    qualis: "A2",
    url: "https://ieee-focs.org/"
  },
  {
    id: 4,
    name: "IEEE SYMPOSIUM OF SECURITY AND PRIVACY",
    qualis: "A2",
    url: "https://www.ieee-security.org/TC/SP-Index.html"
  },
  {
    id: 5,
    name: "INTERNATIONAL CONFERENCES OF ONTOLOGIES DATABASES AND APPLICATIONS OF SEMANTICS",
    qualis: "B2",
    url: "https://bdva.eu/events/odbase-2018-the-17th-international-conference-on-ontologies-databases-and-applications-of-semantics/"
  }
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
          <Typography variant="body2" fontWeight={400} fontSize={'0.7rem'} sx={{}}>
            <a href={call.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              {call.name}
            </a>
          </Typography>
        </Box>
      ))}


    </Box>
  );
};

export default SubmissionCallsBanner;
