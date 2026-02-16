
import React, { useState, useEffect } from 'react';
import { geminiService } from '../services/geminiService';

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
      {/* Calculadora de Faturamento */}
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl transition-all hover:border-neon-green/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-neon-green/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Simulador de Faturamento</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Unidades vendidas por mês</label>
            <input 
              type="number" 
              value={qtdVenda}
              onChange={(e) => setQtdVenda(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Preço de venda sugerido (R$)</label>
            <input 
              type="number" 
              value={precoVenda}
              onChange={(e) => setPrecoVenda(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
          </div>

          <div className="pt-6 border-t border-zinc-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400">Faturamento Bruto:</span>
              <span className="text-xl font-semibold text-white">R$ {faturamento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Lucro Líquido Estimado:</span>
              <span className="text-2xl font-bold text-neon-green">R$ {lucroEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          <button 
            onClick={handleGetAiTip}
            disabled={loadingAi}
            className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700 text-yellow-400 text-xs font-bold py-2 rounded uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            {loadingAi ? 'CARREGANDO DICA...' : '✨ OBTER DICA DO COACH IA'}
          </button>
          
          {aiTip && (
            <div className="mt-4 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-lg text-sm italic text-yellow-100">
              "{aiTip}"
            </div>
          )}
        </div>
      </div>

      {/* Calculadora de Pedido */}
      <div className="bg-purple-premium p-8 rounded-2xl shadow-2xl transition-all hover:shadow-neon-green/5 border border-white/5 relative overflow-hidden">
        {/* Unit Price Highlight */}
        <div className="absolute top-0 right-0 bg-yellow-400 text-black px-6 py-2 rounded-bl-3xl font-black shadow-lg">
          <span className="text-2xl tracking-tighter">R$ 99</span>
          <span className="text-[10px] block uppercase -mt-1 opacity-80">Por Unidade</span>
        </div>

        <div className="flex items-center gap-3 mb-6 pt-4">
          <div className="bg-white/10 p-2 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white uppercase italic">Inicie seu Pedido</h3>
        </div>

        <div className="space-y-6">
          <p className="text-zinc-300 text-sm leading-relaxed">
            Comece com o <span className="text-white font-bold">Kit Iniciante (3 unidades) por R$ 297</span>. 
            A partir dele, você pode adicionar quantas unidades extras quiser pelo mesmo valor promocional de parceiro.
          </p>

          <div className="bg-black/30 p-4 rounded-xl border border-white/10">
            <label className="block text-sm font-black text-neon-green mb-2 uppercase">Quantas unidades deseja?</label>
            <input 
              type="number" 
              value={qtdCompra}
              min="3"
              onChange={(e) => setQtdCompra(Math.max(3, parseInt(e.target.value) || 3))}
              className="w-full bg-white/5 border-2 border-white/20 text-white rounded-lg p-4 text-2xl font-black focus:outline-none focus:border-neon-green transition-colors"
            />
            <div className="flex justify-between items-center mt-3">
               <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Mínimo: 3 unidades</p>
               <p className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">Valor Unitário: R$ 99,00</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <div className="flex flex-col items-center mb-6">
              <span className="text-zinc-400 text-xs font-bold uppercase mb-1">Investimento Total no Pedido:</span>
              <span className="text-5xl font-black text-white tracking-tighter">R$ {totalPedido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            
            <a 
              href="https://wa.me/SEUNUMERO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-neon-green hover:bg-[#00e65c] text-black font-extrabold py-5 rounded-2xl text-xl uppercase transition-all transform hover:scale-105 active:scale-95 animate-cta shadow-[0_0_20px_rgba(0,255,102,0.4)]"
            >
              Garantir Meu Kit Agora
            </a>
            
            <p className="text-center text-[10px] text-white/40 mt-4 uppercase font-bold tracking-[0.2em]">
              Pagamento via PIX ou Cartão em até 12x
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
