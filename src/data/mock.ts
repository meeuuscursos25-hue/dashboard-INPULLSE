export const mockData = {
  periodo: "8 ago 2025 – 6 set 2025",
  investimento: 827.03,
  resultado: 12,
  custoResultado: 68.92,
  retorno: 3471.44,
  cpm: 45.97,
  ctr: 3.73,
  funil: {
    tipo: "agencia_b2b",
    etapas: [
      { nome: "Impressões", valor: 25000, custo: "R$ 35,00", subCusto: "CPM" },
      { nome: "Cliques no link", valor: 650, custo: "R$ 1,34", subCusto: "CPC" },
      { nome: "Leads", valor: 145, custo: "R$ 6,03", subCusto: "CPL" },
      { nome: "MQL", valor: 42, custo: "R$ 20,83", subCusto: "Custo por MQL" },
      { nome: "Reuniões agendadas", valor: 15, custo: "R$ 58,33", subCusto: "Custo por agendada" },
      { nome: "Reuniões realizadas", valor: 12, custo: "R$ 72,91", subCusto: "Custo por realizada" },
      { nome: "Vendas", valor: 3, custo: "R$ 291,66", subCusto: "CAC" },
    ]
  },
  demograficos: {
    faixaEtaria: [
      { label: "25-34", valor: 95564, percent: 53.2, color: '#8B5CF6' },
      { label: "18-24", valor: 4900, percent: 27.2, color: '#D4F53C' },
      { label: "35-44", valor: 3200, percent: 16.2, color: '#A8C820' },
      { label: "45-54", valor: 1800, percent: 3.0, color: '#9B8CF6' },
      { label: "Outros", valor: 900, percent: 0.4, color: '#2A2A2A' },
    ]
  },
  linhaDoTempo: [
    { mes: "mai. 2025", gasto: 104.85, compras: 1 },
    { mes: "jun. 2025", gasto: 285.76, compras: 6 },
    { mes: "jul. 2025", gasto: 566.67, compras: 28 },
    { mes: "ago. 2025", gasto: 771.96, compras: 12 },
    { mes: "set. 2025", gasto: 194.30, compras: 7 },
  ],
  funilVideo: [
    { label: "Vv 25%", pct: "8,49%", color: '#D4F53C', textColor: '#0D0D0D' },
    { label: "Vv 50%", pct: "4,78%", color: '#E1F76D', textColor: '#0D0D0D' },
    { label: "Vv 75%", pct: "4,11", color: '#EAF99E', textColor: '#0D0D0D' },
    { label: "Vv 100%", pct: "1,37%", color: '#F4FBCE', textColor: '#0D0D0D' },
  ],
  visaoGeral: [
    { camp: "[PROMO] Oferta Direta", msg: 120, ctr: "2.5%", quality: "Acima da média", link: "8.5%", checko: "12", hook: "2.1s", hold: "14%", valor: "R$ 5.400,00", custo: "R$ 45,00" },
    { camp: "Remarketing Oferta", msg: 45, ctr: "4.1%", quality: "Na média", link: "11.2%", checko: "8", hook: "1.8s", hold: "22%", valor: "R$ 1.350,00", custo: "R$ 30,00" }
  ],
  criativos: [
    { id: 1, imagem: "https://picsum.photos/seed/ad1/100/100", ctr: 8.53, cpc: 1.20, conversoes: 7, custoConv: 45.00 },
    { id: 2, imagem: "https://picsum.photos/seed/ad2/100/100", ctr: 5.21, cpc: 1.80, conversoes: 3, custoConv: 78.00 },
  ]
};
