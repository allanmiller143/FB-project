
import Fernando from '../../../assets/Members/Fernando.jpg'

const FernandoData = { nome: 'Fernando Buarque de Lima Neto', lattes: 'http://lattes.cnpq.br/5175924818753829', img: Fernando, função: 'Doutor' }


export const projetosData = [
  {
    id: 'p1',
    titulo: 'UAV control in autonomous object-goal navigation: a systematic literature review',
    descricao: 'Avalia o uso de LLMs para mapear conceitos médicos e construir grafos de conhecimento RDF com alta precisão.',
    area: 'Inteligência Artificial',
    data: '2024-05-24',
    autores_info: [
      { nome: 'Angel Ayala', lattes: 'http://lattes.cnpq.br/7881645237344440', img: '', função: '' },
      { nome: ' Leticia Portela ', lattes: '', img: '', função: '' },
      FernandoData,
      { nome: 'Bruno J. T. Fernandes', lattes: '', img: '', função: '' },
      { nome: ' Francisco Cruz', lattes: '', img: '', função: '' },

    ],
    link:'https://doi.org/10.1007/s10462-024-10758-7',
    palavrasChave: ['Autonomous systems', 'UAV control', 'semântica médica', '· Object-goal navigation', 'Systematic',],
    publicacoes: [
      {
        titulo: 'UAV control in autonomous object-goal navigation: a systematic literature review',
        revista: 'Artificial Intelligence Review',
        doi: 'https://doi.org/10.1007/s10462-024-10758-7'
      }
    ],
    abstract: `Research interest in autonomous control of unmanned aerial vehicles (UAVs) has increased rapidly over the past decade. They are now widely used in civilian, military, and private areas. Applications include surveillance, search and rescue, and delivery tasks. More broadly, they excel at solving problems where a significant amount of space must be covered and traveled. However, using UAVs to solve navigation problems with full autonomy necessitates the mastering of complex subtasks. A solution that includes control, planning, localization, and mapping remains an open challenge. Object-goal navigation contains the same navigation problems where the main objective is to reach a target object. The search and identification of this target are central to the vehicle’s navigation. This requires an understanding of what it is and where it can be located to move around the scene. This paper presents a systematic literature review on object-goal navigation and its subtasks, using autonomous UAVs. Survey taxonomies were found for the tasks and methods behind navigation and target localization problems using UAVs. The review analyzed 67 articles found between 2011 and 2022. They were found in the ACM, IEEE Xplore, WebOfScience, Science Direct, and Scopus databases. This review revealed essential issues related to autonomous navigation task dependencies. Moreover, it highlighted gaps in UAV development and framework standardization. Open challenges for autonomous UAV control for object-goal navigation must address the research on finding methods for problems. For example, autonomy level and comparison metrics, considering safety, ethics, and legal implications.`,
    image: '',
    contribuicoes: [
      'Propõe o uso de LLMs para mapeamento semântico em ontologias médicas',
      'Compara ChatGPT, GPT-3 e BioGPT na tarefa de entity mapping',
      'Aplica um novo conjunto de dados clínico com foco em conceitos médicos',
      'Utiliza conceitos de LOD (Linked Open Data) e RDF para grafos de conhecimento',
      'Avalia os modelos com métricas como precisão e cobertura semântica',
      'Mostra que LLMs superam abordagens baseadas em embeddings em tarefas de mapeamento',
      'Sugere que LLMs são promissores para automatizar a construção de grafos RDF na área médica'
    ]

  },
  {
    id: 'p2',
    titulo: 'Anomaly Detection in Smart houses for Healthcare',
    descricao: 'Recent Advances, and Future Perspectives',
    area: 'Saúde',
    data: '2024-01-03',
    image: '',
    autores_info: [
      { nome: 'Yves M. Galvão', lattes: '', img: '', função: '' },
      { nome: 'Letícia Castro ', lattes: '', img: '', função: '' },
      { nome: 'Janderson Ferreira,', lattes: '', img: '', função: '' },
      FernandoData,
      { nome: 'Roberta Andrade de Araújo Fagundes', lattes: '', img: '', função: '' },
      { nome: 'Bruno J. T. Fernandes ', lattes: '', img: '', função: '' },
    ],
    link:'https://doi.org/10.1007/s42979-023-02480-y',
    palavrasChave: ['Deep learning', 'Smart houses', 'Anomaly detection', 'Systematic review', 'RSL', 'Review'],
    publicacoes: [
      {
        titulo: 'Anomaly Detection in Smart houses for Healthcare',
        revista: 'SN Computer Science',
        doi: 'https://doi.org/10.1007/s42979-023-02480-y'
      }
    ],
    abstract: `Nowadays, device monitoring is an activity present in various different environments. Ranging from monitoring workers in their workplaces, city traffic, surveillance in shops, to elderly at home, all that rely on effective anomaly detection in video scenes. In the context of residences, although there are many kinds of monitoring cameras and sensors, these devices usually are not able to detect health risks automatically. The traditional methods of monitoring people in a house to avoid potential health risks are expensive and, in most cases, require the healthcare professional’s physical presence. A possible alternative for this problem is using a machine learning model to detect health risks by monitoring daily activities. Although these models are capable of identifying activities that represent health risks, many of them depend on labeled data to identify and classify such events. Moreover as these events rarely occur, the sought models have to be effective to avoid needing labeled data. This paper presents a systematic review of the anomaly detection models in smart houses related to identifying health risks. A special attention was given to anomaly detection approaches that avoid using labeled data. After applying the proposed protocol in five databases, between 2009 and 2023 (June), we have identified 1185 studies have met the quality criteria. The selected papers were analyzed using an ad hoc questionnaire, and were ranked according to their relevance. The results suggest that anomaly detection is an important research area in the context of smart houses related to health risks, and bring some insights into why it is expanding in the recent years.`,
    contribuicoes: [
      'Revisão sistemática sobre detecção de anomalias em casas inteligentes',
      'Ênfase em modelos que dispensam dados rotulados (unsupervised)',
      'Análise de 1185 artigos com filtro rigoroso; 27 selecionados',
      'Classificação dos estudos em aprendizado supervisionado, não supervisionado e híbrido',
      'Uso de protocolo próprio com 13 critérios de avaliação de qualidade',
      'Foco na detecção de riscos à saúde, especialmente quedas',
      'Comparação entre tipos de sensores e fontes de dados (vídeo, acelerômetro, etc.)'
    ]
  },
 

]
