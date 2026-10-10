"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Activity, Heart, Clock, Phone, MapPin, Syringe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Pain Points */}
      <PainPoints />

      {/* Methodology */}
      <Methodology />

      {/* Services & Combos */}
      <ServicesCombos />

      {/* About Me */}
      <AboutMe />

      {/* Social Proof */}
      <SocialProof />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full pt-16 pb-20 md:pt-20 md:pb-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

        {/* Lado Esquerdo: Textos */}
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium text-sm mb-6 animate-fade-in backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>+ de 2.000 pacientes transformados | Especialista em Análogos de GLP-1</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
            Emagrecimento Estratégico e Seguro: Conquiste o seu peso ideal sem perder massa muscular e sem o efeito sanfona.
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl">
            Acompanhamento clínico especializado para quem busca emagrecimento avançado e manejo seguro de análogos de GLP-1. O cuidado integrado da Nutrição e da Enfermagem ao seu favor.
          </p>

          <a href="https://wa.me/5585999668826?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20estrat%C3%A9gica." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-600/20">
            Agendar minha avaliação estratégica
            <Activity className="w-5 h-5" />
          </a>
        </div>

        {/* Lado Direito: Foto com Efeitos Premium (Borda Animada) */}
        <div className="flex-1 w-full max-w-xl lg:max-w-2xl relative group md:-translate-y-8 lg:-translate-y-12 mt-12 md:mt-0">

          {/* Nome Flutuante */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 px-6 py-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/40 dark:border-zinc-700/50 shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-900 dark:text-white font-semibold text-sm tracking-wide whitespace-nowrap">Dra. Eclesyrlanya Alves</span>
          </div>

          {/* Container principal (fundo e borda externa) */}
          <div className="aspect-video rounded-3xl relative shadow-2xl shadow-emerald-900/20 transition-all duration-500 group-hover:shadow-emerald-600/30 overflow-hidden bg-zinc-800/50 p-[2px] flex items-center justify-center">

            {/* Feixe de luz giratório (sempre ativo) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square opacity-100 animate-[spin_4s_linear_infinite] transition-opacity duration-700 pointer-events-none"
              style={{ background: 'conic-gradient(transparent 70%, #10b981 100%)' }}
            />

            {/* Container interno (recorta a imagem e cria o buraco para o feixe formar a borda) */}
            <div className="relative w-full h-full rounded-[calc(1.5rem-2px)] overflow-hidden z-10 bg-zinc-900">
              <Image
                src="/profile.jpg"
                alt="Profissional Nutricionista"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover object-center brightness-[1.05] contrast-[1.1] saturate-[1.1] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Efeito Glass Interno (reflexo na borda de dentro) */}
              <div className="absolute inset-0 rounded-[calc(1.5rem-2px)] border border-white/5 pointer-events-none" />
            </div>

          </div>

          {/* Brilho flutuante no fundo */}
          <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-emerald-600/20 to-emerald-400/20 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

      </div>

      {/* Efeito de Onda Animada */}
      <WaveDivider fillClass="fill-zinc-50 dark:fill-zinc-900" />
    </section>
  );
}

