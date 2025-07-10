// src/components/TeamMemberCard.jsx
import React from 'react';
import { Box, Typography, Avatar, IconButton, Stack, Grid, Divider } from '@mui/material';
import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import {members} from './Data'

const TeamMemberCard = () => {
  return (
    <Box sx={{ color: 'primary.main' }}>
      <Grid container spacing={4} justifyContent="start">
        {members.map((member, i) => (
          <Grid key={i} item size={{xs:12,md:6}}>
            <Box
              sx={{
                borderRadius: 4,
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                py:2,
                gap:2
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 170,
                  height: 170,
                  border: '3px solid #0D3B66'
                }}
              />

              <Box sx ={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', height:'95%'}}>
                <Typography variant="subtitle1" fontWeight={600}>
                    {member.name}
                </Typography>
                <Typography variant="body2" color="gray">
                    {member.role}
                </Typography>
                <Divider sx={{ width: '100%', my: 1, borderColor: 'text.secondaryLight' }} />
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                    {member.description}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton href={member.socials.x} target="_blank" sx={{ color: 'text.light', backgroundColor:'primary.main' }}>
                    <FaXTwitter />
                    </IconButton>
                    <IconButton href={member.socials.instagram} target="_blank" sx={{ color: 'text.light', backgroundColor:'primary.main' }}>
                    <FaInstagram />
                    </IconButton>
                    <IconButton href={member.socials.linkedin} target="_blank" sx={{ color: 'text.light', backgroundColor:'primary.main' }}>
                    <FaLinkedin />
                    </IconButton>
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
