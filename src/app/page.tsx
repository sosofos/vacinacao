'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Heart, Users, TrendingUp, Award, ChevronDown } from 'lucide-react';

export default function VaccinationHome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '154M+', label: 'Vidas Salvas', icon: Heart },
    { number: '99%', label: 'Taxa de Eficácia', icon: Award },
    { number: '200+', label: 'Países Participantes', icon: Users },
    { number: '50+', label: 'Doenças Prevenidas', icon: Shield }
  ];

  const benefits = [
    {
      title: 'Proteção Individual',
      description: 'As vacinas fortalecem seu sistema imunológico, criando defesas contra doenças graves e potencialmente fatais.',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Imunidade Coletiva',
      description: 'Quando a maioria se vacina, protegemos aqueles que não podem, criando uma barreira comunitária contra surtos.',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Economia de Vidas',
      description: 'Milhões de vidas são salvas anualmente através da prevenção de doenças infecciosas e epidemias globais.',
      icon: Heart,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Progresso Científico',
      description: 'A vacinação representa décadas de pesquisa científica e avanços tecnológicos em medicina preventiva.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20 bg-blue-500"
            style={{ width: '384px', height: '384px', top: '10%', left: '10%' }}
          />
          <div 
            className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20 bg-purple-500"
            style={{ width: '384px', height: '384px', top: '60%', right: '10%' }}
          />
          <div 
            className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20 bg-pink-500"
            style={{ width: '384px', height: '384px', bottom: '10%', left: '50%' }}
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50" />
              <Shield className="relative text-blue-400" style={{ width: '96px', height: '96px' }} strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Vacinas Salvam Vidas
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A vacinação é uma das maiores conquistas da medicina moderna, protegendo milhões de pessoas ao redor do mundo contra doenças graves.
          </p>

          <div className="mb-16 max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">A Importância da Vacinação</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              As vacinas são responsáveis pela erradicação de doenças mortais como a varíola e pela redução drástica de outras enfermidades que antes causavam milhões de mortes. Cada dose aplicada não apenas protege quem a recebe, mas também contribui para a proteção coletiva da comunidade.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Manter a carteira de vacinação atualizada é um ato de cuidado consigo mesmo e com o próximo. É através da imunização em massa que conseguimos controlar epidemias e garantir um futuro mais saudável para as próximas gerações.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-blue-400" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{ width: '200px' }}
                >
                  <Icon className="w-8 h-8 mb-4 text-blue-400" />
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            Por Que Vacinar?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Entenda os principais benefícios da vacinação para você, sua família e toda a sociedade
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl"
                  style={{ width: '100%', maxWidth: '500px' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold mb-6">
              Mantenha Sua Carteira de Vacinação em Dia
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Consulte um profissional de saúde e verifique quais vacinas você precisa tomar. A prevenção é o melhor remédio.
            </p>
            <a 
            href="./Local"
            className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Encontre um Posto de Saúde
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Vacinação é Vida. Informações baseadas em dados da OMS e Ministério da Saúde.</p>
        </div>
      </footer>
    </div>
  );
}