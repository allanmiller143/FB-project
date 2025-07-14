// src/pages/News/index.jsx
import React from 'react';
import { Box, Typography, Grid, Stack, Divider } from '@mui/material';
import PageContainer from '../../Utils/Components/Containers/PageContainer';
import {newsData} from '../../Pages/Home/Components/News/Data'
import HeroCard from './Components/HeroCard';
import NewsList from './Components/NewsList';
import TagsSelector from './Components/TagsSelector';
import { newsDataPT } from '../../locales/Data/News/NewsDataPT'
import { newsDataEN } from '../../locales/Data/News/NewsDataEn'
import { useTranslation } from 'react-i18next';



const News = () => {
  const { i18n } = useTranslation()
  const newsData = i18n.language === 'pt' ? newsDataPT : newsDataEN

  return (
    <PageContainer
      title="Notícias"
      description="Esta página é responsável por exibir as principais notícias sobre o time de pesquisa do professor Fernando Buarque"
    >
      <Box sx={{maxWidth:'lg', margin:'0 auto', my:{xs:0, md:7}, px:1}}>
         <HeroCard noticia={newsData[0]}/>
         <NewsList/>
         {/* <TagsSelector/> */}
      </Box>

    </PageContainer>
  );
};

export default News;
