'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import ElderlyIcon from '@mui/icons-material/Elderly';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export default function PublicoAlvoPage() {
  const grupos = [
    {
      titulo: "Crianças e Bebês",
      subtitulo: "0 a 15 anos",
      icon: <ChildCareIcon sx={{ fontSize: 45 }} />,
      cor: "#EFF6FF",
      corIcone: "#2563EB",
      descricao: "A vacinação infantil é fundamental para proteger contra doenças graves e garantir o desenvolvimento saudável.",
      vacinas: ["BCG", "Hepatite B", "Pentavalente", "Poliomielite", "Rotavírus", "Pneumocócica", "Meningocócica", "Tríplice Viral", "HPV"],
      cuidados: "Manter carteira de vacinação sempre atualizada. Bebês prematuros podem ter calendário adaptado.",
      prioridade: "Alta"
    },
    {
      titulo: "Gestantes",
      subtitulo: "Durante toda a gestação",
      icon: <PregnantWomanIcon sx={{ fontSize: 45 }} />,
      cor: "#FDF2F8",
      corIcone: "#DB2777",
      descricao: "Vacinação na gestação protege mãe e bebê contra doenças que podem causar complicações graves.",
      vacinas: ["dTpa (após 20ª semana)", "Hepatite B", "Influenza", "COVID-19"],
      cuidados: "Vacinas de vírus vivos são contraindicadas. Sempre consulte seu obstetra antes de qualquer vacinação.",
      prioridade: "Alta"
    },
    {
      titulo: "Idosos",
      subtitulo: "60 anos ou mais",
      icon: <ElderlyIcon sx={{ fontSize: 45 }} />,
      cor: "#FEF3C7",
      corIcone: "#F59E0B",
      descricao: "Com o envelhecimento, o sistema imunológico enfraquece, tornando essencial o reforço de proteção.",
      vacinas: ["Influenza (anual)", "Pneumocócica 23", "Herpes-zóster", "COVID-19", "dT (a cada 10 anos)", "Hepatite B"],
      cuidados: "Algumas vacinas disponíveis apenas em clínicas particulares. Portadores de doenças crônicas têm prioridade adicional.",
      prioridade: "Alta"
    },
    {
      titulo: "Profissionais de Saúde",
      subtitulo: "Todos da área da saúde",
      icon: <WorkIcon sx={{ fontSize: 45 }} />,
      cor: "#ECFDF5",
      corIcone: "#10B981",
      descricao: "Profissionais expostos a agentes infecciosos precisam de imunização reforçada e comprovada.",
      vacinas: ["Hepatite B + sorologia", "Tríplice Viral", "dTpa", "Varicela", "Influenza (anual)", "COVID-19"],
      cuidados: "Comprovação vacinal é exigência obrigatória. Realizar sorologias quando indicado pelo PCMSO.",
      prioridade: "Obrigatória"
    },
    {
      titulo: "Grupos de Risco",
      subtitulo: "Condições especiais de saúde",
      icon: <HealthAndSafetyIcon sx={{ fontSize: 45 }} />,
      cor: "#F5F3FF",
      corIcone: "#8B5CF6",
      descricao: "Pessoas com imunidade comprometida ou doenças crônicas necessitam de cuidados e calendário especial.",
      vacinas: ["Calendário adaptado", "Pneumocócica", "Influenza", "Meningocócica", "Hepatite A e B"],
      cuidados: "NUNCA vacinas de vírus vivos em imunossuprimidos. Consulte sempre seu médico especialista antes de vacinar.",
      prioridade: "Crítica"
    },
    {
      titulo: "Viajantes",
      subtitulo: "Destinos nacionais e internacionais",
      icon: <GroupsIcon sx={{ fontSize: 45 }} />,
      cor: "#ECFEFF",
      corIcone: "#06B6D4",
      descricao: "Proteção específica conforme área de risco e exigências sanitárias do destino da viagem.",
      vacinas: ["Febre Amarela", "Hepatite A", "Febre Tifoide", "Meningocócica ACWY", "Raiva", "COVID-19"],
      cuidados: "Planejar vacinação com 4 a 6 semanas de antecedência. Verificar certificado internacional e exigências do país.",
      prioridade: "Média"
    }
  ];

  const getPrioridadeColor = (prioridade: any) => {
    switch(prioridade) {
      case 'Alta': return 'error';
      case 'Obrigatória': return 'warning';
      case 'Crítica': return 'error';
      case 'Média': return 'info';
      default: return 'default';
    }
  };

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
              Público-Alvo da Vacinação
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
              Cada grupo populacional tem necessidades específicas. Identifique seu perfil e mantenha-se protegido!
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {grupos.map((grupo, index) => (
              <Card
                key={index} 
                sx={{ 
                  width: { xs: '100%', md: 'calc(50% - 16px)' },
                  maxWidth: '600px',
                  minHeight: 480,
                  bgcolor: grupo.cor,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  borderRadius: 2,
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box 
                        sx={{ 
                          bgcolor: grupo.corIcone,
                          borderRadius: '50%',
                          p: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          color: 'white'
                        }}
                      >
                        {grupo.icon}
                      </Box>
                      <Box>
                        <Typography 
                          variant="h5" 
                          component="div" 
                          sx={{ 
                            fontWeight: 700, 
                            color: '#1F2937',
                            fontFamily: "'Montserrat', sans-serif"
                          }}
                        >
                          {grupo.titulo}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#6B7280',
                            fontFamily: "'DM Sans', sans-serif"
                          }}
                        >
                          {grupo.subtitulo}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip 
                      label={grupo.prioridade} 
                      color={getPrioridadeColor(grupo.prioridade)}
                      size="small"
                      sx={{ 
                        fontWeight: 600,
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    />
                  </Box>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#1F2937', 
                      mb: 3, 
                      lineHeight: 1.6,
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  >
                    {grupo.descricao}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 600, 
                        color: '#1F2937', 
                        mb: 1.5,
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    >
                      💉 Principais Vacinas:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {grupo.vacinas.map((vacina, idx) => (
                        <Chip 
                          key={idx}
                          label={vacina}
                          size="small"
                          sx={{ 
                            bgcolor: 'rgba(255,255,255,0.9)',
                            fontWeight: 500,
                            fontFamily: "'DM Sans', sans-serif",
                            border: '1px solid rgba(0,0,0,0.08)'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box 
                    sx={{ 
                      bgcolor: 'rgba(245, 158, 11, 0.1)', 
                      p: 2, 
                      borderRadius: 2,
                      border: '2px solid rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontWeight: 600, 
                        color: '#1F2937', 
                        mb: 1,
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    >
                      ⚠️ Cuidados Especiais:
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#1F2937', 
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    >
                      {grupo.cuidados}
                    </Typography>
                  </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: 'center', pb: 3, pt: 2 }}>
                  <Button 
                    href='/Calendario'
                    size="medium" 
                    variant="contained"
                    sx={{ 
                      bgcolor: grupo.corIcone,
                      fontFamily: "'DM Sans', sans-serif",
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: grupo.corIcone,
                        opacity: 0.9
                      },
                      px: 5,
                      py: 1.2,
                      borderRadius: 2
                    }}
                  >
                    Ver Calendário
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>

          {/* Informação Adicional */}
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
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: '#2563EB',
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              📋 Importante Saber
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#6B7280', 
                mb: 2, 
                lineHeight: 1.8,
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              Além destes grupos prioritários, <strong style={{ color: '#1F2937' }}>toda a população</strong> deve manter o calendário de vacinação atualizado.
              A imunização coletiva protege também quem não pode se vacinar por questões médicas.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#6B7280', 
                lineHeight: 1.8,
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              Em caso de dúvidas sobre qual vacina tomar, consulte sempre um profissional de saúde qualificado 
              para avaliar seu histórico e recomendar o esquema vacinal adequado.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}