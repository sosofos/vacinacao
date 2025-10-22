'use client';

import React, { useState } from 'react';
import { Calendar, Shield, Users, MapPin, Clock, ChevronRight, Menu, X, Syringe, CheckCircle, ArrowRight } from 'lucide-react';

export default function VaccinationHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const vaccines = [
    { name: 'COVID-19', doses: '1ª e 2ª dose + Reforço', available: true },
    { name: 'Influenza (Gripe)', doses: 'Dose anual', available: true },
    { name: 'Hepatite B', doses: '3 doses', available: true },
    { name: 'Tríplice Viral', doses: '2 doses', available: false },
  ];

  const locations = [
    { name: 'UBS Centro', address: 'Rua Principal, 123', hours: '8h - 17h' },
    { name: 'UBS Vila Nova', address: 'Av. Santos, 456', hours: '8h - 17h' },
    { name: 'Hospital Municipal', address: 'Rua da Saúde, 789', hours: '24h' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }
        
        .playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>



      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Proteja sua saúde e de quem você ama
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Agende sua vacinação de forma rápida, segura e gratuita. Encontre os postos mais próximos e mantenha sua carteira de vacinação em dia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/Local" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-center">
                  Ver Locais Disponíveis
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Syringe className="w-48 h-48 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">2.5M+</div>
                <div className="text-gray-600">Doses Aplicadas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-600">Postos Ativos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que vacinar com a gente?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agendamento Fácil</h3>
              <p className="text-gray-600">
                Escolha o melhor dia e horário para você. Sem filas, sem complicação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Seguro</h3>
              <p className="text-gray-600">
                Vacinas certificadas e equipe profissional qualificada para seu cuidado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Postos Próximos</h3>
              <p className="text-gray-600">
                Encontre o posto de vacinação mais conveniente perto de você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Vaccines */}
      <section className="py-16 bg-gray-100" id="vacinas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Vacinas Disponíveis
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Confira as vacinas disponíveis em nossa rede e mantenha sua imunização em dia
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {vaccines.map((vaccine, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{vaccine.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{vaccine.doses}</p>
                  </div>
                  {vaccine.available ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Disponível
                    </span>
                  ) : (
                    <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      Em breve
                    </span>
                  )}
                </div>
                {vaccine.available && (
                  <button className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all mt-4">
                    Agendar vacina
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16" id="locais">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Postos de Vacinação
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Encontre o posto mais próximo de você e confira os horários de funcionamento
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{location.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition font-medium">
                  Ver no mapa
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para se proteger?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Agende sua vacinação agora mesmo e contribua para uma comunidade mais saudável
          </p>
          <button className="bg-white text-green-600 px-10 py-4 rounded-lg hover:bg-green-50 transition font-bold text-lg inline-flex items-center gap-2">
            Agendar Minha Vacina
            <CheckCircle className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold">VacinaBrasil</span>
              </div>
              <p className="text-sm text-gray-400">
                Cuidando da saúde de todos os brasileiros com vacinação segura e acessível.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition">Perguntas Frequentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <p className="text-sm text-gray-400">
                Email: contato@vacinabrasil.gov.br<br />
                Tel: 0800 123 4567<br />
                Atendimento 24h
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2025 VacinaBrasil. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}