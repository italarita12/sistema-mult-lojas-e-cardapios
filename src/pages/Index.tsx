import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  Menu, 
  CreditCard, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Smartphone, 
  Palette, 
  MessageSquare, 
  Shield, 
  TrendingUp, 
  Clock,
  CheckCircle2,
  Star,
  Zap,
  Globe,
  Eye,
  Lock,
  ArrowRight,
  AlertTriangle,
  Rocket,
  DollarSign,
  Settings,
  Target,
  Check,
  ExternalLink,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Package,
  Headphones,
  Monitor,
  Upload,
  Wifi,
  Heart,
  Home,
  ShoppingBag
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Top Demo Button */}
      <div className="fixed top-4 right-4 z-50">
        <a href="#demo" className="inline-block">
          <Button 
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-purple-500/25 rounded-full font-medium"
          >
            <Eye className="mr-2 w-4 h-4" />
            Ver Demonstração
          </Button>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 text-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22hsl(262%2C83%25%2C58%25)%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="block text-gray-900">Seu Próprio Sistema de</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">Lojas e Cardápios Online</span>
              <span className="block text-gray-900">Gerando</span>
              <span className="block text-emerald-600 text-4xl md:text-6xl">R$ 300 por Dia</span>
            </h1>
            
            <div className="w-full mb-8">
              <div className="max-w-xl mx-auto">
                <div style={{padding:"120% 0 0 0", position:"relative"}}>
                  <iframe 
                    src="https://player.vimeo.com/video/1113066019?badge=0&autopause=0&player_id=0&app_id=58479" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                    title="Sistema_de_Lojas_e_Cardápios_Online_-_Gere_R$_300_por_Dia"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <a href="#ofertas" className="inline-block">
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-2xl hover:shadow-orange-500/25 px-12 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  QUERO MINHA PLATAFORMA AGORA
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="bg-gradient-to-br from-white/50 to-purple-50/50 border border-purple-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-8 flex-wrap">
                    <div className="flex flex-col items-center gap-4">
                      <Store className="w-16 h-16 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-700">Lojas Online</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <Menu className="w-16 h-16 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-700">Cardápios Digitais</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <Smartphone className="w-16 h-16 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-700">WhatsApp Integrado</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <BarChart3 className="w-16 h-16 text-orange-600" />
                      <span className="text-sm font-semibold text-orange-700">Relatórios</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">Crie lojas online ou cardapio digital</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">Cobre mensalidades recorrentes de cada lojista</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">Plataforma 100% sua, com sua marca e domínio</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">Lojistas recebem pedidos direto no WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">Clientes ilimitados, lucro 100% no seu bolso</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-700">Instalação simples</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-600 text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              <span className="font-bold">Sistema em Funcionamento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veja Como Funciona na Prática
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Acesse a demonstração e veja o sistema funcionando na prática
            </p>
          </div>
          
          <Card className="bg-white border-2 border-purple-200 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-xl mb-6">
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="bg-white p-3 rounded-full shadow-md">
                      <Lock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="bg-white p-3 rounded-full shadow-md">
                      <Monitor className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="bg-white p-3 rounded-full shadow-md">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Credenciais de Acesso</h3>
                  <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm font-medium text-gray-600 mb-1">E-mail:</p>
                      <p className="text-lg font-bold text-gray-900 select-all">1@gmail.com</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm font-medium text-gray-600 mb-1">Senha:</p>
                      <p className="text-lg font-bold text-gray-900 select-all">12345678</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://neolojas.online/login/', '_blank')}
                >
                  <Eye className="mr-2 w-5 h-5" />
                  Ver como funciona Agora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 border border-red-200 text-red-600 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="font-bold">O Problema</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Milhões de Lojistas Perdendo Vendas Todos os Dias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enquanto o mundo se digitaliza, muitos negócios locais ficam para trás
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Milhões de lojistas locais ainda não vendem online",
                subtitle: "Perdem oportunidades de vendas todos os dias"
              },
              {
                title: "Perdem vendas todos os dias sem ter uma loja digital",
                subtitle: "Clientes procuram online e não encontram"
              },
              {
                title: "Altos custos e plataformas complicadas",
                subtitle: "Quando tentam criar um site, esbarram em dificuldades"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-red-500 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              <span className="font-bold">A Solução</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Com o Sistema Lojas e Cardapio, Você Vira o Dono da Plataforma
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Palette,
                title: "Coloque sua marca e logotipo",
                subtitle: "Sistema 100% personalizado com sua identidade"
              },
              {
                icon: Zap,
                title: "Crie e venda Lojas em poucos minutos",
                subtitle: "Processo rápido e simples de criação"
              },
              {
                icon: DollarSign,
                title: "Cobre mensalidades e tenha renda recorrente",
                subtitle: "Modelo de negócio sustentável e escalável"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-emerald-500 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Como funciona na prática
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Settings, text: "Você instala o sistema (passo a passo em vídeo)." },
                  { icon: DollarSign, text: "Cria planos (mensal, trimestral, anual) e define preços." },
                  { icon: Store, text: "Voce ou Seu Cliente Cria a loja (em minutos) e ja recebe o acesso." },
                  { icon: Smartphone, text: "O lojista cadastra produtos, fotos, preços e recebe pedidos no WhatsApp." },
                  { icon: TrendingUp, text: "Você fatura todo mês sem precisar programar." }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <step.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a href="#ofertas" className="inline-block">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-bold rounded-full"
                  >
                    QUERO COMEÇAR AGORA
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-600 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              <span className="font-bold">💰 Modelo de Lucro</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Renda Recorrente Garantida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Veja quanto você pode faturar com diferentes modelos de cobrança
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "📅",
                title: "Projeção Mensal",
                price: "R$49 a R$99 por cliente",
                clients: "20 clientes ativos",
                revenue: "R$980 até R$1.980",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "📈",
                title: "Projeção Trimestral", 
                price: "R$150 a R$250 por cliente",
                clients: "20 clientes ativos",
                revenue: "R$3.000 até R$5.000",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "🎯",
                title: "Projeção Anual",
                price: "R$600 a R$900 por cliente", 
                clients: "20 clientes ativos",
                revenue: "R$12.000 até R$18.000",
                color: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <div className="space-y-4 mb-6">
                    <p className="text-lg font-semibold text-gray-700">Mensalidade: {item.price}</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 mb-2">Exemplo com</p>
                      <p className="text-xl font-bold text-blue-600">{item.clients}</p>
                    </div>
                    <div className={`bg-gradient-to-r ${item.color} text-white rounded-lg p-4`}>
                      <p className="text-sm opacity-90 mb-1">Receita de:</p>
                      <p className="text-2xl font-bold">{item.revenue}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 border border-green-200 text-green-800 font-bold">
              <TrendingUp className="w-5 h-5 mr-2" />
              E o melhor: 100% do lucro é seu!
            </div>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                🛒 Por que os lojistas contratam?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>Loja digital simples e rápida de usar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>Pedidos automáticos no WhatsApp</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>Investimento baixo (menos de R$2/dia)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>Mercado em crescimento: lojas locais precisam se digitalizar</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="#ofertas" className="inline-block">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-bold rounded-full"
                  >
                    QUERO COMEÇAR A FATURAR
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-600 text-sm font-medium mb-6">
              <Settings className="w-4 h-4 mr-2" />
              <span className="font-bold">⚙️ Funcionalidades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sistema Completo Para Você e Seus Clientes
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Para Você (Administrador):
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "🏪", title: "Criar lojas ilimitadas", subtitle: "Sem limite de clientes ou lojas" },
                  { icon: "💵", title: "Definir planos e preços", subtitle: "Controle total sobre precificação" },
                  { icon: "📊", title: "Painel com relatórios e assinaturas", subtitle: "Acompanhe performance e receita" },
                  { icon: "👥", title: "Gestão total dos clientes", subtitle: "Controle completo da base de clientes" }
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Para o Lojista (seu cliente):
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "📦", title: "Cadastro de produtos, fotos e banners", subtitle: "Interface simples para gerenciar catálogo" },
                  { icon: "📲", title: "Pedidos automáticos via WhatsApp", subtitle: "Integração direta com WhatsApp" },
                  { icon: "📈", title: "Relatórios de vendas", subtitle: "Acompanhe performance das vendas" },
                  { icon: "🎨", title: "Layout personalizável", subtitle: "Customize aparência da loja" }
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <Card className="mt-16 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                🔗 Integrações Incluídas
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">💳</div>
                  <p className="font-semibold">Pix, Mercado Pago</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">💰</div>
                  <p className="font-semibold">Marketplaces, Sistema de PDV integrado</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="font-semibold">Sistema de Live-Action, Sacolinha instagram</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Niches Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              <span className="font-bold">🔥 Nichos Atendidos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Atenda Diversos Segmentos de Mercado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 20 tipos de negócios podem usar seu sistema
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  "🍕 Restaurantes e pizzarias",
                  "🍔 Hamburguerias e lanchonetes", 
                  "👗 Lojas de roupas e calçados",
                  "🐾 Pet shops",
                  "💄 Cosméticos e beleza",
                  "📦 Mercados, açougues, farmácias",
                  "🏪 Mais de 20 segmentos diferentes!"
                ].map((niche, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg">{niche}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a href="#ofertas" className="inline-block">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-bold rounded-full"
                  >
                    QUERO ATENDER TODOS ESSES NICHOS
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ofertas" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                OFERTA ESPECIAL
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-medium mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    <span className="font-bold">🧑‍💻 O Que Você Vai Receber</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Sistema Completo</h3>
                  <div className="mb-2">
                    <span className="text-2xl text-gray-400 line-through">De R$ 1.990</span>
                    <span className="text-xl text-gray-600 ml-2">por apenas</span>
                  </div>
                  <div className="text-6xl font-bold text-blue-600 mb-2">R$297</div>
                  <p className="text-gray-600">Pagamento único - Acesso vitalício</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Código fonte 100% seu (personalize como quiser)",
                    "Painel administrativo para criar e gerenciar lojas",
                    "Suporte técnico dedicado", 
                    "Vídeo aulas passo a passo",
                    "Acesso vitalício",
                    "Clientes ilimitados"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center" id="ofertas">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://gestor.click/views/dados_pessoais.php?produto_id=31', '_blank')}
                  >
                    QUERO MINHA PLATAFORMA AGORA — R$297
                    <ShoppingCart className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-16 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                🔓 Benefícios Exclusivos
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">🌐</span>
                    <span>Sua marca, seu domínio, seus clientes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">♾️</span>
                    <span>Crie clientes ilimitados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">🚀</span>
                    <span>Negócio escalável e recorrente</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">📲</span>
                    <span>Funciona em qualquer dispositivo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">💯</span>
                    <span>100% de lucro no seu bolso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">🔒</span>
                    <span>Pague uma vez, tenha para sempre</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Support Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-600 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="font-bold">💬 Suporte</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Suporte Completo Incluído
            </h2>
            <p className="text-xl text-gray-600">
              Não deixamos você na mão! Temos suporte técnico dedicado.
            </p>
          </div>
          
          <div className="text-center">
            <a href="#ofertas" className="inline-block">
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300"
              >
                GARANTIR MINHA VAGA AGORA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
