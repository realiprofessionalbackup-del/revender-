import React, { useState, useEffect } from 'react';
import { Calculator } from './components/Calculator.tsx';

const getLinkWithParams = (baseUrl: string) => {
  if (typeof window === 'undefined') return baseUrl;
  const search = window.location.search;
  if (!search) return baseUrl;
  return baseUrl.includes('?') 
    ? `${baseUrl}&${search.substring(1)}` 
    : `${baseUrl}${search}`;
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-neon-green text-black py-2.5 px-4 text-center font-black text-[10px] md:text-sm uppercase tracking-widest flex items-center justify-center gap-2 sticky top-[60px] md:top-16 z-40 shadow-xl border-b border-black/10">
      <span className="animate-pulse">⚠️ OFERTA TERMINA EM:</span>
      <span className="bg-black text-neon-green px-2 py-0.5 rounded-md tabular-nums font-mono">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const WHATSAPP_LINK = "https://wa.me/5573988158615?text=Quero%20ser%20revendedor";

  const faqs = [
    {
      q: "Preciso de CNPJ para começar?",
      a: "Não! Você pode iniciar como pessoa física e escalar seu negócio conforme for lucrando."
    },
    {
      q: "Qual a margem de lucro real?",
      a: "Sua margem é superior a 200%. Você compra por R$ 99,00 e revende por até R$ 350,00."
    },
    {
      q: "O produto é registrado?",
      a: "Sim, 100% regulamentado pela ANVISA. Fórmula orgânica segura."
    },
    {
      q: "Funciona em cabelos crespos?",
      a: "Com certeza. Nossa tecnologia orgânica alisa até os fios mais resistentes sem formol."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-neon-green selection:text-black font-sans bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-[60px] md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-neon-green rounded-full flex items-center justify-center">
              <span className="text-black font-black text-sm">P</span>
            </div>
            <span className="font-heading font-extrabold tracking-tighter text-lg">PRO<span className="text-neon-green">STYLE</span></span>
          </div>
          <a 
            href={getLinkWithParams(WHATSAPP_LINK)} 
            className="bg-neon-green text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)]"
          >
            FALAR COM CONSULTOR
          </a>
        </div>
      </header>

      <main className="pt-[60px]">
        <CountdownTimer />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-10 pb-12 px-5">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-ping"></span>
              <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase">REVENDA AUTORIZADA</span>
            </div>
            
            <h1 className="text-[32px] md:text-7xl font-heading font-black leading-[1.1] mb-6 tracking-tighter">
              FATURE MAIS DE <br />
              <span className="text-neon-green drop-shadow-[0_0_20px_rgba(0,255,102,0.5)]">R$ 4.000 / MÊS</span>
            </h1>
            
            <p className="text-base md:text-2xl text-zinc-400 font-light mb-10 max-w-2xl mx-auto leading-tight">
              Comece com apenas <span className="text-white font-bold">R$ 297</span> e revenda a queridinha dos salões.
            </p>

            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase">Investimento</div>
                <p className="text-[36px] font-black text-white leading-none">R$ 297</p>
                <p className="text-[10px] text-neon-green mt-1 font-black uppercase tracking-widest">Kit com 3 unidades</p>
              </div>
              
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-zinc-700 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div className="bg-neon-green/10 border border-neon-green/20 p-6 rounded-2xl shadow-xl">
                <p className="text-[9px] text-zinc-500 uppercase font-black mb-1">Retorno Estimado</p>
                <p className="text-[36px] font-black text-neon-green leading-none">R$ 1.050</p>
                <p className="text-[10px] text-white/50 mt-1 font-bold italic">LUCRO REAL IMEDIATO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image */}
        <section className="px-4 py-6">
          <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
            <img 
              src="https://i.ibb.co/PG26MTMW/Whats-App-Image-2026-02-16-at-09-02-01.jpg" 
              alt="Resultado" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
               <h3 className="text-2xl font-black italic mb-1">PADRÃO OURO.</h3>
               <p className="text-zinc-300 text-sm">Qualidade que fideliza o salão.</p>
            </div>
          </div>
        </section>

        {/* Market Growth */}
        <section className="py-16 px-5 bg-zinc-950/50">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              O <span className="text-neon-green italic">OURO BRANCO</span> <br />DO MERCADO
            </h2>
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl text-left border-l-4 border-l-neon-green">
                <p className="text-2xl font-black text-white mb-1">4ª Potência</p>
                <p className="text-xs text-zinc-500 font-bold uppercase">Mundial em Cosméticos</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-left border-l-4 border-l-yellow-400">
                <p className="text-2xl font-black text-white mb-1">R$ 4 Bi+</p>
                <p className="text-xs text-zinc-500 font-bold uppercase">Faturamento Mensal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Proof */}
        <section className="py-16 px-5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black uppercase italic mb-2">Veja o <span className="text-neon-green">Resultado</span></h2>
            <div className="w-16 h-1 bg-neon-green mx-auto rounded-full"></div>
          </div>
          <div className="aspect-[9/16] w-full max-w-[320px] mx-auto rounded-[2rem] overflow-hidden border-2 border-neon-green shadow-[0_0_30px_rgba(0,255,102,0.2)]">
            <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/5LMYbOCAC9c" 
                title="Resultado ProStyle"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 px-5 bg-zinc-950">
          <h2 className="text-xl font-black text-center mb-10 uppercase tracking-widest text-zinc-500">Dúvidas Frequentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="p-4 flex items-center justify-between text-sm font-bold">
                  {faq.q}
                  <span className={`text-neon-green transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </div>
                {openFaq === index && <div className="p-4 pt-0 text-xs text-zinc-400 leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Calculator */}
        <section id="calculadora" className="py-16 px-5">
           <div className="text-center mb-8">
              <h2 className="text-2xl font-black uppercase italic">Simule seu <span className="text-neon-green">Lucro</span></h2>
           </div>
           <Calculator />
        </section>

        {/* Final CTA */}
        <section className="py-20 px-5 text-center bg-neon-green text-black rounded-t-[3rem]">
           <h2 className="text-4xl font-black italic leading-[0.9] mb-6">BORA <br />FICAR RICO?</h2>
           <p className="font-bold text-sm mb-10 opacity-70">A partir de R$ 99 por unidade.</p>
           <a 
              href={getLinkWithParams(WHATSAPP_LINK)} 
              className="inline-block bg-black text-white px-10 py-5 rounded-2xl text-lg font-black uppercase animate-cta"
            >
              QUERO MEU KIT AGORA
            </a>
        </section>

        <footer className="py-10 bg-black text-center px-5 border-t border-white/5">
           <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">© 2024 ProStyle • Ouro Branco da Beleza</p>
        </footer>
      </main>

      {/* Floating Bottom CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-[60] md:hidden">
        <a 
          href={getLinkWithParams(WHATSAPP_LINK)} 
          className="flex items-center justify-center gap-3 bg-neon-green text-black w-full py-4 rounded-2xl font-black text-sm uppercase shadow-[0_10px_30px_rgba(0,255,102,0.4)] ring-4 ring-black"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.549 4.187 1.595 6.02L0 24l6.135-1.61a11.817 11.817 0 005.915 1.589h.005c6.637 0 12.032-5.394 12.035-12.031a11.77 11.77 0 00-3.486-8.498z"/></svg>
          GARANTIR MEU KIT
        </a>
      </div>
    </div>
  );
};

export default App;