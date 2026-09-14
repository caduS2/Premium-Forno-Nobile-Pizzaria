# Forno Nobile — Pizzaria Artesanal (Premium Demo Site feito em menos de 30 minutos por mim)

Projeto demonstrativo Premium de uma pizzaria artesanal contemporânea, desenvolvido pela **CF Web Studio** para apresentação comercial de experiência digital, cardápio interativo e fluxo de montagem de pedidos.

> **Aviso Institucional:**  
> A marca *Forno Nobile*, bem como seus produtos, preços, endereços e informações de contato são fictícios e utilizados exclusivamente para fins de demonstração e apresentação do portfólio da **CF Web Studio**.

---

## 🍕 Visão Geral

- **Experiência Visual Premium:** Design escuro e refinado com acentos dourados (`#C9973A`), tipografia editorial e contrastes calibrados (WCAG AA).
- **Cardápio Interativo:** Filtros por categorias (Pizzas Clássicas, Especiais, Entradas, Bebidas, Sobremesas) com busca textual em tempo real.
- **Personalização de Produto:** Modal com seleção de tamanhos (Média 4 fatias / Grande 8 fatias), cálculo dinâmico de preços e campo de observações culinárias.
- **Carrinho & Drawer Lateral:** Controle de quantidades, visualização de subtotal dinâmico, alternância entre modalidades **Delivery** (com endereço completo) e **Retirada no Balcão**.
- **Finalização via WhatsApp:** Comanda estruturada com quebras de linha e emojis profissionais, gerando mensagem limpa para fechamento sem fricção.
- **Seções Institucionais:** História e processo artesanal (fermentação lenta de 48h, farinha tipo 00 italiana, forno a lenha refratário a 450°C), galeria de fotos, FAQ retrátil e dados de localização com integração ao Google Maps.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** — Interface declarativa e componentes modulares.
- **TypeScript (~5.8)** — Tipagem estrita de dados e contratos de negócio.
- **Vite 6** — Empacotador rápido com suporte a assets relativos (`base: './'`).
- **Tailwind CSS v4** — Framework utilitário de estilização responsiva.
- **Motion (Framer Motion)** — Micro-interações e transições fluidas.
- **Lucide React** — Conjunto consistente de ícones vetoriais.

---

## 🚀 Instalação e Execução Local

### Pré-requisitos
- **Node.js** 18+ (recomendado 20+)
- **npm** ou gerenciador de pacotes equivalente

### 1. Clonar o repositório
```bash
git clone https://github.com/caduu-britto/forno-nobile-premium.git
cd forno-nobile-premium
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar o servidor de desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:3000`.

### 4. Gerar build de produção
```bash
npm run build
```
Os arquivos estáticos compilados e minificados serão gerados na pasta `dist/`.

### 5. Pré-visualizar o build localmente
```bash
npm run preview
```

---

## 📁 Estrutura Principal do Projeto

```
forno-nobile-premium/
├── index.html                  # Ponto de entrada HTML e metadados SEO/OG
├── package.json                # Dependências e scripts de execução
├── vite.config.ts              # Configuração do Vite com base relativa
├── tsconfig.json               # Configurações do compilador TypeScript
├── metadata.json               # Metadados do applet
├── src/
│   ├── main.tsx                # Entrada principal do React
│   ├── App.tsx                 # Composição dos módulos da landing page
│   ├── index.css               # Estilos globais e Tailwind CSS
│   ├── types.ts                # Interfaces TypeScript (Produto, Item do Carrinho, etc.)
│   ├── data/
│   │   └── business.ts         # Dados de produtos, métricas, FAQ e dados da empresa
│   └── components/
│       ├── Header.tsx          # Barra de navegação com status e atalho do carrinho
│       ├── Hero.tsx            # Dobra de entrada com CTAs principais
│       ├── ProcessSection.tsx  # Métricas do processo artesanal (48h fermentação, 450°C)
│       ├── MenuSection.tsx     # Cardápio interativo com filtros e busca
│       ├── ProductCard.tsx     # Card individual de item gastronômico
│       ├── ProductCustomizeModal.tsx # Modal de escolha de tamanho e observações
│       ├── CartDrawer.tsx      # Drawer lateral de pedido e envio formatado ao WhatsApp
│       ├── AboutSection.tsx    # Seção com história e tradição da pizzaria
│       ├── GallerySection.tsx  # Galeria de fotos do ambiente e ingredientes
│       ├── ClubSection.tsx     # Clube de benefícios Nobile Privilège
│       ├── LocationSection.tsx # Endereço, mapa, horário e telefones
│       ├── FAQSection.tsx      # Perguntas frequentes interativas
│       ├── FinalCTA.tsx        # Seção de chamada final para pedidos
│       └── Footer.tsx          # Rodapé institucional com aviso de autoria da CF Web Studio
```

---

## 🌐 Deploy e Hospedagem

O projeto é uma Single Page Application (SPA) **100% estática no lado cliente** e portátil:
- **GitHub Pages:** Totalmente compatível graças ao caminho relativo (`base: './'`). Basta publicar o conteúdo da pasta `dist/` (via GitHub Actions ou branch `gh-pages`).
- **Vercel / Netlify / Cloudflare Pages:** Basta conectar o repositório e utilizar `npm run build` como comando de build e `dist` como diretório de saída.
- **Google Cloud Run:** Deploy em contêiner ou serviço gerenciado direto via Google AI Studio.

---

## 📄 Créditos e Licença

Desenvolvido por **CF Web Studio**.  
Todos os direitos reservados à equipe de desenvolvimento.
