// src/components/TeamDiamondGrid.jsx
import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { TeamDataPt} from '../../../locales/Data/Team/TeamDataPt'
import { TeamDataEn } from '../../../locales/Data/Team/TeamDataEn'
import { useTranslation } from 'react-i18next';


const diamondSize = 100;

const TeamDiamondGrid = () => {
  const { i18n } = useTranslation()
  const members = i18n.language === 'pt' ? TeamDataPt : TeamDataEn
    
  if (!members || members.length === 0) return null;

  // Divide em linhas com no máximo 4 por linha
  const rows = [];
  const itemsPerRow = 4;
  for (let i = 0; i < members.length; i += itemsPerRow) {
    rows.push(members.slice(i, i + itemsPerRow));
  }

  return (
    <Box sx={{ textAlign: 'center', py: 5, display:{xs:'none', md:'block'} }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: `${-diamondSize / 2}px` }}>
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: `${diamondSize / 2.3}px`,
              transform: rowIndex % 2 !== 0 ? `translateX(${diamondSize / 1.4}px)` : 'none',
            }}
          >
            {row.map((member, index) => (
              <Tooltip title={`${member.name} – ${member.role}`} key={index}>
                <Box
                  sx={{
                    width: diamondSize,
                    height: diamondSize,
                    transform: 'rotate(45deg)',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'rotate(45deg) scale(1.05)',
                    },
                  }}
                >
                <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    transform: 'rotate(-45deg)',
                }}
                >
                <img
                    src={member.image}
                    alt={member.name}
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.4)', // aqui faz o zoom!
                    transformOrigin: 'center',
                    }}
                />
                </Box>


                </Box>
              </Tooltip>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TeamDiamondGrid;
