import React, { useEffect, useState } from "react";
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
  ShoppingBag,
  Quote
} from "lucide-react";

// Import testimonial images
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário Digital",
    image: testimonial1,
    text: "Em 3 meses já estava ganhando R$ 2.500 por mês com minha plataforma. Os clientes amam a facilidade!"
  },
  {
    name: "Maria Santos",
    role: "Empreendedora",
    image: testimonial2,
    text: "Consegui 15 lojistas no primeiro mês. A renda recorrente transformou meu negócio completamente."
  },
  {
    name: "João Oliveira",
    role: "Desenvolvedor",
    image: testimonial3,
    text: "Sistema incrível! Fácil de instalar e os clientes ficam impressionados com a qualidade."
  },
  {
    name: "Ana Costa",
    role: "Consultora",
    image: testimonial4,
    text: "Melhor investimento que já fiz. Em 6 meses já tinha recuperado o valor e muito mais!"
  }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Fixed Top Demo Button */}
      <div className="fixed top-4 right-4 z-50">
        <a href="#demo" className="inline-block">
          <Button 
            size="sm"
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg glow-effect rounded-full font-medium font-orbitron"
          >
            <Eye className="mr-2 w-4 h-4" />
            Ver Demonstração
          </Button>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative text-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-cyan/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 font-exo">
              <span className="block text-foreground">Seu Próprio Sistema de</span>
              <span className="block text-cyber bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap font-orbitron">Lojas e Cardápios Online</span>
              <span className="block text-foreground">Gerando</span>
              <span className="block text-neon text-4xl md:text-6xl font-orbitron animate-glow">R$ 250 por Dia</span>
            </h1>
            
            <div className="w-full mb-8">
              <div className="max-w-xl mx-auto">
                <div style={{padding:"100% 0 0 0", position:"relative"}} className="rounded-2xl overflow-hidden glow-effect">
                  <iframe 
                    src="https://player.vimeo.com/video/1113066019?badge=0&autopause=0&player_id=0&app_id=58479" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                    title="Sistema_de_Lojas_e_Cardápios_Online_-_Gere_R$_250_por_Dia"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <Button 
                onClick={scrollToOffer}
                className="bg-gradient-to-r from-accent to-pink hover:from-pink hover:to-accent text-white shadow-2xl glow-effect px-12 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 font-orbitron animate-pulse-neon"
              >
                QUERO MINHA PLATAFORMA AGORA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 shadow-xl glow-effect">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-8 flex-wrap">
                    <div className="flex flex-col items-center gap-4 animate-float">
                      <Store className="w-16 h-16 text-primary" />
                      <span className="text-sm font-semibold text-primary font-orbitron">Lojas Online</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 animate-float" style={{animationDelay: '0.5s'}}>
                      <Menu className="w-16 h-16 text-accent" />
                      <span className="text-sm font-semibold text-accent font-orbitron">Cardápios Digitais</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 animate-float" style={{animationDelay: '1s'}}>
                      <Smartphone className="w-16 h-16 text-cyan" />
                      <span className="text-sm font-semibold text-cyan font-orbitron">WhatsApp Integrado</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 animate-float" style={{animationDelay: '1.5s'}}>
                      <BarChart3 className="w-16 h-16 text-pink" />
                      <span className="text-sm font-semibold text-pink font-orbitron">Relatórios</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan" />
                <span className="text-foreground">Crie lojas online ou cardapio digital</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan" />
                <span className="text-foreground">Cobre mensalidades recorrentes de cada lojista</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan" />
                <span className="text-foreground">Plataforma 100% sua, com sua marca e domínio</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan" />
                <span className="text-foreground">Lojistas recebem pedidos direto no WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan" />
                <span className="text-foreground">Clientes ilimitados, lucro 100% no seu bolso</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan" />
                <span className="text-foreground">Instalação simples</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-card/30 to-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              <span className="font-bold font-orbitron">Depoimentos Reais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
              Veja o Que Nossos Clientes Dizem
            </h2>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20 glow-effect">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8">
                  <Card className="bg-card/50 backdrop-blur-sm border border-accent/20 max-w-2xl mx-auto">
                    <CardContent className="p-8 text-center">
                      <Quote className="w-12 h-12 text-accent mx-auto mb-6" />
                      <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-primary glow-effect"
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-foreground font-orbitron">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-primary glow-effect' 
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-secondary/30 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              <span className="font-bold font-orbitron">Sistema em Funcionamento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
              Veja Como Funciona na Prática
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Acesse a demonstração e veja o sistema funcionando na prática
            </p>
          </div>
          
          <Card className="bg-card/30 backdrop-blur-sm border border-primary/20 shadow-xl glow-effect">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-card/50 to-secondary/30 p-6 rounded-xl mb-6 border border-accent/20">
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="bg-card/50 p-3 rounded-full shadow-md border border-primary/20 glow-effect">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="bg-card/50 p-3 rounded-full shadow-md border border-accent/20 glow-effect">
                      <Monitor className="w-6 h-6 text-accent" />
                    </div>
                    <div className="bg-card/50 p-3 rounded-full shadow-md border border-cyan/20 glow-effect">
                      <Globe className="w-6 h-6 text-cyan" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-orbitron">Credenciais de Acesso</h3>
                  <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
                    <div className="bg-card/50 p-4 rounded-lg border border-primary/20 glow-effect">
                      <p className="text-sm font-medium text-muted-foreground mb-1">E-mail:</p>
                      <p className="text-lg font-bold text-primary select-all font-orbitron">1@gmail.com</p>
                    </div>
                    <div className="bg-card/50 p-4 rounded-lg border border-accent/20 glow-effect">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Senha:</p>
                      <p className="text-lg font-bold text-accent select-all font-orbitron">12345678</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300 glow-effect font-orbitron"
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
      <section className="py-20 bg-gradient-to-br from-destructive/10 to-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 text-destructive text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="font-bold font-orbitron">O Problema</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
              Milhões de Lojistas Perdendo Vendas Todos os Dias
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-destructive/20 bg-card/30 backdrop-blur-sm glow-effect">
                <CardContent className="p-8 text-center">
                  <div className="bg-destructive/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-destructive/30">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4 font-orbitron">{item.title}</h3>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-cyan/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan/20 border border-cyan/30 text-cyan text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              <span className="font-bold font-orbitron">A Solução</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
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
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-cyan/20 bg-card/30 backdrop-blur-sm glow-effect">
                <CardContent className="p-8 text-center">
                  <div className="bg-cyan/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-cyan/30">
                    <item.icon className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4 font-orbitron">{item.title}</h3>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="max-w-4xl mx-auto bg-card/30 backdrop-blur-sm border border-primary/20 glow-effect">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-orbitron">
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
                  <div key={index} className="flex items-center gap-4 p-4 bg-cyan/10 rounded-lg border border-cyan/20">
                    <div className="bg-cyan/20 p-2 rounded-full border border-cyan/30">
                      <step.icon className="w-5 h-5 text-cyan" />
                    </div>
                    <span className="text-foreground font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button 
                  onClick={scrollToOffer}
                  className="bg-gradient-to-r from-accent to-pink hover:from-pink hover:to-accent text-white px-8 py-4 text-lg font-bold rounded-full glow-effect font-orbitron"
                >
                  QUERO COMEÇAR AGORA
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-20 bg-gradient-to-br from-pink/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink/20 border border-pink/30 text-pink text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              <span className="font-bold font-orbitron">💰 Modelo de Lucro</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
              Renda Recorrente Garantida
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
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
                color: "from-primary to-accent"
              },
              {
                icon: "📈",
                title: "Projeção Trimestral",
                price: "R$129 a R$249 por cliente",
                clients: "15 clientes ativos",
                revenue: "R$1.935 até R$3.735",
                color: "from-accent to-pink"
              },
              {
                icon: "🚀",
                title: "Projeção Anual",
                price: "R$399 a R$799 por cliente",
                clients: "10 clientes ativos",
                revenue: "R$3.990 até R$7.990",
                color: "from-pink to-cyan"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/30 backdrop-blur-sm border border-primary/20 glow-effect">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-orbitron">{item.title}</h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-muted-foreground">{item.price}</p>
                    <p className="text-sm text-muted-foreground">{item.clients}</p>
                    <div className={`bg-gradient-to-r ${item.color} text-white p-3 rounded-lg font-bold text-lg font-orbitron`}>
                      {item.revenue}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-accent to-pink hover:from-pink hover:to-accent text-white px-12 py-4 text-xl font-bold rounded-full glow-effect font-orbitron animate-pulse-neon"
            >
              QUERO FATURAR AGORA
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-card/30 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="font-bold font-orbitron">Recursos Completos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
              Tudo Que Você Precisa em Uma Só Plataforma
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Store, title: "Lojas Ilimitadas", desc: "Crie quantas lojas quiser" },
              { icon: Menu, title: "Cardápios Digitais", desc: "Sistema completo de delivery" },
              { icon: Smartphone, title: "WhatsApp Integrado", desc: "Pedidos direto no WhatsApp" },
              { icon: CreditCard, title: "Pagamentos Online", desc: "PIX, cartão e boleto" },
              { icon: BarChart3, title: "Relatórios Completos", desc: "Acompanhe todas as vendas" },
              { icon: Users, title: "Gestão de Clientes", desc: "Base de dados completa" },
              { icon: Palette, title: "Personalização Total", desc: "Sua marca em destaque" },
              { icon: Shield, title: "Sistema Seguro", desc: "Proteção total dos dados" },
              { icon: Globe, title: "Domínio Próprio", desc: "Seu próprio endereço web" },
              { icon: Headphones, title: "Suporte Técnico", desc: "Ajuda quando precisar" },
              { icon: Upload, title: "Backup Automático", desc: "Seus dados sempre seguros" },
              { icon: Wifi, title: "Sistema Online", desc: "Acesse de qualquer lugar" }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/30 backdrop-blur-sm border border-primary/20 glow-effect">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-primary/30">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 font-orbitron">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section id="ofertas" className="py-20 bg-gradient-to-br from-accent/20 to-pink/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            <span className="font-bold font-orbitron">🔥 OFERTA ESPECIAL</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-orbitron">
            Garanta Seu Sistema Agora
          </h2>
          
          <Card className="bg-card/30 backdrop-blur-sm border border-accent/20 shadow-2xl mb-8 glow-effect">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground line-through">De R$ 1.990</span>
                  <div className="text-6xl font-bold text-neon mb-2 font-orbitron animate-glow">R$ 297</div>
                  <p className="text-muted-foreground">Pagamento único - Acesso vitalício</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                  {[
                    "✅ Sistema completo de lojas e cardápios",
                    "✅ Instalação passo-a-passo em vídeo",
                    "✅ Suporte técnico por 6 meses",
                    "✅ Atualizações gratuitas",
                    "✅ Integração com WhatsApp",
                    "✅ Relatórios e analytics",
                    "✅ Personalização da marca",
                    "✅ Sem limites de lojas ou produtos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-cyan">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-accent to-pink hover:from-pink hover:to-accent text-white py-6 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 glow-effect font-orbitron animate-pulse-neon"
                  onClick={() => window.open('https://gestor.click/views/dados_pessoais.php?produto_id=31', '_blank')}
                >
                  🚀 QUERO MINHA PLATAFORMA AGORA — R$297
                </Button>
                
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Preciso ter conhecimento técnico para usar?",
                answer: "Não! O sistema foi desenvolvido para ser simples e intuitivo. Incluímos vídeos passo-a-passo para instalação e uso."
              },
              {
                question: "Quantas lojas posso criar?",
                answer: "Ilimitadas! Não há restrição no número de lojas ou produtos que você pode criar."
              },
              {
                question: "Como funciona a integração com WhatsApp?",
                answer: "Os pedidos são enviados automaticamente para o WhatsApp do lojista, facilitando o atendimento e confirmação."
              },
              {
                question: "Posso personalizar com minha marca?",
                answer: "Sim! Você pode colocar sua logo, cores, domínio próprio e deixar tudo com a cara da sua empresa."
              },
              {
                question: "Há garantia?",
                answer: "Sim! Oferecemos 7 dias de garantia. Se não ficar satisfeito, devolvemos seu dinheiro."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border border-primary/20 glow-effect">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3 font-orbitron">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-pink/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-orbitron">
            Não Perca Esta Oportunidade!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Comece hoje mesmo a construir seu império digital
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-accent to-pink hover:from-pink hover:to-accent text-white px-12 py-6 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 glow-effect font-orbitron animate-pulse-neon"
            onClick={() => window.open('https://gestor.click/views/dados_pessoais.php?produto_id=31', '_blank')}
          >
            🚀 GARANTIR MINHA PLATAFORMA AGORA
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;