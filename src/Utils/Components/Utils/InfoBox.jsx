import React, { useState } from 'react';
import {Box,Typography,IconButton,Collapse,useTheme} from '@mui/material';
import { FaTimes } from 'react-icons/fa';

const InfoBox = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Collapse in={visible}>
      <Box sx={{width: '100%',backgroundColor: 'primary.main',color: 'primary.contrastText',padding: 4,boxShadow: 2,}}>
        <Box sx={{display:'flex', width:'100%', maxWidth:'lg', margin:'0 auto', justifyContent:'space-between', alignItems:'center', px:1}}>
        <Typography variant="body1">
          Todas as informações desta página são meramente ilustrativas.
        </Typography>
        <IconButton
          onClick={() => setVisible(false)}
          sx={{ color: 'primary.contrastText' }}
        >
          <FaTimes />
        </IconButton>
        </Box>
      </Box>
    </Collapse>
  );
};

export default InfoBox;