function PainPoints() {
  const points = [
    {
      title: "Medo da Flacidez",
      desc: "Você sente medo de emagrecer rápido e acabar com flacidez severa ou perder sua valiosa massa magra?",
      image: "/flacidez.jpg"
    },
    {
      title: "Efeitos Colaterais",
      desc: "Iniciou ou quer iniciar medicações (GLP-1), mas sofre com enjoos, fraqueza, náuseas ou estagnação do peso?",
      image: "/colaterais.jpg"
    },
    {
      title: "Efeito Rebote",
      desc: "Tem pavor de parar o tratamento, não conseguir manter a rotina e acabar engordando tudo novamente?",
      image: "/rebote.jpg"
    },
    {
      title: "Cansaço Extremo",
      desc: "Sente falta de energia, disposição ao longo do dia e cansaço constante durante o processo?",
      image: "/cansaco.jpg"
    }
  ];

  return (
    <section className="relative pt-24 pb-32 md:pb-48 bg-zinc-50 dark:bg-zinc-900 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* NOVA SEÇÃO: Resultados Comprovados */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32">

          {/* Lado Esquerdo: Vídeo */}
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-none relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 dark:shadow-emerald-900/20 ring-1 ring-zinc-200 dark:ring-white/10 aspect-[4/5] group bg-zinc-100 dark:bg-zinc-900">
            <video
              src="/video5.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Overlay sutil para elegância */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>

          {/* Lado Direito: Textos */}
          <div className="flex-1 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-medium text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Resultados Comprovados</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Resultados reais com quem vive o que prescreve
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                Com uma abordagem prática e individualizada, os pacientes da Dra. Eclesyrlanya atingem suas metas com consistência.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                Seja para reduzir gordura, ganhar massa muscular, o plano é feito sob medida — e entregue já na consulta.
              </p>
            </div>

            <p className="text-xl font-semibold text-zinc-900 dark:text-white mb-8">
              Quer ter resultados assim?
            </p>

            <a href="https://wa.me/5585999668826?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-600/20">
              Agendar minha avaliação estratégica
              <Activity className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Separador elegante para os Cards */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent mb-24" />

        {/* SECÃO DOS CARDS (Dores / Identificação) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Você se identifica com alguma dessas situações?</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Se você está enfrentando um desses desafios, saiba que você não está sozinha e existe um protocolo seguro para reverter isso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, i) => (
            <div key={i} className="relative rounded-3xl overflow-hidden aspect-[4/5] group hover:-translate-y-2 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-900/20 ring-1 ring-white/10">
              {/* Imagem de Fundo */}
              <Image
                src={point.image}
                alt={point.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
              />

              {/* Overlay Escuro / Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 backdrop-blur-md border border-emerald-500/30 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">{point.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed drop-shadow-sm">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fillClass="fill-white dark:fill-zinc-950" />
    </section>
  );
}

function Methodology() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.2 : scrollLeft + clientWidth / 1.2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const steps = [
    {
      title: "Pré atendimento Anamnese",
      desc: "A anamnese é o nosso primeiro momento juntos. Nós vamos conversar um pouco sobre você: seus hábitos, sua rotina, suas restrições...",
      image: "/p1.jpg"
    },
    {
      title: "Análise/ solicitação de exames bioquímicos",
      desc: "Análise/ solicitação de exames bioquímicos: vou analisar seus exames para averiguar suas individualidades, em conjunto com os sinais clínicos .",
      image: "/p2_exames.jpg"
    },
    {
      title: "Medidas Antropométricas",
      desc: "Medidas Antropométricas: Irei tirar todas suas medidas, vou analisar/avaliar sua composição corporal e quais os seu riscos de doenças, seu IMC, irei, também, calcular seu consumo calórico diário. Após isso vamos para a construção dos seus objetivos.",
      image: "/p3_medidas.jpg"
    },
    {
      title: "Plano alimentar / Pós Atendimento",
      desc: "Em seguida, vamos para seu plano alimentar. Irei montar sua dieta na hora da consulta, analisando todas as suas necessidades, considerando as suas preferências e aversões alimentares. Então não se preocupe! Dieta não precisa ser algo ruim. Além disso, o plano alimentar irá ser encaixado na sua rotina",
      image: "/p2.jpg"
    },
    {
      title: "Acompanhamento Contínuo",
      desc: "A nossa consulta não termina no consultório…   Após contruirmos o seu plano alimentar, irei te acompanhar e te dar suporte na sua dieta. Você terá acesso ao meu número do Whatsapp para tirar todas suas dúvidas. Qualquer modificação que você quiser fazer, iremos resolver juntos e adequar novamente.",
      image: "/p5.jpg"
    }
  ];

  return (
    <section className="relative pt-24 pb-32 md:pb-48 bg-white dark:bg-zinc-950 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">O Método: Previsibilidade e Segurança</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">Um passo a passo validado para garantir que seu processo seja saudável, sustentável e com resultados definitivos.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-zinc-600 dark:text-zinc-300 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-zinc-600 dark:text-zinc-300 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-12 snap-x hide-scrollbar scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] px-4 -mx-4 md:px-0 md:mx-0">
          {steps.map((step, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[350px] lg:min-w-[400px] snap-center relative rounded-3xl overflow-hidden aspect-[3/4] group border border-zinc-200 dark:border-zinc-800 shadow-xl hover:-translate-y-2 transition-all duration-500">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 85vw, 400px"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 saturate-[0.8] group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 transition-opacity duration-700" />

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-emerald-500/30">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
          </div>
          
          {/* Mobile Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-[-1rem] mb-8">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-100 text-zinc-600 dark:text-zinc-300 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-100 text-zinc-600 dark:text-zinc-300 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <WaveDivider fillClass="fill-emerald-900 dark:fill-zinc-900" />
    </section>
  );
}

function ServicesCombos() {
  return (
    <section className="relative pt-24 pb-32 md:pb-48 bg-emerald-900 dark:bg-zinc-900 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Solução Completa: Combos & Injetáveis</h2>
            <p className="text-lg text-emerald-50 dark:text-zinc-400">
              Não basta apenas tomar a medicação. Seu corpo precisa de suporte para metabolizar, gerar energia e preservar a saúde estrutural (cabelos, unhas, músculos).
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><Syringe className="w-6 h-6 text-emerald-400" /></div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Suplementação Injetável</h4>
                  <p className="text-emerald-100/80 dark:text-zinc-400">Absorção direta (100% de aproveitamento), suporte vitamínico imediato, blindagem contra queda de cabelo e recuperação da disposição.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-400" /></div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Combos Estratégicos</h4>
                  <p className="text-emerald-100/80 dark:text-zinc-400">Kits de produtos selecionados clinicamente para apoiar cada fase do emagrecimento, focados em saciedade, controle glicêmico e saúde intestinal.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="https://wa.me/5585999668826?text=Quero%20conhecer%20os%20protocolos%20injet%C3%A1veis." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-100 text-emerald-900 dark:text-zinc-900 rounded-full font-semibold text-lg transition-all hover:bg-emerald-50 dark:hover:bg-white hover:scale-105">
                Falar com a equipe sobre protocolos
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-emerald-800 dark:border-emerald-800/50 shadow-2xl group ring-1 ring-white/20 dark:ring-white/10">
              <Image
                src="/bora.jpg"
                alt="Combo de Suplementos e Aplicação Clínica"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      <WaveDivider fillClass="fill-zinc-950 dark:fill-zinc-950" />
    </section>
  );
}

function AboutMe() {
  return (
    <section className="relative pt-24 pb-32 md:pb-48 bg-zinc-950 text-white px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-2/5 aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl shadow-emerald-900/20 ring-1 ring-white/10 group">
          <Image 
            src="/doutora.jfif" 
            alt="Doutora - Retrato Profissional" 
            fill 
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="w-full md:w-3/5 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-sm border border-emerald-500/30">
            Dupla Graduação: Enfermeira & Nutricionista
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Mais de 2.000 vidas transformadas através da ciência.</h2>

          <div className="text-zinc-300 space-y-4 text-lg">
            <p>
              Com a minha dupla formação em Nutrição e Enfermagem, eu ofereço um olhar 360º sobre o seu corpo. Não se trata apenas de passar uma dieta, mas de entender o seu metabolismo e cuidar clinicamente de cada sintoma.
            </p>
            <p>
              Sou especialista no manejo e otimização de análogos de GLP-1 (Ozempic, Mounjaro, Wegovy), ajudando pacientes a extraírem o máximo resultado da medicação, minimizando efeitos colaterais e garantindo o desmame com segurança, sem o temido efeito rebote.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-sm">
              CRN: 12345/XX
            </div>
            <div className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-sm">
              COREN: 123456-XX
            </div>
          </div>
        </div>
      </div>
      <WaveDivider fillClass="fill-zinc-50 dark:fill-zinc-900" />
    </section>
  );
}

function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.2 : scrollLeft + clientWidth / 1.2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Mariana S.",
      text: "Eu já tinha tentado de tudo e o remédio me dava muito enjoo. Com o protocolo e os injetáveis, meu enjoo sumiu na mesma semana e já perdi 8kg preservando minha massa magra. A energia voltou!",
      time: "Acompanhamento há 3 meses",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces&q=80"
    },
    {
      id: 2,
      name: "Carla T.",
      text: "O efeito rebote era meu maior pesadelo. Depois do desmame feito pela doutora, não engordei 1 grama sequer. A mudança na composição corporal é nítida. Melhor decisão!",
      time: "Acompanhamento há 6 meses",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces&q=80"
    },
    {
      id: 3,
      name: "Roberto M.",
      text: "O foco no ganho de massa magra junto ao emagrecimento fez toda a diferença. Protocolo injetável impecável, recuperei minha disposição para treinar e para o trabalho.",
      time: "Acompanhamento há 4 meses",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80"
    },
    {
      id: 4,
      name: "Juliana R.",
      text: "Perder peso sem ficar com flacidez severa parecia impossível para mim. A combinação de estratégias da doutora salvou minha autoestima e saúde mental durante o processo.",
      time: "Acompanhamento há 8 meses",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&q=80"
    }
  ];

  return (
    <section className="relative pt-24 pb-32 md:pb-48 bg-zinc-50 dark:bg-zinc-900 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">O que dizem meus pacientes</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">Relatos reais de energia recuperada, alívio de sintomas e metas alcançadas.</p>
          </div>
          <div className="hidden md:flex gap-3 shrink-0">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-emerald-50 text-zinc-600 dark:text-zinc-300 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-emerald-50 text-zinc-600 dark:text-zinc-300 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] px-4 -mx-4 md:px-0 md:mx-0">
          {testimonials.map((item) => (
            <div key={item.id} className="min-w-[300px] md:min-w-[400px] snap-center bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex text-emerald-500 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-6">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 ring-1 ring-emerald-500/30">
                  <img src={item.avatar} alt={`Paciente ${item.name}`} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-2 mb-8">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-emerald-50 text-zinc-600 dark:text-zinc-300 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-emerald-50 text-zinc-600 dark:text-zinc-300 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <WaveDivider fillClass="fill-white dark:fill-zinc-950" />
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Preciso já estar usando remédio de emagrecimento para consultar?",
      a: "Não. O protocolo atende quem já usa, quem quer iniciar com segurança ou quem busca emagrecimento 100% natural. Cada plano é individualizado."
    },
    {
      q: "O atendimento é online ou presencial?",
      a: "Ofereço consultas online para todo o mundo e também consultas presenciais onde realizamos a aplicação de injetáveis no consultório físico."
    },
    {
      q: "Como funcionam os combos de produtos?",
      a: "São kits montados clinicamente baseados nas suas queixas (falta de energia, intestino preso, compulsão por doces) enviados para potencializar sua dieta."
    },
    {
      q: "Como faço para agendar?",
      a: "Basta clicar em qualquer botão desta página para ser direcionado ao WhatsApp da minha equipe. Vamos entender o seu momento e encontrar o melhor horário."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative pt-24 pb-32 md:pb-48 bg-white dark:bg-zinc-950 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-zinc-900 dark:text-white text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-500 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-zinc-600 dark:text-zinc-400">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fillClass="fill-zinc-950 dark:fill-zinc-950" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Agende sua consulta</h3>
            <p className="mb-6 max-w-sm">Dê o primeiro passo para o emagrecimento definitivo, seguro e com preservação muscular.</p>
            <a href="https://wa.me/5585999668826" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-colors">
              Agendar Avaliação
            </a>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contatos</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>(85) 99966-8826</span>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-500" />
                <span>Seg a Sex: 08h às 18h</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Registros</h3>
            <ul className="space-y-2">
              <li>CRN: 12345/XX</li>
              <li>COREN: 123456-XX</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center text-sm">
          <p>&copy; 2026 Especialista em Emagrecimento. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/5585999668826"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      aria-label="Falar no WhatsApp"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

function WaveDivider({ fillClass }: { fillClass: string }) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[120px] overflow-hidden z-20 pointer-events-none">
      <style>
        {`
          @keyframes waveLoop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-wave-1 { animation: waveLoop 15s linear infinite; }
          .animate-wave-2 { animation: waveLoop 20s linear infinite; }
          .animate-wave-3 { animation: waveLoop 10s linear infinite; }
        `}
      </style>

      {/* Onda 1 (Fundo) */}
      <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="absolute bottom-0 w-[200%] h-full animate-wave-1">
        <path className={`${fillClass} opacity-30`} d="M0,70 Q300,100 600,70 T1200,70 T1800,70 T2400,70 V150 H0 Z" />
      </svg>

      {/* Onda 2 (Meio) */}
      <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="absolute bottom-0 w-[200%] h-full animate-wave-2">
        <path className={`${fillClass} opacity-50`} d="M0,80 Q300,20 600,80 T1200,80 T1800,80 T2400,80 V150 H0 Z" />
      </svg>

      {/* Onda 3 (Frente) */}
      <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="absolute bottom-0 w-[200%] h-full animate-wave-3">
        <path className={fillClass} d="M0,100 Q300,60 600,100 T1200,100 T1800,100 T2400,100 V150 H0 Z" />
      </svg>
    </div>
  );
}
