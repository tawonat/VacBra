'use client'

import React, { useState } from 'react';
import { Syringe, Shield, Calendar, Users, MapPin, FileText, ChevronDown, Menu, X, Heart, Award, Clock, Search, AlertTriangle, BookOpen, Phone, CheckCircle, XCircle, Info, Navigation, Hospital } from 'lucide-react';

export default function VacinaBrasil() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [searchCep, setSearchCep] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const vacinas = [
    {
      nome: 'BCG',
      idade: 'Ao nascer',
      protege: 'Formas graves de tuberculose',
      doses: '1 dose',
      categoria: 'Crianças'
    },
    {
      nome: 'Hepatite B',
      idade: 'Ao nascer',
      protege: 'Hepatite B',
      doses: '3 doses',
      categoria: 'Crianças'
    },
    {
      nome: 'Pentavalente',
      idade: '2, 4 e 6 meses',
      protege: 'DTP, Hepatite B e Hib',
      doses: '3 doses',
      categoria: 'Crianças'
    },
    {
      nome: 'Poliomielite',
      idade: '2, 4 e 6 meses',
      protege: 'Paralisia infantil',
      doses: '3 doses + reforços',
      categoria: 'Crianças'
    },
    {
      nome: 'Rotavírus',
      idade: '2 e 4 meses',
      protege: 'Diarreia por rotavírus',
      doses: '2 doses',
      categoria: 'Crianças'
    },
    {
      nome: 'Pneumocócica',
      idade: '2, 4 e 12 meses',
      protege: 'Pneumonia e meningite',
      doses: '3 doses',
      categoria: 'Crianças'
    },
    {
      nome: 'Meningocócica C',
      idade: '3 e 5 meses + reforço',
      protege: 'Meningite C',
      doses: '2 doses + reforço',
      categoria: 'Crianças'
    },
    {
      nome: 'Tríplice Viral',
      idade: '12 meses e 15 meses',
      protege: 'Sarampo, caxumba e rubéola',
      doses: '2 doses',
      categoria: 'Crianças'
    },
    {
      nome: 'Febre Amarela',
      idade: '9 meses',
      protege: 'Febre amarela',
      doses: '1 dose',
      categoria: 'Crianças'
    },
    {
      nome: 'HPV',
      idade: '9 a 14 anos',
      protege: 'Papilomavírus humano',
      doses: '2 doses',
      categoria: 'Adolescentes'
    },
    {
      nome: 'Influenza',
      idade: 'Anual (grupos prioritários)',
      protege: 'Gripe',
      doses: 'Anual',
      categoria: 'Todos'
    },
    {
      nome: 'COVID-19',
      idade: '6 meses+',
      protege: 'COVID-19',
      doses: 'Conforme protocolo',
      categoria: 'Todos'
    },
    {
      nome: 'Hepatite A',
      idade: '15 meses',
      protege: 'Hepatite A',
      doses: '1 dose',
      categoria: 'Crianças'
    },
    {
      nome: 'Varicela',
      idade: '15 meses',
      protege: 'Catapora',
      doses: '1 dose',
      categoria: 'Crianças'
    },
    {
      nome: 'dTpa',
      idade: 'Gestantes e adultos',
      protege: 'Difteria, tétano e coqueluche',
      doses: '1 dose (gestantes) / reforço a cada 10 anos',
      categoria: 'Adultos'
    }
  ];

  const fakeNews = [
    {
      mito: 'Vacinas causam autismo',
      verdade: 'FALSO! Não existe nenhuma relação entre vacinas e autismo. Este mito foi baseado em um estudo fraudulento de 1998 que foi completamente desacreditado e retirado da literatura científica.',
      status: 'false'
    },
    {
      mito: 'É melhor ter imunidade natural do que pela vacina',
      verdade: 'FALSO! As doenças podem causar complicações graves e até morte. As vacinas oferecem proteção segura sem os riscos da doença.',
      status: 'false'
    },
    {
      mito: 'Vacinas contêm microchips ou podem alterar o DNA',
      verdade: 'FALSO! Vacinas não contêm microchips nem podem alterar DNA humano. Elas contêm antígenos que estimulam o sistema imunológico.',
      status: 'false'
    },
    {
      mito: 'Se a doença foi erradicada, não preciso me vacinar',
      verdade: 'FALSO! A vacinação é o que mantém doenças erradicadas. Se pararmos de vacinar, doenças podem voltar, como aconteceu com o sarampo em vários países.',
      status: 'false'
    },
    {
      mito: 'Vacinas sobrecarregam o sistema imunológico',
      verdade: 'FALSO! O sistema imunológico pode lidar com milhares de antígenos simultaneamente. As vacinas representam uma fração mínima disso.',
      status: 'false'
    },
    {
      mito: 'Efeitos colaterais das vacinas são perigosos',
      verdade: 'PARCIALMENTE FALSO! Efeitos colaterais graves são extremamente raros. A maioria das reações é leve (dor local, febre baixa) e desaparece rapidamente.',
      status: 'partial'
    },
    {
      mito: 'Grávidas não podem tomar vacina',
      verdade: 'PARCIALMENTE FALSO! Algumas vacinas são recomendadas na gravidez (dTpa, Influenza, COVID-19). Outras são contraindicadas. Sempre consulte seu médico.',
      status: 'partial'
    },
    {
      mito: 'Vacinas são testadas antes de serem aprovadas',
      verdade: 'VERDADEIRO! Todas as vacinas passam por rigorosos testes de segurança em múltiplas fases antes de serem aprovadas pela ANVISA.',
      status: 'true'
    }
  ];

  const informacoes = [
    {
      titulo: 'O que é uma vacina?',
      conteudo: 'Vacinas são preparações biológicas que contêm antígenos (partes inativadas ou enfraquecidas de vírus/bactérias) que estimulam o sistema imunológico a produzir anticorpos, criando proteção contra doenças.',
      icon: Syringe
    },
    {
      titulo: 'Como funcionam?',
      conteudo: 'Quando você se vacina, seu corpo reconhece o antígeno como invasor e produz anticorpos. Se entrar em contato com o patógeno real, seu sistema imunológico já sabe como combatê-lo rapidamente.',
      icon: Shield
    },
    {
      titulo: 'Tipos de vacinas',
      conteudo: 'Existem vários tipos: inativadas (vírus/bactéria mortos), atenuadas (enfraquecidos), subunitárias (partes do patógeno), toxoides e de mRNA (como algumas da COVID-19).',
      icon: BookOpen
    },
    {
      titulo: 'Segurança',
      conteudo: 'As vacinas são um dos produtos mais seguros da medicina moderna. Passam por anos de testes antes da aprovação e são constantemente monitoradas após a aplicação.',
      icon: CheckCircle
    },
    {
      titulo: 'Imunidade de rebanho',
      conteudo: 'Quando uma alta porcentagem da população está vacinada, a circulação do patógeno é reduzida, protegendo indiretamente pessoas que não podem se vacinar.',
      icon: Users
    },
    {
      titulo: 'História do PNI',
      conteudo: 'O Programa Nacional de Imunizações foi criado em 1973 e é referência mundial. O Brasil oferece gratuitamente mais de 300 milhões de doses anuais em cerca de 38 mil salas de vacinação.',
      icon: Award
    }
  ];

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  const faqs = [
    {
      pergunta: 'Onde posso me vacinar?',
      resposta: 'As vacinas estão disponíveis gratuitamente em todas as Unidades Básicas de Saúde (UBS) do SUS. Você pode procurar a unidade mais próxima da sua casa levando um documento de identidade e a carteira de vacinação.'
    },
    {
      pergunta: 'Preciso pagar para me vacinar?',
      resposta: 'Não! Todas as vacinas do Calendário Nacional de Vacinação são gratuitas e disponibilizadas pelo Sistema Único de Saúde (SUS) em todo o território nacional.'
    },
    {
      pergunta: 'O que levar no dia da vacinação?',
      resposta: 'Leve documento de identificação com foto, CPF ou Cartão SUS, e a carteira de vacinação. Se não tiver a carteira, será fornecida uma nova no posto de saúde.'
    },
    {
      pergunta: 'As vacinas são seguras?',
      resposta: 'Sim! Todas as vacinas disponibilizadas no Brasil passam por rigorosos testes de segurança e eficácia pela ANVISA. Os benefícios da vacinação superam amplamente os riscos de possíveis reações adversas, que geralmente são leves.'
    },
    {
      pergunta: 'Posso tomar mais de uma vacina no mesmo dia?',
      resposta: 'Na maioria dos casos, sim. As vacinas podem ser aplicadas no mesmo dia em locais diferentes do corpo. Consulte o profissional de saúde para orientações específicas.'
    },
    {
      pergunta: 'Esqueci de tomar uma dose. O que fazer?',
      resposta: 'Procure uma unidade de saúde o quanto antes. É possível retomar o calendário vacinal de onde parou, não sendo necessário reiniciar o esquema na maioria dos casos.'
    }
  ];

  const stats = [
    { icon: Shield, valor: '300 milhões', label: 'Doses aplicadas/ano', color: 'emerald' },
    { icon: Users, valor: '20+', label: 'Vacinas disponíveis', color: 'green' },
    { icon: MapPin, valor: '38 mil', label: 'Salas de vacinação', color: 'teal' },
    { icon: Award, valor: '50 anos', label: 'Programa Nacional', color: 'lime' }
  ];

  const navegacao = [
    { id: 'inicio', label: 'Início', icon: Heart },
    { id: 'calendario', label: 'Calendário', icon: Calendar },
    { id: 'locais', label: 'Onde Vacinar', icon: MapPin },
    { id: 'informacoes', label: 'Informações', icon: BookOpen },
    { id: 'fakenews', label: 'Fake News', icon: AlertTriangle },
    { id: 'faq', label: 'FAQ', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2.5 rounded-xl shadow-lg">
                <Syringe className="text-white w-7 h-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  VacinaBrasil
                </h1>
                <p className="text-xs text-gray-600 font-medium">Protegendo vidas 💚</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navegacao.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-emerald-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-600" /> : <Menu className="w-6 h-6 text-emerald-600" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              {navegacao.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === 'inicio' && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <div className="text-center">
              <div className="inline-block mb-4">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Proteção para todos os brasileiros
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Vacinação{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Salva Vidas
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                O Programa Nacional de Imunizações oferece gratuitamente todas as vacinas 
                recomendadas pela Organização Mundial da Saúde. Proteja-se e proteja sua família.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveSection('calendario')}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Ver Calendário Completo
                </button>
                <button
                  onClick={() => setActiveSection('locais')}
                  className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Encontrar Posto Próximo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <div className={`bg-gradient-to-br from-emerald-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.valor}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calendário de Vacinação */}
      {activeSection === 'calendario' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-2xl mb-4 shadow-lg">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Calendário Nacional de Vacinação
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Confira todas as vacinas disponíveis no SUS e mantenha sua carteira de vacinação em dia
              </p>
            </div>

            {/* Filtro por categoria */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {['Todos', 'Crianças', 'Adolescentes', 'Adultos'].map(cat => (
                <button
                  key={cat}
                  className="px-6 py-2 rounded-full bg-white border-2 border-emerald-500 text-emerald-700 font-medium hover:bg-emerald-500 hover:text-white transition-all shadow-md"
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vacinas.map((vacina, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-t-4 border-emerald-500">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{vacina.nome}</h3>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {vacina.categoria}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-700">Idade recomendada</div>
                        <div className="text-sm text-gray-600">{vacina.idade}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-700">Protege contra</div>
                        <div className="text-sm text-gray-600">{vacina.protege}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Syringe className="w-5 h-5 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-700">Esquema vacinal</div>
                        <div className="text-sm text-gray-600">{vacina.doses}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-600 rounded-xl p-6 shadow-lg">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Importante!</h3>
                  <p className="text-gray-700">
                    Este é um resumo do calendário nacional. Consulte sempre um profissional de saúde 
                    para orientações personalizadas e verifique a carteira de vacinação regularmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Locais de Vacinação */}
      {activeSection === 'locais' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-2xl mb-4 shadow-lg">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Onde se Vacinar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Encontre o posto de vacinação mais próximo de você
              </p>
            </div>

            {/* Busca por CEP */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Buscar por localização</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Digite seu CEP
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="00000-000"
                        value={searchCep}
                        onChange={(e) => setSearchCep(e.target.value)}
                        className="flex-1 px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-gray-900 placeholder-gray-400"
                      />
                      <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                        <Search className="w-5 h-5" />
                        Buscar
                      </button>
                    </div>
                  </div>

                  <div className="text-center text-gray-500">ou</div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Selecione seu estado
                    </label>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors bg-white text-gray-900 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-900">Escolha um estado...</option>
                      {estados.map(estado => (
                        <option key={estado} value={estado} className="text-gray-900">{estado}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações sobre vacinação */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Hospital className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Unidades Básicas de Saúde</h3>
                <p className="text-gray-600 text-sm">
                  Todas as UBS oferecem vacinas gratuitamente. Procure a mais próxima de você.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                <p className="text-gray-600 text-sm">
                  Geralmente das 8h às 17h, de segunda a sexta. Alguns postos funcionam aos sábados.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">O que levar</h3>
                <p className="text-gray-600 text-sm">
                  Documento com foto, CPF ou Cartão SUS e carteira de vacinação (se tiver).
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Disque Saúde 136</h3>
              <p className="text-emerald-50">
                Ligue gratuitamente para obter informações sobre postos de vacinação na sua região
              </p>
              <p className="text-sm text-emerald-100 mt-2">Atendimento 24 horas, todos os dias</p>
            </div>
          </div>
        </section>
      )}

      {/* Informações */}
      {activeSection === 'informacoes' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-2xl mb-4 shadow-lg">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Informações sobre Vacinação
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Entenda como as vacinas funcionam e sua importância para a saúde pública
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {informacoes.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{info.conteudo}</p>
                </div>
              ))}
            </div>

            {/* Seção de Benefícios */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8" />
                  Proteção Individual
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Previne doenças graves e suas complicações que podem ser fatais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Reduz hospitalizações e custos com tratamentos médicos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Aumenta a expectativa e qualidade de vida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Protege em todas as fases da vida, da infância à terceira idade</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  Proteção Coletiva
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Cria imunidade de rebanho protegendo toda a comunidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Protege pessoas que não podem se vacinar (imunodeprimidos, bebês)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Evita surtos, epidemias e pandemias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Contribui para erradicação de doenças no mundo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conquistas */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-emerald-600" />
                Conquistas da Vacinação no Brasil
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">1973</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Varíola Erradicada</h4>
                  <p className="text-gray-600 text-sm">Último caso de varíola registrado no Brasil</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">1989</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Poliomielite Eliminada</h4>
                  <p className="text-gray-600 text-sm">Último caso de paralisia infantil no país</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">2016</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Sarampo Eliminado</h4>
                  <p className="text-gray-600 text-sm">Brasil recebeu certificado de eliminação da OMS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fake News */}
      {activeSection === 'fakenews' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-2xl mb-4 shadow-lg">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Combatendo a Desinformação
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Veja o que é mito e o que é verdade sobre as vacinas. Informação de qualidade salva vidas!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {fakeNews.map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 ${
                    item.status === 'false' ? 'border-red-500' : 
                    item.status === 'true' ? 'border-green-500' : 'border-yellow-500'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    {item.status === 'false' && (
                      <div className="bg-red-100 p-3 rounded-xl">
                        <XCircle className="w-6 h-6 text-red-600" />
                      </div>
                    )}
                    {item.status === 'true' && (
                      <div className="bg-green-100 p-3 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    )}
                    {item.status === 'partial' && (
                      <div className="bg-yellow-100 p-3 rounded-xl">
                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.mito}</h3>
                    </div>
                  </div>
                  <div className="ml-16">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                      item.status === 'false' ? 'bg-red-100 text-red-700' :
                      item.status === 'true' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.verdade.split('!')[0]}!
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.verdade.split('! ')[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-xl">Desconfie de informações sem fonte!</h3>
                  <p className="text-gray-700 mb-4">
                    Antes de compartilhar informações sobre vacinas, verifique se a fonte é confiável. 
                    Desinformação pode colocar vidas em risco.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow">
                      ✅ Ministério da Saúde
                    </span>
                    <span className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow">
                      ✅ ANVISA
                    </span>
                    <span className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow">
                      ✅ Fiocruz
                    </span>
                    <span className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow">
                      ✅ OMS
                    </span>
                    <span className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow">
                      ✅ Sociedades médicas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {activeSection === 'faq' && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-2xl mb-4 shadow-lg">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-gray-600">
                Tire suas dúvidas sobre vacinação
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-emerald-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.pergunta}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-emerald-600 transition-transform flex-shrink-0 ${
                        activeFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-5 text-gray-700 border-t border-emerald-100 pt-4 bg-emerald-50/30">
                      {faq.resposta}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-2">Ainda tem dúvidas?</h3>
              <p className="text-emerald-50 mb-4">
                Procure a Unidade Básica de Saúde mais próxima ou ligue para o Disque Saúde
              </p>
              <div className="text-4xl font-bold">136</div>
              <p className="text-sm text-emerald-100 mt-2">Atendimento gratuito 24h</p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2.5 rounded-xl shadow-lg">
                  <Syringe className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">VacinaBrasil</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Informações sobre o Programa Nacional de Imunizações do Ministério da Saúde do Brasil.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Navegação</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">Início</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">Calendário</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">Onde Vacinar</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Links Úteis</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">Ministério da Saúde</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">ANVISA</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">Fiocruz</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">Instituto Butantan</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  Disque Saúde: 136
                </li>
                <li>Disponível 24h</li>
                <li>Atendimento gratuito</li>
                <li className="pt-2">
                  <span className="text-emerald-400">📱</span> Baixe o app ConecteSUS
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 VacinaBrasil - Todos os direitos reservados
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Site educativo e informativo sobre vacinação no Brasil • As informações aqui contidas não substituem orientação médica
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}