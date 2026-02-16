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
    <div className="flex flex-col gap-6">
      {/* Lucro Mensal */}
      <div className="bg-zinc-900 border border-white/10 p-6 rounded-3xl shadow-xl">
        <h3 className="text-xl font-black text-white italic uppercase mb-6 flex items-center gap-2">
          <span className="text-neon-green">💰</span> Lucro Mensal
        </h3>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-black text-zinc-500 uppercase mb-2">Vendas / Mês</label>
              <input 
                type="number" 
                value={qtdVenda}
                onChange={(e) => setQtdVenda(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl p-3 text-lg font-bold focus:border-neon-green outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-zinc-500 uppercase mb-2">Preço (R$)</label>
              <input 
                type="number" 
                value={precoVenda}
                onChange={(e) => setPrecoVenda(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl p-3 text-lg font-bold focus:border-neon-green outline-none"
              />
            </div>
          </div>

          <div className="bg-neon-green/10 p-5 rounded-2xl border border-neon-green/30 text-center">
            <span className="text-[10px] text-zinc-400 font-black uppercase block mb-1">LUCRO LÍQUIDO</span>
            <span className="text-4xl font-black text-neon-green">R$ {lucroEstimado.toLocaleString('pt-BR')}</span>
          </div>

          <button 
            onClick={handleGetAiTip}
            disabled={loadingAi}
            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-yellow-400 text-[10px] font-black py-3 rounded-xl uppercase flex items-center justify-center gap-2"
          >
            {loadingAi ? 'CARREGANDO...' : '✨ DICA DA INTELIGÊNCIA ARTIFICIAL'}
          </button>
          
          {aiTip && (
            <div className="p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl text-xs italic text-yellow-100">
              "{aiTip}"
            </div>
          )}
        </div>
      </div>

      {/* Pedido */}
      <div className="bg-purple-premium p-6 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-2 rounded-bl-2xl font-black text-sm">
          R$ 99/unid
        </div>

        <h3 className="text-xl font-black text-white italic uppercase mb-6 pt-2">Seu Pedido</h3>
        
        <div className="space-y-6">
          <div className="bg-black/40 p-5 rounded-2xl">
            <label className="block text-[10px] text-neon-green font-black mb-2 uppercase">Quantas unidades?</label>
            <input 
              type="number" 
              value={qtdCompra}
              min="3"
              onChange={(e) => setQtdCompra(Math.max(3, parseInt(e.target.value) || 3))}
              className="w-full bg-white/5 border border-white/20 text-white rounded-xl p-4 text-3xl font-black outline-none focus:border-neon-green"
            />
          </div>

          <div className="text-center py-4">
            <span className="text-zinc-400 text-[10px] font-black uppercase block mb-1">Investimento Total:</span>
            <span className="text-5xl font-black text-white">R$ {totalPedido.toLocaleString('pt-BR')}</span>
          </div>
          
          <a 
            href={getLinkWithParams(WHATSAPP_LINK)} 
            className="block w-full text-center bg-neon-green text-black font-black py-5 rounded-2xl text-xl uppercase tracking-tighter"
          >
            FECHAR PEDIDO AGORA
          </a>
        </div>
      </div>
    </div>
  );
};