import { BusinessConfig, Product, ProcessMetric, FAQItem, Differential } from '../types';

export const BUSINESS: BusinessConfig = {
  name: 'Forno Nobile Pizzaria',
  subtitle: 'Pizzaria Artesanal',
  phoneDisplay: '(11) 99999-0000',
  whatsappNumber: '5511999990000',
  whatsappUrl: 'https://wa.me/5511999990000',
  address: 'Rua das Oliveiras, 248 - Centro',
  cityState: 'São Paulo - SP',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+das+Oliveiras,+248+-+Centro,+S%C3%A3o+Paulo+-+SP',
  instagramHandle: '@fornonobile.pizzaria',
  instagramUrl: 'https://instagram.com',
  commercialDisclaimer:
    'Projeto demonstrativo desenvolvido pela CF Web Studio. Marca, produtos, preços e informações utilizados exclusivamente para fins de apresentação.',
};

export const PROCESS_METRICS: ProcessMetric[] = [
  {
    value: '48h',
    label: 'Fermentação lenta',
    description: 'Massa maturada a frio por dois dias, garantindo digestibilidade ímpar e bordas incrivelmente aeradas.',
  },
  {
    value: '480°C',
    label: 'Forno em alta temperatura',
    description: 'Câmara refratária alimentada por lenha certificada para gerar o choque térmico perfeito.',
  },
  {
    value: '90s',
    label: 'Cocção aproximada',
    description: 'O tempo preciso para caramelizar a crosta, derreter a mozzarella e preservar o frescor dos botânicos.',
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'fermentacao',
    title: 'Fermentação lenta',
    description: 'Processo natural de 48 horas que desenvolve aromas complexos e leveza incomparável.',
  },
  {
    id: 'ingredientes',
    title: 'Ingredientes selecionados',
    description: 'Farinha tipo 00 importada, tomates San Marzano e laticínios artesanais rigorosamente selecionados.',
  },
  {
    id: 'preparo',
    title: 'Preparo artesanal',
    description: 'Abertura manual disco a disco, mantendo a estrutura celular da massa e a crocância ideal.',
  },
  {
    id: 'digital',
    title: 'Pedido digital simplificado',
    description: 'Experiência fluida e ágil com envio direto para o WhatsApp do nosso atendimento exclusivo.',
  },
];

