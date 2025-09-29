import Image from "next/image";
import styles from "./page.module.css";
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Ensure this import is correct
import Box from '@mui/material/Box';

export default function VaccineHomePage() {
  const cards = [
    {
      title: "O que é uma Vacina?",
      description: "As vacinas são preparações biológicas que estimulam o sistema imunológico a produzir anticorpos, oferecendo proteção contra doenças específicas sem causar a doença em si.",
      image: "https://www.provepsico.com.br/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-06-at-10.09.28.jpeg",
      alt: "Vacina e seringa"
    },
    {
      title: "Como Funciona",
      description: "Ao receber a vacina, seu corpo aprende a reconhecer e combater vírus e bactérias. Isso cria uma memória imunológica que protege você em exposições futuras ao agente infeccioso.",
      image: "https://img.freepik.com/fotos-gratis/jovem-medico-esta-usando-um-estetoscopio-ouvir-o-batimento-cardiaco-do-paciente-foto-de-uma-medica-dando-um-paciente-masculino-um-check-up_657921-875.jpg?semt=ais_hybrid&w=740&q=80",
      alt: "Sistema imunológico"
    },
    {
      title: "Benefícios da Vacinação",
      description: "A vacinação previne doenças graves, reduz hospitalizações, protege a comunidade através da imunidade coletiva e contribui para a erradicação de doenças.",
      image: "https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png",
      alt: "Família saudável"
    },
    {
      title: "Segurança e Eficácia",
      description: "Todas as vacinas passam por rigorosos testes clínicos e são constantemente monitoradas. Os benefícios da vacinação superam amplamente os riscos de efeitos colaterais.",
      image: "https://wordpress-cms-revista-prod-assets.quero.space/legacy_posts/post_images/44394/5e69eaa7225eb126e41ff1ce462ebec0483b0bfe.jpg?1682443514",
      alt: "Pesquisa científica"
    }
  ];

  return (
    <Box sx={{ bgcolor: '#edebeb', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: '#1976d2' }}
          >
            Entenda a Importância da Vacinação
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', mt: 2 }}
          >
            A vacinação é uma das maiores conquistas da medicina moderna, 
            salvando milhões de vidas todos os anos através da prevenção de doenças.
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={4}>
          {cards.map((card, index) => (
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.alt}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="div"
                      sx={{ fontWeight: 'bold', color: '#1976d2' }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'white', borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Mantenha sua Carteira de Vacinação em Dia
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
            Consulte o calendário de vacinação e proteja você e sua família contra doenças evitáveis.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}