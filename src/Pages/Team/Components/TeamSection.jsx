// src/components/TeamMemberCard.jsx
import React from 'react';
import { Box, Typography, Avatar, IconButton, Stack, Grid, Divider, Tooltip } from '@mui/material';
import { TeamDataPt} from '../../../locales/Data/Team/TeamDataPt'
import { TeamDataEn } from '../../../locales/Data/Team/TeamDataEn'
import { useTranslation } from 'react-i18next';
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub, FaUserGraduate, FaGlobe,  } from 'react-icons/fa6' // Lattes → FaUserGraduate como sugestão

const TeamMemberCard = () => {

const { i18n } = useTranslation()
const { t } = useTranslation('team');

const members = i18n.language === 'pt' ? TeamDataPt : TeamDataEn
    

const getRolePriority = (role = '') => {
  const r = role.toLowerCase();
  if (/doutor/.test(r) || /phd/.test(r)) return 1;
  if (/doutorand[ao]/.test(r) || /phd student/.test(r)) return 2;
  if (/mestrand[ao]/.test(r) || /master's student/.test(r)) return 3;

  return 4;
};


const sortedMembers = [...members].sort((a, b) => {
  return getRolePriority(a.role) - getRolePriority(b.role);
});

  return (
    <Box sx={{ color: 'primary.main', mt:10 }}>
      <Grid container spacing={4} justifyContent="start">
        {sortedMembers.map((member, i) => (
          <Grid key={i} item size={{xs:12,md:6}}>
            <Box
              sx={{
                borderRadius: 4,
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: {xs:'row',md:'row'},
                alignItems:  {xs:'start',md: 'start'},
                py:2,
                gap:2
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: {xs:100,md:170},
                  height: {xs:100,md:170},
                  border: '3px solid #0D3B66'
                }}
              />

              <Box sx ={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'start', height:'105%'}}>
                <Box sx={{display:'flex', alignItems:'center', gap:2, justifyContent:'space-between', width:'100%'}}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {member.name}
                  </Typography>
                  {member.foreigner && (
                  <Tooltip title={t('team_hero.stranger')}>
                    <Box sx={{ display: 'flex' }}>
                      <FaGlobe />
                    </Box>
                  </Tooltip>
                  )}
                </Box>
                <Typography variant="body2" color="gray">
                    {member.role}
                </Typography>
                <Divider sx={{ width: '100%', my: 1, borderColor: 'text.secondaryLight' }} />
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                    {member.description}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" mt={{ xs: 1, md: 2 }}>
                  {member.socials?.x && (
                    <IconButton
                      href={member.socials.x}
                      target="_blank"
                      sx={{
                        color: 'text.light',
                        backgroundColor: 'primary.main',
                        width: { xs: 30, md: 30 },
                        height: { xs: 30, md: 30 },
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                      }}
                    >
                      <FaXTwitter />
                    </IconButton>
                  )}

                  {member.socials?.instagram && (
                    <IconButton
                      href={member.socials.instagram}
                      target="_blank"
                      sx={{
                        color: 'text.light',
                        backgroundColor: 'primary.main',
                        width: { xs: 30, md: 30 },
                        height: { xs: 30, md: 30 },
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                      }}
                    >
                      <FaInstagram />
                    </IconButton>
                  )}

                  {member.socials?.linkedin && (
                    <IconButton
                      href={member.socials.linkedin}
                      target="_blank"
                      sx={{
                        color: 'text.light',
                        backgroundColor: 'primary.main',
                        width: { xs: 30, md: 30 },
                        height: { xs: 30, md: 30 },
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                      }}
                    >
                      <FaLinkedin />
                    </IconButton>
                  )}

                  {member.socials?.git && (
                    <IconButton
                      href={member.socials.git}
                      target="_blank"
                      sx={{
                        color: 'text.light',
                        backgroundColor: 'primary.main',
                        width: { xs: 30, md: 30 },
                        height: { xs: 30, md: 30 },
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                      }}
                    >
                      <FaGithub />
                    </IconButton>
                  )}

                  {member.socials?.lattes && (
                    <IconButton
                      href={member.socials.lattes}
                      target="_blank"
                      sx={{
                        color: 'text.light',
                        backgroundColor: 'primary.main',
                        width: { xs: 30, md: 30 },
                        height: { xs: 30, md: 30 },
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                      }}
                    >
                      <FaUserGraduate />
                    </IconButton>
                  )}

                  {member.socials?.site && (
                    <IconButton
                      href={member.socials.site}
                      target="_blank"
                      sx={{
                        color: 'text.light',
                        backgroundColor: 'primary.main',
                        width: { xs: 30, md: 30 },
                        height: { xs: 30, md: 30 },
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                      }}
                    >
                      <FaGlobe />
                    </IconButton>
                  )}
                </Stack>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamMemberCard;