export const MENU_PRODUCTS: Product[] = [
  // Assinaturas / Destaques
  {
    id: 'burrata-nobile',
    name: 'Burrata Nobile',
    category: 'destaques',
    description: 'Molho artesanal, mozzarella, burrata cremosa, tomate confit, pesto de manjericão e folhas frescas.',
    price: 72.9,
    priceLarge: 89.9,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85',
    isSignature: true,
    tags: ['Assinatura', 'Mais Pedida'],
    isPizza: true,
  },
  {
    id: 'tartufo',
    name: 'Tartufo',
    category: 'destaques',
    description: 'Mozzarella di bufala, cogumelos frescos salteados, creme de trufas negras, lascas de parmesão e fio de azeite trufado.',
    price: 76.9,
    priceLarge: 94.9,
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85',
    isSignature: true,
    tags: ['Assinatura', 'Exclusiva'],
    isPizza: true,
  },
  {
    id: 'diavola',
    name: 'Diavola',
    category: 'destaques',
    description: 'Molho artesanal de tomates San Marzano, mozzarella, pepperoni artesanal e toque aromático picante com peperoncino.',
    price: 64.9,
    priceLarge: 79.9,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=85',
    isSignature: true,
    tags: ['Assinatura', 'Toque Picante'],
    isPizza: true,
  },

  // Clássicas
  {
    id: 'margherita',
    name: 'Margherita',
    category: 'classicas',
    description: 'Molho de tomate San Marzano artesanal, mozzarella fior di latte, manjericão fresco e azeite extravirgem.',
    price: 58.9,
    priceLarge: 72.9,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1000&q=85',
    tags: ['Clássica Italiana'],
    isPizza: true,
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    category: 'classicas',
    description: 'Massa artesanal, generosa camada de mozzarella de cura especial e fatias crocantes de pepperoni selecionado.',
    price: 62.9,
    priceLarge: 77.9,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1000&q=85',
    tags: ['Favorita'],
    isPizza: true,
  },
  {
    id: 'quatro-queijos',
    name: 'Quatro Queijos',
    category: 'classicas',
    description: 'Combinação equilibrada de mozzarella artesanal, gorgonzola cremoso, provolone curado e parmesão ralado.',
    price: 66.9,
    priceLarge: 82.9,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=1000&q=85',
    tags: ['Tradicional'],
    isPizza: true,
  },
  {
    id: 'calabresa',
    name: 'Calabresa Artesanal',
    category: 'classicas',
    description: 'Molho de tomate artesanal, calabresa especial fatiada fina, cebola roxa marinada e azeitonas pretas chilenas.',
    price: 59.9,
    priceLarge: 74.9,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1000&q=85',
    tags: ['Tradicional'],
    isPizza: true,
  },

  // Especiais
  {
    id: 'prosciutto',
    name: 'Prosciutto & Rúcula',
    category: 'especiais',
    description: 'Mozzarella fior di latte, presunto cru tipo Parma em fatias translúcidas, rúcula fresca da horta e redução balsâmica.',
    price: 74.9,
    priceLarge: 91.9,
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=1000&q=85',
    tags: ['Especial', 'Artesanal'],
    isPizza: true,
  },

  // Doces
  {
    id: 'chocolate-com-morango',
    name: 'Chocolate com Morango',
    category: 'doces',
    description: 'Ganache de chocolate meio amargo 54% cacau belga com morangos frescos laminados sobre massa levemente crocante.',
    price: 49.9,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1000&q=85',
    tags: ['Doce Artesanal'],
    isPizza: false,
  },
  {
    id: 'tiramisu',
    name: 'Tiramisù Tradizionale',
    category: 'doces',
    description: 'Sobremesa clássica italiana com biscoitos savoiardi banhados em café espresso, creme de mascarpone aveludado e cacau puro.',
    price: 34.9,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85',
    tags: ['Receita Italiana'],
    isPizza: false,
  },

  // Bebidas
  {
    id: 'cerveja-artesanal',
    name: 'Cerveja Artesanal IPA',
    category: 'bebidas',
    description: 'Rótulo artesanal selecionado (500ml), aromas cítricos de lúpulo fresco e amargor equilibrado perfeito com pizzas encorpadas.',
    price: 24.9,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1000&q=85',
    tags: ['Craft Beer', '500ml'],
    isPizza: false,
  },
  {
    id: 'refrigerante',
    name: 'Refrigerante Orgânico / Tradicional',
    category: 'bebidas',
    description: 'Lata 350ml gelada. Opções disponíveis: Coca-Cola, Guaraná Antarctica ou Tônica artesanal.',
    price: 8.9,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1000&q=85',
    tags: ['350ml'],
    isPizza: false,
  },
  {
    id: 'agua-mineral',
    name: 'Água Mineral San Pellegrino',
    category: 'bebidas',
    description: 'Garrafa de vidro 505ml com ou sem gás, fonte termal italiana com pureza cristalina.',
    price: 14.9,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1000&q=85',
    tags: ['505ml', 'Importada'],
    isPizza: false,
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Forno a Lenha Refratário',
    category: 'O Fogo',
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=1000&q=85',
    span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Abertura Manual da Massa',
    category: 'Artesanato',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=85',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Pizzas Recém-Saídas do Forno',
    category: 'Assinatura',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1000&q=85',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Ingredientes Botânicos & Azeite',
    category: 'Frescor',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1000&q=85',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Burrata Cremosa & Pesto',
    category: 'Laticínios',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1000&q=85',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-6',
    title: 'Ambiente & Mesa Posta',
    category: 'Experiência',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=85',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Como faço meu pedido?',
    answer:
      'Você pode explorar o nosso cardápio interativo, personalizar seus sabores com tamanho e observações, e clicar em "Enviar pedido pelo WhatsApp". A sua comanda detalhada será gerada automaticamente para o nosso canal de atendimento exclusivo.',
  },
  {
    question: 'Vocês trabalham com delivery?',
    answer:
      'Sim! Atendemos via entrega rápida com embalagens térmicas especiais desenvolvidas para manter a temperatura do forno e a textura crocante da massa até a sua mesa.',
  },
  {
    question: 'Posso retirar meu pedido?',
    answer:
      'Com certeza. Você pode optar pela modalidade de Retirada durante a montagem do pedido e buscar suas pizzas quentinhas diretamente em nosso balcão.',
  },
  {
    question: 'Como consultar o horário de atendimento?',
    answer: 'Consulte o horário de atendimento pelo WhatsApp diretamente com nossa equipe de concierge gastronômico.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Nesta versão demonstrativa, o pedido é montado no site e encaminhado diretamente ao WhatsApp do atendimento, onde as formas de pagamento disponíveis são informadas para finalização.',
  },
];

export const CATEGORIES_CONFIG = [
  { id: 'destaques', label: 'Destaques' },
  { id: 'classicas', label: 'Clássicas' },
  { id: 'especiais', label: 'Especiais' },
  { id: 'doces', label: 'Doces' },
  { id: 'bebidas', label: 'Bebidas' },
] as const;
