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
      cor: "#e3f2fd"
    },
    {
      nome: "Hepatite B",
      faixaEtaria: "Ao nascer, 2, 4 e 6 meses",
      doses: "4 doses",
      intervalo: "Primeira dose ao nascer, depois aos 2, 4 e 6 meses",
      protecao: "Hepatite B",
      cor: "#f3e5f5"
    },
    {
      nome: "Pentavalente",
      faixaEtaria: "2, 4 e 6 meses",
      doses: "3 doses",
      intervalo: "Intervalos de 60 dias",
      protecao: "Difteria, tétano, coqueluche, Haemophilus e Hepatite B",
      cor: "#e8f5e9"
    },
    {
      nome: "Poliomielite (VIP/VOP)",
      faixaEtaria: "2, 4, 6 e 15 meses",
      doses: "4 doses",
      intervalo: "2, 4 e 6 meses (VIP), 15 meses (VOP)",
      protecao: "Poliomielite (paralisia infantil)",
      cor: "#fff3e0"
    },
    {
      nome: "Rotavírus",
      faixaEtaria: "2 e 4 meses",
      doses: "2 doses",
      intervalo: "Intervalo de 60 dias",
      protecao: "Diarreia por rotavírus",
      cor: "#fce4ec"
    },
    {
      nome: "Pneumocócica 10",
      faixaEtaria: "2, 4 e 12 meses",
      doses: "3 doses",
      intervalo: "2 e 4 meses + reforço aos 12 meses",
      protecao: "Pneumonia, meningite e otite",
      cor: "#e0f2f1"
    },
    {
      nome: "Meningocócica C",
      faixaEtaria: "3, 5 e 12 meses",
      doses: "3 doses",
      intervalo: "3 e 5 meses + reforço aos 12 meses",
      protecao: "Meningite meningocócica tipo C",
      cor: "#f1f8e9"
    },
    {
      nome: "Tríplice Viral (SCR)",
      faixaEtaria: "12 meses e 15 meses",
      doses: "2 doses",
      intervalo: "1ª dose aos 12 meses, 2ª dose aos 15 meses",
      protecao: "Sarampo, caxumba e rubéola",
      cor: "#fff9c4"
    },
    {
      nome: "HPV",
      faixaEtaria: "9 a 14 anos",
      doses: "2 doses",
      intervalo: "Intervalo de 6 meses entre as doses",
      protecao: "Papilomavírus humano (HPV)",
      cor: "#e1bee7"
    },
    {
      nome: "Influenza (Gripe)",
      faixaEtaria: "Anual para grupos prioritários",
      doses: "Dose anual",
      intervalo: "Campanha anual (outono/inverno)",
      protecao: "Influenza (gripe)",
      cor: "#b3e5fc"
    },
    {
      nome: "COVID-19",
      faixaEtaria: "6 meses em diante",
      doses: "Conforme orientação",
      intervalo: "Varia conforme idade e condição",
      protecao: "COVID-19",
      cor: "#c5cae9"
    },
    {
      nome: "dT/dTpa (Adultos)",
      faixaEtaria: "A partir de 7 anos",
      doses: "Reforço a cada 10 anos",
      intervalo: "Reforço decenal",
      protecao: "Difteria, tétano e coqueluche",
      cor: "#ffccbc"
    }
  ];

  return (
    <Box sx={{ bgcolor: '#edebeb', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: '#1976d2' }}
          >
            Calendário Nacional de Vacinação
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', mt: 2 }}
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
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{ fontWeight: 'bold', color: '#1565c0' }}
                  >
                    {vacina.nome}
                  </Typography>
                  <Chip 
                    label={vacina.doses} 
                    size="small" 
                    color="primary" 
                    sx={{ fontWeight: 'bold' }}
                  />
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ color: '#424242', fontWeight: 'bold', mb: 0.5 }}
                  >
                    Faixa Etária:
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {vacina.faixaEtaria}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-start' }}>
                  <AccessTimeIcon sx={{ fontSize: 18, mr: 1, color: '#757575', mt: 0.2 }} />
                  <Box>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ color: '#424242', fontWeight: 'bold', mb: 0.5 }}
                    >
                      Esquema de Doses:
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {vacina.intervalo}
                    </Typography>
                  </Box>
                </Box>

                <Box 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.7)', 
                    p: 1.5, 
                    borderRadius: 1,
                    mt: 2 
                  }}
                >
                  <Typography 
                    variant="subtitle2" 
                    sx={{ color: '#424242', fontWeight: 'bold', mb: 0.5 }}
                  >
                    Protege contra:
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
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
            boxShadow: 2,
            textAlign: 'center' 
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Importante!
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Este calendário segue as recomendações do Programa Nacional de Imunizações (PNI). 
            Consulte sempre um profissional de saúde para orientações específicas sobre seu caso.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}