import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const getLinkWithParams = (baseUrl: string) => {
  if (typeof window === 'undefined') return baseUrl;
  const search = window.location.search;
  if (!search) return baseUrl;
  return baseUrl.includes('?') 
    ? `${baseUrl}&${search.substring(1)}` 
    : `${baseUrl}${search}`;
};

export const Calculator: React.FC = () => {
  const [qtdVenda, setQtdVenda] = useState<number>(10);
  const [precoVenda, setPrecoVenda] = useState<number>(300);
  const [qtdCompra, setQtdCompra] = useState<number>(3);
  const [aiTip, setAiTip] = useState<string>("");
  const [loadingAi, setLoadingAi] = useState<boolean>(false);

  const faturamento = qtdVenda * precoVenda;
  const custoTotal = qtdVenda * 99;
  const lucroEstimado = faturamento - custoTotal;

  const totalPedido = qtdCompra * 99;

  const handleGetAiTip = async () => {
    setLoadingAi(true);
    const tip = await geminiService.getSalesStrategy(faturamento, qtdVenda);
    setAiTip(tip);
    setLoadingAi(false);
  };

  const WHATSAPP_LINK = "https://wa.me/5573988158615?text=Quero%20ser%20revendedor";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
      {/* Calculadora de Faturamento */}
      <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-neon-green/20 p-3 rounded-2xl">
            <svg className="w-8 h-8 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Lucro Mensal</h3>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-3">Unidades vendidas / Mês</label>
            <input 
              type="number" 
              value={qtdVenda}
              onChange={(e) => setQtdVenda(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full bg-white/5 border-2 border-white/10 text-white rounded-2xl p-5 text-xl font-bold focus:outline-none focus:border-neon-green focus:ring-4 focus:ring-neon-green/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-3">Preço de venda (R$)</label>
            <input 
              type="number" 
              value={precoVenda}
              onChange={(e) => setPrecoVenda(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full bg-white/5 border-2 border-white/10 text-white rounded-2xl p-5 text-xl font-bold focus:outline-none focus:border-neon-green focus:ring-4 focus:ring-neon-green/10 transition-all"
            />
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Faturamento Bruto:</span>
              <span className="text-2xl font-black text-white">R$ {faturamento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between items-center p-6 bg-neon-green/5 rounded-3xl border border-neon-green/20">
              <span className="text-neon-green font-black uppercase text-sm tracking-widest">LUCRO LÍQUIDO:</span>
              <span className="text-4xl font-black text-neon-green drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]">R$ {lucroEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          <button 
            onClick={handleGetAiTip}
            disabled={loadingAi}
            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-yellow-400 text-xs font-black py-4 rounded-xl uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
          >
            {loadingAi ? (
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-yellow-400 border-t-transparent"></span>
            ) : '✨ CONSULTAR ESTRATÉGIA IA'}
          </button>
          
          {aiTip && (
            <div className="p-6 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl text-sm italic text-yellow-100 font-medium leading-relaxed">
              "{aiTip}"
            </div>
          )}
        </div>
      </div>

      {/* Calculadora de Pedido */}
      <div className="bg-purple-premium p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/5 flex flex-col justify-between">
        {/* Floating Unit Price Label */}
        <div className="absolute top-0 right-0 bg-yellow-400 text-black px-8 py-4 rounded-bl-[2.5rem] font-black shadow-2xl z-20">
          <p className="text-[10px] uppercase tracking-widest opacity-70">Apenas</p>
          <p className="text-4xl tracking-tighter -mt-1">R$ 99</p>
          <p className="text-[10px] uppercase tracking-tighter italic">por unidade</p>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10 pt-4">
            <div className="bg-white/10 p-3 rounded-2xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Monte seu Pedido</h3>
          </div>

          <div className="space-y-8">
            <p className="text-zinc-300 text-lg leading-relaxed">
              Inicie com o <span className="text-white font-bold">Kit com 3 unidades (R$ 297)</span>. 
              <br />A partir dele, você adiciona quanto quiser por <span className="text-neon-green font-black underline">R$ 99 cada</span>.
            </p>

            <div className="bg-black/40 p-8 rounded-[2rem] border border-white/10">
              <label className="block text-xs font-black text-neon-green mb-4 uppercase tracking-[0.2em]">Quantas unidades agora?</label>
              <div className="flex items-center gap-4">
                <input 
                  type="number" 
                  value={qtdCompra}
                  min="3"
                  onChange={(e) => setQtdCompra(Math.max(3, parseInt(e.target.value) || 3))}
                  className="flex-1 bg-white/5 border-2 border-white/20 text-white rounded-2xl p-6 text-4xl font-black focus:outline-none focus:border-neon-green transition-all shadow-inner"
                />
              </div>
              <div className="flex justify-between items-center mt-4 px-2">
                 <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Mínimo: 3 UNIDADES</p>
                 <p className="text-[10px] text-yellow-400 font-black uppercase tracking-widest">FRETE GRÁTIS ACIMA DE 10 UN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-8 border-t border-white/10">
          <div className="flex flex-col items-center mb-8">
            <span className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Total do Investimento:</span>
            <div className="flex items-baseline gap-2">
               <span className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">R$ {totalPedido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
          
          <a 
            href={getLinkWithParams(WHATSAPP_LINK)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center bg-neon-green hover:bg-[#00e65c] text-black font-black py-7 rounded-[2rem] text-2xl uppercase tracking-tighter transition-all transform hover:scale-105 active:scale-95 animate-cta shadow-[0_15px_35px_rgba(0,255,102,0.3)]"
          >
            FECHAR MEU PEDIDO AGORA
          </a>
          
          <div className="flex justify-center gap-4 mt-6">
             <span className="text-[10px] text-white/30 font-black uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">PIX</span>
             <span className="text-[10px] text-white/30 font-black uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">CARTÃO 12X</span>
             <span className="text-[10px] text-white/30 font-black uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">ENVIO IMEDIATO</span>
          </div>
        </div>
      </div>
    </div>
  );
};