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

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function PublicoAlvoPage() {
  const grupos = [
    {
      titulo: "Crianças e Bebês",
      subtitulo: "0 a 15 anos",
      icon: <ChildCareIcon sx={{ fontSize: 45 }} />,
      cor: "#e3f2fd",
      corIcone: "#1976d2",
      descricao: "A vacinação infantil é fundamental para proteger contra doenças graves e garantir o desenvolvimento saudável.",
      vacinas: ["BCG", "Hepatite B", "Pentavalente", "Poliomielite", "Rotavírus", "Pneumocócica", "Meningocócica", "Tríplice Viral", "HPV"],
      cuidados: "Manter carteira de vacinação sempre atualizada. Bebês prematuros podem ter calendário adaptado.",
      prioridade: "Alta"
    },
    {
      titulo: "Gestantes",
      subtitulo: "Durante toda a gestação",
      icon: <PregnantWomanIcon sx={{ fontSize: 45 }} />,
      cor: "#fce4ec",
      corIcone: "#c2185b",
      descricao: "Vacinação na gestação protege mãe e bebê contra doenças que podem causar complicações graves.",
      vacinas: ["dTpa (após 20ª semana)", "Hepatite B", "Influenza", "COVID-19"],
      cuidados: "Vacinas de vírus vivos são contraindicadas. Sempre consulte seu obstetra antes de qualquer vacinação.",
      prioridade: "Alta"
    },
    {
      titulo: "Idosos",
      subtitulo: "60 anos ou mais",
      icon: <ElderlyIcon sx={{ fontSize: 45 }} />,
      cor: "#fff3e0",
      corIcone: "#ef6c00",
      descricao: "Com o envelhecimento, o sistema imunológico enfraquece, tornando essencial o reforço de proteção.",
      vacinas: ["Influenza (anual)", "Pneumocócica 23", "Herpes-zóster", "COVID-19", "dT (a cada 10 anos)", "Hepatite B"],
      cuidados: "Algumas vacinas disponíveis apenas em clínicas particulares. Portadores de doenças crônicas têm prioridade adicional.",
      prioridade: "Alta"
    },
    {
      titulo: "Profissionais de Saúde",
      subtitulo: "Todos da área da saúde",
      icon: <WorkIcon sx={{ fontSize: 45 }} />,
      cor: "#e8f5e9",
      corIcone: "#2e7d32",
      descricao: "Profissionais expostos a agentes infecciosos precisam de imunização reforçada e comprovada.",
      vacinas: ["Hepatite B + sorologia", "Tríplice Viral", "dTpa", "Varicela", "Influenza (anual)", "COVID-19"],
      cuidados: "Comprovação vacinal é exigência obrigatória. Realizar sorologias quando indicado pelo PCMSO.",
      prioridade: "Obrigatória"
    },
    {
      titulo: "Grupos de Risco",
      subtitulo: "Condições especiais de saúde",
      icon: <HealthAndSafetyIcon sx={{ fontSize: 45 }} />,
      cor: "#f3e5f5",
      corIcone: "#7b1fa2",
      descricao: "Pessoas com imunidade comprometida ou doenças crônicas necessitam de cuidados e calendário especial.",
      vacinas: ["Calendário adaptado", "Pneumocócica", "Influenza", "Meningocócica", "Hepatite A e B"],
      cuidados: "NUNCA vacinas de vírus vivos em imunossuprimidos. Consulte sempre seu médico especialista antes de vacinar.",
      prioridade: "Crítica"
    },
    {
      titulo: "Viajantes",
      subtitulo: "Destinos nacionais e internacionais",
      icon: <GroupsIcon sx={{ fontSize: 45 }} />,
      cor: "#e0f2f1",
      corIcone: "#00695c",
      descricao: "Proteção específica conforme área de risco e exigências sanitárias do destino da viagem.",
      vacinas: ["Febre Amarela", "Hepatite A", "Febre Tifoide", "Meningocócica ACWY", "Raiva", "COVID-19"],
      cuidados: "Planejar vacinação com 4 a 6 semanas de antecedência. Verificar certificado internacional e exigências do país.",
      prioridade: "Média"
    }
  ];

  const getPrioridadeColor = (prioridade:any) => {
    switch(prioridade) {
      case 'Alta': return 'error';
      case 'Obrigatória': return 'warning';
      case 'Crítica': return 'error';
      case 'Média': return 'info';
      default: return 'default';
    }
  };

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
            Público-Alvo da Vacinação
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', mt: 2 }}
          >
            Cada grupo populacional tem necessidades específicas. Identifique seu perfil e mantenha-se protegido!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {grupos.map((grupo, index) => (
              <Card
                key={index} 
                sx={{ 
                  minHeight: 480,
                  bgcolor: grupo.cor,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 8
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
                          sx={{ fontWeight: 'bold', color: '#424242' }}
                        >
                          {grupo.titulo}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {grupo.subtitulo}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip 
                      label={grupo.prioridade} 
                      color={getPrioridadeColor(grupo.prioridade)}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>

                  <Typography 
                    variant="body1" 
                    sx={{ color: 'text.primary', mb: 3, lineHeight: 1.6 }}
                  >
                    {grupo.descricao}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ fontWeight: 'bold', color: '#424242', mb: 1.5 }}
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
                            bgcolor: 'rgba(255,255,255,0.8)',
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box 
                    sx={{ 
                      bgcolor: 'rgba(255, 152, 0, 0.15)', 
                      p: 2, 
                      borderRadius: 2,
                      border: '2px solid rgba(255, 152, 0, 0.3)'
                    }}
                  >
                    <Typography 
                      variant="subtitle2" 
                      sx={{ fontWeight: 'bold', color: '#424242', mb: 1 }}
                    >
                      ⚠️ Cuidados Especiais:
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
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
                      '&:hover': {
                        bgcolor: grupo.corIcone,
                        opacity: 0.9
                      },
                      px: 5,
                      py: 1
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
            boxShadow: 3,
            textAlign: 'center',
            border: '2px solid #1976d2'
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            📋 Importante Saber
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
            Além destes grupos prioritários, <strong>toda a população</strong> deve manter o calendário de vacinação atualizado.
            A imunização coletiva protege também quem não pode se vacinar por questões médicas.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            Em caso de dúvidas sobre qual vacina tomar, consulte sempre um profissional de saúde qualificado 
            para avaliar seu histórico e recomendar o esquema vacinal adequado.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}