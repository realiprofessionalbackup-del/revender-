import React, { useState, useEffect } from 'react';
import { Calculator } from './components/Calculator.tsx';

const getLinkWithParams = (baseUrl: string) => {
  if (typeof window === 'undefined') return baseUrl;
  const search = window.location.search;
  if (!search) return baseUrl;
  // Se a URL base já tiver parâmetros, anexa com & em vez de ?
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
    <div className="bg-neon-green text-black py-2 px-4 text-center font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 sticky top-16 z-40 shadow-lg border-b border-black/10">
      <span className="animate-pulse">⚠️ OFERTA EXCLUSIVA TERMINA EM:</span>
      <span className="bg-black text-neon-green px-2 py-0.5 rounded tabular-nums">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Preciso de CNPJ para começar a revender?",
      a: "Não! Você pode iniciar como pessoa física e escalar seu negócio conforme for lucrando. Oferecemos todo o suporte para sua transição profissional."
    },
    {
      q: "Qual a margem de lucro real por unidade?",
      a: "Sua margem é superior a 200%. Você adquire por R$ 99,00 a unidade no kit (mínimo 3 unidades) e o preço de venda sugerido para salões é de R$ 300,00 a R$ 350,00."
    },
    {
      q: "O produto é registrado na ANVISA?",
      a: "Sim, 100% regulamentado. Nossa fórmula orgânica passou por todos os testes rigorosos de segurança e eficácia."
    },
    {
      q: "Funciona em cabelos muito crespos e resistentes?",
      a: "Com certeza. O diferencial da nossa tecnologia orgânica é justamente o poder de alisamento em fios difíceis sem o uso de formol."
    },
    {
      q: "Como recebo o suporte e materiais de marketing?",
      a: "Imediatamente após seu primeiro pedido, você recebe acesso ao nosso Drive Exclusivo com fotos, vídeos e roteiros de vendas testados."
    }
  ];

  const WHATSAPP_LINK = "https://wa.me/5573988158615?text=Quero%20ser%20revendedor";

  return (
    <div className="min-h-screen selection:bg-neon-green selection:text-black font-sans">
      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
              <span className="text-black font-black text-lg">P</span>
            </div>
            <span className="font-heading font-extrabold tracking-tighter text-xl">PRO<span className="text-neon-green">STYLE</span></span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#calculadora" className="text-sm font-bold hover:text-neon-green transition-colors hidden sm:block">CALCULADORA DE LUCRO</a>
            <a 
              href={getLinkWithParams(WHATSAPP_LINK)} 
              className="bg-neon-green text-black px-4 py-2 rounded-lg text-xs font-black uppercase hover:scale-105 transition-transform"
            >
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <CountdownTimer />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-ping"></span>
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">OPORTUNIDADE • REVENDA AUTORIZADA</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-heading font-black leading-tight mb-6">
              FATURE ACIMA DE <br />
              <span className="text-neon-green drop-shadow-[0_0_15px_rgba(0,255,102,0.4)]">R$ 4.000 POR MÊS</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Comece seu próprio negócio com apenas <span className="text-white font-bold">R$ 297</span> e revenda a progressiva orgânica que os salões amam.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl relative min-w-[280px]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Oferta de Kit</div>
                <p className="text-xs text-zinc-500 uppercase font-bold mb-2">Comece com apenas</p>
                <div className="flex flex-col items-center">
                   <p className="text-5xl font-black text-white">R$ 297</p>
                   <div className="mt-2 bg-neon-green/10 border border-neon-green/20 px-3 py-1 rounded-lg">
                      <p className="text-neon-green text-sm font-black">R$ 99,00 POR UNIDADE</p>
                   </div>
                </div>
                <p className="text-xs text-zinc-400 mt-4 font-medium">(Kit com 3 unidades inclusas)</p>
              </div>
              
              <div className="hidden sm:block">
                <svg className="w-8 h-8 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl min-w-[280px]">
                <p className="text-xs text-zinc-500 uppercase font-bold mb-2">Potencial de Venda</p>
                <p className="text-5xl font-black text-neon-green">R$ 1.050</p>
                <p className="text-xs text-zinc-400 mt-4 font-medium">Revenda cada uma por R$ 350</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image Section */}
        <section className="py-8 bg-transparent px-4 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-[2.5rem] border-4 border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src="https://i.ibb.co/PG26MTMW/Whats-App-Image-2026-02-16-at-09-02-01.jpg" 
                alt="Resultado de Alto Padrão" 
                className="w-full h-auto block object-cover transform transition-transform duration-[3000ms] group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 space-y-3">
                 <div className="bg-neon-green text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] inline-block shadow-xl">
                   Padrão Ouro de Qualidade
                 </div>
                 <h3 className="text-3xl md:text-5xl font-black text-white italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                   DESLUMBRE SEUS CLIENTES.
                 </h3>
                 <p className="text-white/80 font-medium text-lg md:text-xl italic">"O segredo que os salões não contam está aqui."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Growth Section */}
        <section className="py-24 px-4 relative overflow-hidden bg-black/40">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
                  O MERCADO QUE <br />
                  <span className="text-neon-green underline decoration-yellow-400 decoration-4 underline-offset-8">MAIS CRESCE</span> NO BRASIL
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-zinc-400 leading-relaxed">
                    O Brasil é hoje a <span className="text-white font-bold">4ª maior potência mundial em cosméticos</span>. Enquanto outros setores estagnam, a beleza move bilhões todos os meses.
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight">
                    O COSMÉTICO É O <br />
                    <span className="text-gold text-5xl md:text-7xl block mt-2 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] italic">
                      OURO BRANCO
                    </span>
                    <span className="block mt-2">DO MERCADO NACIONAL</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="glass-card p-8 rounded-3xl">
                  <p className="text-neon-green font-black text-4xl mb-2">121%</p>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Crescimento constante.</p>
                </div>
                <div className="glass-card p-8 rounded-3xl">
                  <p className="text-gold font-black text-4xl mb-2">+4bi</p>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Faturamento mensal.</p>
                </div>
                <div className="col-span-2 bg-purple-premium p-10 rounded-3xl border border-white/10 shadow-inner">
                   <p className="text-white font-black text-xl mb-2 uppercase italic text-center leading-relaxed">
                     "O COSMÉTICO NUNCA PARA DE VENDER. AS PESSOAS NÃO DEIXAM DE SE CUIDAR."
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Proof Section */}
        <section className="py-24 px-4 bg-black/60">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                PROVA REAL DE <span className="text-neon-green italic underline decoration-white">RESULTADO</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Veja o Cristiano, do Rio Grande do Sul, entregando um resultado inacreditável utilizando nossa tecnologia.
              </p>
            </div>

            <div className="w-full max-w-[400px] aspect-[9/16] relative group">
              <div className="absolute -inset-4 bg-neon-green/20 blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
              <iframe 
                className="w-full h-full rounded-[2.5rem] border-4 border-neon-green shadow-[0_0_50px_rgba(0,255,102,0.3)] relative z-10"
                src="https://www.youtube.com/embed/5LMYbOCAC9c" 
                title="Resultado ProStyle"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="space-y-6">
              <p className="text-2xl md:text-4xl font-black text-white uppercase italic max-w-xl leading-tight">
                "SÓ FALTA <span className="text-yellow-400 underline decoration-neon-green">VOCÊ</span> TER ESSE PRODUTO EM MÃOS PARA DOMINAR."
              </p>
              <div className="h-1.5 w-32 bg-neon-green mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-black/40 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black uppercase tracking-tight">Dúvidas & <span className="text-yellow-400 italic">Objeções</span></h2>
              <p className="text-zinc-500 font-medium">Tudo o que você precisa saber para se tornar um parceiro de sucesso.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-neon-green/50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white pr-4">{faq.q}</h3>
                    <span className={`text-neon-green transform transition-all duration-300 ${openFaq === index ? 'rotate-45 scale-125' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/10 pt-4 bg-black/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculadora" className="py-24 px-4 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter">SIMULE SEUS <span className="text-neon-green">GANHOS</span> 💰</h2>
              <p className="text-zinc-500 max-w-2xl mx-auto font-medium">Use nossas calculadoras para ver o potencial do "Ouro Branco" na sua mão.</p>
            </div>
            <Calculator />
          </div>
        </section>

        {/* Final CTA Card */}
        <section className="py-24 px-4 overflow-hidden relative">
          <div className="max-w-4xl mx-auto bg-neon-green p-12 md:p-20 rounded-[3.5rem] text-center relative overflow-hidden shadow-[0_0_80px_rgba(0,255,102,0.3)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-black mb-8 leading-tight relative z-10">
              PRONTO PARA <br />FICAR RICO?
            </h2>
            <p className="text-black font-bold text-xl mb-12 relative z-10 opacity-80">Investimento inicial: Apenas R$ 297,00</p>
            <a 
              href={getLinkWithParams(WHATSAPP_LINK)} 
              className="inline-block bg-black text-white px-12 py-6 rounded-3xl text-2xl font-black uppercase hover:scale-105 transition-all shadow-2xl relative z-10 active:scale-95 animate-cta"
            >
              QUERO COMEÇAR AGORA
            </a>
            <p className="text-black/60 text-xs font-black uppercase tracking-widest mt-8 relative z-10">Atendimento imediato via WhatsApp</p>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="py-16 border-t border-white/5 bg-black/40 px-4 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                <span className="text-black font-black text-lg">P</span>
              </div>
              <span className="font-heading font-extrabold tracking-tighter text-2xl">PRO<span className="text-neon-green">STYLE</span></span>
            </div>
            <p className="text-zinc-600 text-xs uppercase tracking-widest font-black">
              © 2024 ProStyle Cosméticos • Ouro Branco do Mercado da Beleza <br />
              <span className="opacity-50 mt-2 block">Todos os direitos reservados.</span>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;