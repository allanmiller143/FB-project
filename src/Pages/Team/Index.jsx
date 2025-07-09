import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import PageContainer from '../../Utils/Components/Containers/PageContainer'

const Team = () => {
  return (
    <PageContainer title="Time" description="Esta página é responsável por exibir o time de pesquisa do professor Fernando Buarque">
      <Box sx = {{maxWidth:'lg', margin:'0 auto', px:1, height:'50vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Typography>
          Página ainda em desenvolvimento  
        </Typography>
      </Box>      
    </PageContainer>
  )
}

export default Team
