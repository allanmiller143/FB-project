import Fernando from '../../../assets/Members/Fernando.jpg'

const FernandoData = {
  nome: 'Fernando Buarque de Lima Neto',
  lattes: 'http://lattes.cnpq.br/5175924818753829',
  img: Fernando,
  função: 'Doctor'
}

export const publicationsDataEN = [
  {
    id: 'p1',
    titulo: 'UAV control in autonomous object-goal navigation: a systematic literature review',
    descricao: 'Evaluates the use of LLMs to map medical concepts and build RDF knowledge graphs with high accuracy.',
    area: 'Artificial Intelligence',
    data: '2024-05-24',
    autores_info: [
      { nome: 'Angel Ayala', lattes: 'http://lattes.cnpq.br/7881645237344440', img: '', função: '' },
      { nome: 'Leticia Portela', lattes: '', img: '', função: '' },
      FernandoData,
      { nome: 'Bruno J. T. Fernandes', lattes: '', img: '', função: '' },
      { nome: 'Francisco Cruz', lattes: '', img: '', função: '' },
    ],
    link: 'https://doi.org/10.1007/s10462-024-10758-7',
    palavrasChave: ['Autonomous systems', 'UAV control', 'semântica médica', '· Object-goal navigation', 'Systematic'],
    publicacoes: [
      {
        titulo: 'UAV control in autonomous object-goal navigation: a systematic literature review',
        revista: 'Artificial Intelligence Review',
        doi: 'https://doi.org/10.1007/s10462-024-10758-7'
      }
    ],
    abstract: `Research interest in autonomous control of unmanned aerial vehicles (UAVs) has increased rapidly over the past decade. They are now widely used in civilian, military, and private areas...`,
    contribuicoes: [
      'Proposes the use of LLMs for semantic mapping in medical ontologies',
      'Compares ChatGPT, GPT-3 and BioGPT in the task of entity mapping',
      'Applies a new clinical dataset focused on medical concepts',
      'Uses Linked Open Data (LOD) and RDF concepts for knowledge graphs',
      'Evaluates the models with metrics such as accuracy and semantic coverage',
      'Shows that LLMs outperform embedding-based approaches in mapping tasks',
      'Suggests that LLMs are promising for automating RDF graph construction in the medical field'
    ]
  },
  {
    id: 'p2',
    titulo: 'Anomaly Detection in Smart houses for Healthcare',
    descricao: 'Recent Advances, and Future Perspectives',
    area: 'Health',
    data: '2024-01-03',
    image: '',
    autores_info: [
      { nome: 'Yves M. Galvão', lattes: '', img: '', função: '' },
      { nome: 'Letícia Castro', lattes: '', img: '', função: '' },
      { nome: 'Janderson Ferreira', lattes: '', img: '', função: '' },
      FernandoData,
      { nome: 'Roberta Andrade de Araújo Fagundes', lattes: '', img: '', função: '' },
      { nome: 'Bruno J. T. Fernandes', lattes: '', img: '', função: '' },
    ],
    link: 'https://doi.org/10.1007/s42979-023-02480-y',
    palavrasChave: ['Deep learning', 'Smart houses', 'Anomaly detection', 'Systematic review', 'RSL', 'Review'],
    publicacoes: [
      {
        titulo: 'Anomaly Detection in Smart houses for Healthcare',
        revista: 'SN Computer Science',
        doi: 'https://doi.org/10.1007/s42979-023-02480-y'
      }
    ],
    abstract: `Nowadays, device monitoring is an activity present in various different environments...`,
    contribuicoes: [
      'Systematic review on anomaly detection in smart homes',
      'Emphasis on models that do not require labeled data (unsupervised)',
      'Analysis of 1185 articles with rigorous filtering; 27 selected',
      'Classification of studies into supervised, unsupervised, and hybrid learning',
      'Use of a custom protocol with 13 quality assessment criteria',
      'Focus on health risk detection, especially falls',
      'Comparison between types of sensors and data sources (video, accelerometer, etc.)'
    ]
  }
]
