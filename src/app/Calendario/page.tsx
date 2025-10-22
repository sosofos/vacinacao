'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function CalendarioPage() {
  const vacinas = [
    {
      nome: "BCG",
      faixaEtaria: "Ao nascer",
      doses: "Dose única",
      intervalo: "Aplicada na maternidade",
      protecao: "Tuberculose (formas graves)",
      cor: "#EFF6FF"
    },
    {
      nome: "Hepatite B",
      faixaEtaria: "Ao nascer, 2, 4 e 6 meses",
      doses: "4 doses",
      intervalo: "Primeira dose ao nascer, depois aos 2, 4 e 6 meses",
      protecao: "Hepatite B",
      cor: "#F5F3FF"
    },
    {
      nome: "Pentavalente",
      faixaEtaria: "2, 4 e 6 meses",
      doses: "3 doses",
      intervalo: "Intervalos de 60 dias",
      protecao: "Difteria, tétano, coqueluche, Haemophilus e Hepatite B",
      cor: "#ECFDF5"
    },
    {
      nome: "Poliomielite (VIP/VOP)",
      faixaEtaria: "2, 4, 6 e 15 meses",
      doses: "4 doses",
      intervalo: "2, 4 e 6 meses (VIP), 15 meses (VOP)",
      protecao: "Poliomielite (paralisia infantil)",
      cor: "#FEF3C7"
    },
    {
      nome: "Rotavírus",
      faixaEtaria: "2 e 4 meses",
      doses: "2 doses",
      intervalo: "Intervalo de 60 dias",
      protecao: "Diarreia por rotavírus",
      cor: "#FDF2F8"
    },
    {
      nome: "Pneumocócica 10",
      faixaEtaria: "2, 4 e 12 meses",
      doses: "3 doses",
      intervalo: "2 e 4 meses + reforço aos 12 meses",
      protecao: "Pneumonia, meningite e otite",
      cor: "#ECFEFF"
    },
    {
      nome: "Meningocócica C",
      faixaEtaria: "3, 5 e 12 meses",
      doses: "3 doses",
      intervalo: "3 e 5 meses + reforço aos 12 meses",
      protecao: "Meningite meningocócica tipo C",
      cor: "#F0FDF4"
    },
    {
      nome: "Tríplice Viral (SCR)",
      faixaEtaria: "12 meses e 15 meses",
      doses: "2 doses",
      intervalo: "1ª dose aos 12 meses, 2ª dose aos 15 meses",
      protecao: "Sarampo, caxumba e rubéola",
      cor: "#FFFBEB"
    },
    {
      nome: "HPV",
      faixaEtaria: "9 a 14 anos",
      doses: "2 doses",
      intervalo: "Intervalo de 6 meses entre as doses",
      protecao: "Papilomavírus humano (HPV)",
      cor: "#FAF5FF"
    },
    {
      nome: "Influenza (Gripe)",
      faixaEtaria: "Anual para grupos prioritários",
      doses: "Dose anual",
      intervalo: "Campanha anual (outono/inverno)",
      protecao: "Influenza (gripe)",
      cor: "#EFF6FF"
    },
    {
      nome: "COVID-19",
      faixaEtaria: "6 meses em diante",
      doses: "Conforme orientação",
      intervalo: "Varia conforme idade e condição",
      protecao: "COVID-19",
      cor: "#EEF2FF"
    },
    {
      nome: "dT/dTpa (Adultos)",
      faixaEtaria: "A partir de 7 anos",
      doses: "Reforço a cada 10 anos",
      intervalo: "Reforço decenal",
      protecao: "Difteria, tétano e coqueluche",
      cor: "#FEF2F2"
    }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display&display=swap');
        
        body {
          font-family: 'DM Sans', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <Box sx={{ bgcolor: '#F9FAFB', minHeight: '100vh', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: '#2563EB',
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              Calendário Nacional de Vacinação
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#6B7280', 
                maxWidth: '800px', 
                mx: 'auto', 
                mt: 2,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400
              }}
            >
              Confira o calendário completo de vacinação do SUS e mantenha sua carteira em dia
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            {vacinas.map((vacina, index) => (
              <Card
                key={index}
                sx={{ 
                  width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(50% - 12px)' },
                  maxWidth: 550,
                  minHeight: 320,
                  bgcolor: vacina.cor,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  borderRadius: 2,
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography 
                      variant="h5" 
                      component="div" 
                      sx={{ 
                        fontWeight: 700, 
                        color: '#2563EB',
                        fontFamily: "'Montserrat', sans-serif"
                      }}
                    >
                      {vacina.nome}
                    </Typography>
                    <Chip 
                      label={vacina.doses} 
                      size="small" 
                      sx={{ 
                        fontWeight: 600,
                        bgcolor: '#2563EB',
                        color: 'white',
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: '#1F2937', 
                        fontWeight: 600, 
                        mb: 0.5,
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    >
                      Faixa Etária:
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#6B7280', 
                        mb: 1.5,
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    >
                      {vacina.faixaEtaria}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-start' }}>
                    <AccessTimeIcon sx={{ fontSize: 18, mr: 1, color: '#10B981', mt: 0.2 }} />
                    <Box>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: '#1F2937', 
                          fontWeight: 600, 
                          mb: 0.5,
                          fontFamily: "'DM Sans', sans-serif"
                        }}
                      >
                        Esquema de Doses:
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#6B7280',
                          fontFamily: "'DM Sans', sans-serif"
                        }}
                      >
                        {vacina.intervalo}
                      </Typography>
                    </Box>
                  </Box>

                  <Box 
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.8)', 
                      p: 1.5, 
                      borderRadius: 2,
                      mt: 2,
                      border: '1px solid rgba(37, 99, 235, 0.2)'
                    }}
                  >
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: '#1F2937', 
                        fontWeight: 600, 
                        mb: 0.5,
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    >
                      Protege contra:
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#1F2937', 
                        fontWeight: 500,
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    >
                      {vacina.protecao}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box 
            sx={{ 
              mt: 6, 
              p: 4, 
              bgcolor: 'white', 
              borderRadius: 2, 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: '2px solid #2563EB'
            }}
          >
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: '#2563EB',
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              Importante!
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#6B7280',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              Este calendário segue as recomendações do Programa Nacional de Imunizações (PNI). 
              Consulte sempre um profissional de saúde para orientações específicas sobre seu caso.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}