
import React, { useState, useEffect } from 'react';
import { Calculator } from './components/Calculator';

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
      a: "Sua margem é superior a 200%. Você adquire por R$ 99,00 a unidade no kit e o preço de venda sugerido para salões é de R$ 300,00 a R$ 350,00."
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

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-green selection:text-black font-sans">
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
            <a href="https://wa.me/SEUNUMERO" className="bg-neon-green text-black px-4 py-2 rounded-lg text-xs font-black uppercase hover:scale-105 transition-transform">COMEÇAR AGORA</a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <CountdownTimer />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-24 px-4 border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,102,0.1),transparent_50%)]"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(0,255,102,0.1)]">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-ping"></span>
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Oportunidade de Revenda 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-heading font-black leading-tight mb-6">
              FATURE ACIMA DE <br />
              <span className="text-neon-green underline decoration-4 underline-offset-8">R$ 4 MIL POR MÊS</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Revendendo a progressiva orgânica profissional que os salões amam. <br className="hidden md:block" />
              <span className="text-white font-semibold">Sem burocracia, alto lucro imediato.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">Preço Especial</div>
                <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Investimento no Kit</p>
                <p className="text-4xl font-black text-yellow-400">R$ 297</p>
                <p className="text-xs text-zinc-400 mt-1">3 selagens profissionais (99/cada)</p>
              </div>
              <div className="hidden sm:block">
                <svg className="w-8 h-8 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl">
                <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Lucro Estimado</p>
                <p className="text-4xl font-black text-neon-green">R$ 900+</p>
                <p className="text-xs text-zinc-400 mt-1">Venda por R$ 300 - R$ 350 cada</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image Section - Impact Visual */}
        <section className="py-12 bg-black px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-[2rem] border-2 border-neon-green/30 shadow-[0_0_50px_rgba(0,255,102,0.15)]">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 to-yellow-400/20 blur opacity-30"></div>
              <img 
                src="https://i.ibb.co/PG26MTMW/Whats-App-Image-2026-02-16-at-09-02-01.jpg" 
                alt="Resultado Incrível ProStyle" 
                className="w-full h-auto relative z-10 block object-cover hover:scale-[1.02] transition-transform duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20"></div>
              <div className="absolute bottom-8 left-8 z-30">
                 <p className="bg-neon-green text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-2 shadow-xl inline-block">Qualidade Incomparável</p>
                 <h3 className="text-2xl md:text-4xl font-black text-white italic drop-shadow-lg">DESLUMBRE SEUS CLIENTES.</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Market Valuation Section */}
        <section className="py-24 bg-gradient-to-b from-black to-zinc-950 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
             <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#00ff66" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.4,-44.7C85.5,-31.3,90.8,-15.7,90.3,-0.3C89.8,15.1,83.5,30.2,74.5,43.2C65.5,56.2,53.8,67.1,40.1,74.5C26.4,81.9,10.7,85.8,-4.2,93C-19.1,100.2,-33.2,110.6,-45.5,108.2C-57.8,105.8,-68.4,90.6,-76.3,75.3C-84.2,60.1,-89.4,44.7,-91.7,29.3C-94,13.9,-93.4,-1.6,-88.7,-15.4C-84,-29.2,-75.2,-41.3,-64.5,-51.2C-53.8,-61.1,-41.2,-68.7,-28.5,-76.3C-15.8,-83.9,-2.9,-91.5,10.9,-91.3C24.7,-91.1,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
             </svg>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
                  O MERCADO QUE <br />
                  <span className="text-neon-green">MOVE BILHÕES</span> TODOS OS MESES
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-zinc-400 leading-relaxed">
                    Enquanto outros setores estagnam, o mercado da beleza no Brasil cresce a passos largos. O Brasil é hoje a <span className="text-white font-bold">4ª maior potência mundial em cosméticos</span>.
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight">
                    O COSMÉTICO É O <br />
                    <span className="text-gold text-5xl md:text-7xl block mt-2 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] italic">
                      OURO BRANCO
                    </span>
                    <span className="block mt-2">DO BRASIL</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm">
                  <p className="text-neon-green font-black text-4xl mb-2">121%</p>
                  <p className="text-zinc-500 text-sm font-bold uppercase">Crescimento constante no setor.</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm">
                  <p className="text-gold font-black text-4xl mb-2">+4bi</p>
                  <p className="text-zinc-500 text-sm font-bold uppercase">Faturamento mensal do setor profissional.</p>
                </div>
                <div className="col-span-2 bg-purple-premium p-8 rounded-3xl border border-white/5">
                   <p className="text-white font-black text-xl mb-2 uppercase italic text-center">"O COSMÉTICO NUNCA PARA DE VENDER."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Proof Section */}
        <section className="py-24 px-4 bg-black border-y border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                RESULTADOS QUE <span className="text-neon-green">IMPRESSIONAM</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Veja o Cristiano, do Rio Grande do Sul, entregando um resultado inacreditável utilizando nossa tecnologia.
              </p>
            </div>

            <div className="w-full max-w-[400px] aspect-[9/16] relative group">
              <div className="absolute -inset-2 bg-neon-green/30 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <iframe 
                className="w-full h-full rounded-[2rem] border-4 border-neon-green shadow-[0_0_30px_rgba(0,255,102,0.3)] relative z-10"
                src="https://www.youtube.com/embed/5LMYbOCAC9c" 
                title="Resultado ProStyle"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-white uppercase italic max-w-xl">
                "SÓ FALTA <span className="text-yellow-400">VOCÊ</span> TER ESSE PRODUTO EM MÃOS PARA DOMINAR O MERCADO."
              </p>
              <div className="h-1 w-24 bg-neon-green mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-24 px-4 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src="https://i.ibb.co/nWkWy1X/Chat-GPT-Image-16-02-2026-08-35-30.png" 
                    alt="Padrão Profissional ProStyle" 
                    className="relative rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl" 
                  />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
                  🎯 O Produto que <span className="text-neon-green">Vende Sozinho</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Alisamento 100% em até 40 minutos",
                    "Brilho espelhado e toque sedoso",
                    "Fórmula Orgânica - Zero Formol",
                    "Acaba com o frizz instantaneamente",
                    "Resultado profissional de alto padrão"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-zinc-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-black border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black uppercase tracking-tight">Dúvidas & <span className="text-yellow-400">Objeções</span></h2>
              <p className="text-zinc-500">Tudo o que você precisa saber para se tornar um parceiro de sucesso.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-neon-green/50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white pr-4">{faq.q}</h3>
                    <span className={`text-neon-green transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4 bg-zinc-900/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculadora" className="py-24 px-4 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tighter">Simule Seus Ganhos 💰</h2>
              <p className="text-zinc-500 max-w-2xl mx-auto">Use nossas calculadoras para ver o potencial do "Ouro Branco" na sua mão.</p>
            </div>
            <Calculator />
          </div>
        </section>

        {/* Final CTA Card */}
        <section className="py-24 px-4 bg-black overflow-hidden relative">
          <div className="max-w-4xl mx-auto bg-neon-green p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,255,102,0.2)]">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-black mb-8 leading-tight relative z-10">
              PRONTO PARA <br />LUCRAR?
            </h2>
            <a 
              href="https://wa.me/SEUNUMERO" 
              className="inline-block bg-black text-white px-12 py-6 rounded-2xl text-xl font-black uppercase hover:scale-105 transition-all shadow-2xl relative z-10 active:scale-95"
            >
              Falar com Consultor
            </a>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="py-12 border-t border-zinc-900 bg-black px-4 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center">
                <span className="text-black font-black text-xs">P</span>
              </div>
              <span className="font-heading font-extrabold tracking-tighter text-lg">PRO<span className="text-neon-green">STYLE</span></span>
            </div>
            <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">
              © 2024 ProStyle Cosméticos • Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
