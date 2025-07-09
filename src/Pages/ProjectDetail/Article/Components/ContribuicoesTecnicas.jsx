import { Box, Typography, Stack } from '@mui/material'

const ContribuicoesTecnicas = ({projeto}) => {
  if(!projeto.contribuicoes){
    return
  }

  return (
    <Box>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Contribuições Técnicas
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
