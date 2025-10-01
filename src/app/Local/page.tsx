'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';

export default function LocaisPage() {
  const locais = [
    {
      tipo: "Unidades Básicas de Saúde (UBS)",
      iconColor: '#1976d2',
      descricao: "Postos de saúde do SUS disponíveis em todos os bairros",
      cor: "#e3f2fd",
      vacinas: "Todas as vacinas do calendário nacional gratuitas",
      horario: "Segunda a sexta: 7h às 17h (varia por unidade)",
      documentos: ["Carteira de vacinação", "Documento de identidade ou CPF", "Cartão SUS (se tiver)"],
      agendamento: "Não necessário",
      observacao: "Verifique a unidade mais próxima no site da prefeitura",
      iconType: 'hospital'
    },
    {
      tipo: "Clínicas Particulares",
      iconColor: '#7b1fa2',
      descricao: "Redes de clínicas especializadas em vacinação",
      cor: "#f3e5f5",
      vacinas: "Vacinas do SUS + vacinas especiais (Herpes-zóster, Meningite B, etc)",
      horario: "Segunda a sábado: 8h às 20h (algumas unidades aos domingos)",
      documentos: ["Carteira de vacinação", "Documento de identidade", "Pedido médico (quando necessário)"],
      agendamento: "Recomendado (online ou telefone)",
      observacao: "Valores variam conforme a vacina e podem ter cobertura por plano de saúde",
      iconType: 'business'
    },
    {
      tipo: "Campanhas de Vacinação",
      iconColor: '#2e7d32',
      descricao: "Ações itinerantes em praças, escolas e empresas",
      cor: "#e8f5e9",
      vacinas: "Vacinas específicas da campanha (Gripe, COVID-19, Sarampo, etc)",
      horario: "Conforme divulgação (geralmente sábados e feriados)",
      documentos: ["Carteira de vacinação", "Documento de identidade"],
      agendamento: "Não necessário - atendimento por ordem de chegada",
      observacao: "Fique atento às divulgações da Secretaria de Saúde nas redes sociais",
      iconType: 'home'
    },
    {
      tipo: "Salas de Vacina em Empresas",
      iconColor: '#ef6c00',
      descricao: "Vacinação corporativa disponível em algumas empresas",
      cor: "#fff3e0",
      vacinas: "Influenza, COVID-19 e outras conforme contrato",
      horario: "Durante horário comercial (varia por empresa)",
      documentos: ["Carteira de vacinação", "Crachá de funcionário"],
      agendamento: "Conforme organização interna da empresa",
      observacao: "Consulte o RH ou departamento de saúde ocupacional",
      iconType: 'school'
    }
  ];

  const documentosNecessarios = [
    "Carteira de vacinação (física ou digital)",
    "Documento oficial com foto (RG, CNH ou carteira de trabalho)",
    "CPF ou Cartão SUS",
    "Para menores: certidão de nascimento ou RG",
    "Pedido médico (apenas para vacinas especiais)"
  ];

  const dicas = [
    "Chegue cedo aos postos de saúde para evitar filas",
    "Baixe o app Conecte SUS para ter sua carteira digital",
    "Leve todas as carteirinhas de vacinação anteriores",
    "Informe ao profissional sobre alergias e medicamentos em uso",
    "Crianças menores de 2 anos: levar caderneta da criança",
    "Gestantes: levar cartão pré-natal"
  ];

  const renderIcon = (iconType: string, color: string) => {
    const iconProps = { sx: { fontSize: 50, color: color } };
    
    switch(iconType) {
      case 'hospital':
        return <LocalHospitalIcon {...iconProps} />;
      case 'business':
        return <BusinessIcon {...iconProps} />;
      case 'home':
        return <HomeIcon {...iconProps} />;
      case 'school':
        return <SchoolIcon {...iconProps} />;
      default:
        return <LocalHospitalIcon {...iconProps} />;
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
            Onde se Vacinar?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', mt: 2 }}
          >
            Encontre o local mais adequado para você e sua família se protegerem
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4, 
          justifyContent: 'center',
          mb: 6 
        }}>
          {locais.map((local, index) => (
            <Box 
              key={index} 
              sx={{ 
                width: { xs: '100%', md: 'calc(50% - 16px)' }, 
                maxWidth: '600px' 
              }}
            >
              <Card 
                sx={{ 
                  minHeight: 450,
                  bgcolor: local.cor,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    {renderIcon(local.iconType, local.iconColor)}
                  </Box>
                  
                  <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{ fontWeight: 'bold', color: '#424242', textAlign: 'center', mb: 1 }}
                  >
                    {local.tipo}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ color: 'text.secondary', textAlign: 'center', mb: 2 }}
                  >
                    {local.descricao}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ fontWeight: 'bold', color: '#424242', mb: 1 }}
                    >
                      Vacinas Disponíveis:
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {local.vacinas}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <ScheduleIcon sx={{ fontSize: 18, mr: 1, color: '#757575' }} />
                      <Typography 
                        variant="subtitle2" 
                        sx={{ fontWeight: 'bold', color: '#424242' }}
                      >
                        Horário de Funcionamento:
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 3 }}>
                      {local.horario}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <DescriptionIcon sx={{ fontSize: 18, mr: 1, color: '#757575' }} />
                      <Typography 
                        variant="subtitle2" 
                        sx={{ fontWeight: 'bold', color: '#424242' }}
                      >
                        Documentos Necessários:
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 3 }}>
                      {local.documentos.map((doc, idx) => (
                        <Typography key={idx} variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                          • {doc}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <BadgeIcon sx={{ fontSize: 18, mr: 1, color: '#757575' }} />
                      <Typography 
                        variant="subtitle2" 
                        sx={{ fontWeight: 'bold', color: '#424242' }}
                      >
                        Agendamento:
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 3 }}>
                      {local.agendamento}
                    </Typography>
                  </Box>

                  <Box 
                    sx={{ 
                      bgcolor: 'rgba(33, 150, 243, 0.1)', 
                      p: 1.5, 
                      borderRadius: 1,
                      border: '1px solid rgba(33, 150, 243, 0.3)'
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                      Observação: {local.observacao}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 6 }}>
          <Card sx={{ bgcolor: '#fff9c4', boxShadow: 3 }}>
            <CardContent>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ fontWeight: 'bold', color: '#424242', mb: 3 }}
              >
                Documentos Necessários para Vacinação
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {documentosNecessarios.map((doc, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: '#f57c00', 
                        mr: 2,
                        flexShrink: 0
                      }} 
                    />
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      {doc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Card sx={{ bgcolor: '#e0f2f1', boxShadow: 3 }}>
            <CardContent>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ fontWeight: 'bold', color: '#424242', mb: 3 }}
              >
                Dicas Importantes
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {dicas.map((dica, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Typography 
                      sx={{ 
                        color: '#00695c', 
                        fontWeight: 'bold', 
                        mr: 1,
                        fontSize: '1.2rem',
                        flexShrink: 0
                      }}
                    >
                      {'\u2713'}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                      {dica}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
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
          <PhoneIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Precisa de Ajuda?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
            Entre em contato com a Secretaria de Saúde do seu município ou ligue para o Disque Saúde 136
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Falar com Atendimento
          </Button>
        </Box>
      </Container>
    </Box>
  );
}