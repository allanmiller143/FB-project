import React, { useState } from 'react';
import { Box, Typography, Chip, Stack, Button } from '@mui/material';

const groupedTags = {
  'Tecnologia': ['IA', 'Big Data', 'Blockchain', 'ChatGPT', 'Startups'],
  'Saúde': ['Saúde Mental', 'Prevenção', 'Medicina', 'Bem-estar'],
  'Educação': ['Educação', 'Aprendizado', 'IA na Educação'],
  'Estilo de Vida': ['Lifestyle', 'Healthy', 'Work-Life', 'Minimalismo'],
  'Sociedade': ['Futuro do Trabalho', 'Ética', 'Inovação Social'],
  'Academia e Pesquisa': ['Pesquisa', 'Publicações', 'Projetos', 'Ontologias'],
};

const TagsSelector = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSave = () => {
    console.log('Tags selecionadas:', selectedTags);
    // salvar ou enviar para API...
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" fontWeight={700} mb={3}>
        Selecione as tags da notícia
      </Typography>

      {Object.entries(groupedTags).map(([grupo, tags]) => (
        <Box key={grupo} mb={3}>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            {grupo}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                clickable
                onClick={() => toggleTag(tag)}
                color={selectedTags.includes(tag) ? 'primary' : 'default'}
                variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
              />
            ))}
          </Stack>
        </Box>
      ))}

      <Button
        variant="contained"
        onClick={handleSave}
        sx={{ mt: 3 }}
      >
        Salvar
      </Button>
    </Box>
  );
};

export default TagsSelector;
