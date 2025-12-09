# SCAAGP - Sistema de Controle Automatizado de Alimentação de Gado no Pasto

Frontend moderno estilo SaaS para controle automatizado de alimentação de sal para gado de corte usando Raspberry Pi e IoT.

## 📋 Sobre o Projeto

O SCAAGP é um sistema inovador que automatiza a alimentação de sal mineral/proteico para bovinos no pasto. Através de cochos inteligentes controlados por Raspberry Pi, o sistema:

- 🎯 Libera a quantidade exata de sal para cada boi individual
- 📊 Monitora o consumo em tempo real
- ⚙️ Programa alimentações personalizadas por animal
- 🔔 Alerta sobre estoque baixo e falhas
- 📈 Gera relatórios detalhados de consumo

## 🚀 Tecnologias

- HTML5
- CSS3 (Design System personalizado)
- JavaScript Vanilla (ES6+)
- Node.js + Express
- SPA com roteamento por hash

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento (com nodemon)
npm run dev

# Executar em modo produção
npm start
```

O servidor rodará em `http://localhost:3000`

## Estrutura do Projeto

```
Frontend/
├── public/
│   ├── index.html
│   └── assets/
│       ├── css/
│       │   ├── main.css
│       │   └── base/
│       │       ├── reset.css
│       │       └── typography.css
│       └── js/
│           ├── app.js          # Carregamento de componentes
│           └── router.js       # Sistema de rotas SPA
├── src/
│   ├── components/
│   │   ├── navbar/             # Barra de navegação superior
│   │   └── menuLateral/        # Menu lateral com navegação
│   └── pages/
│       ├── home/               # Dashboard principal
│       ├── boi/                # Gestão de bois
│       ├── pecuarista/         # Gestão de usuários
│       ├── alimentacao/        # Programação de alimentação
│       ├── cochos/             # Gestão de cochos automatizados
│       ├── dispositivos/       # Gestão de Raspberry Pi
│       ├── historico/          # Histórico de alimentações
│       ├── relatorios/         # Relatórios e análises
│       └── login/              # Página de login
├── server.js                   # Servidor Express
└── package.json
```

## Funcionalidades

### Implementadas

- Design moderno estilo SaaS
- Sistema de design com variáveis CSS
- Layout responsivo
- SPA com navegação por hash
- Carregamento dinâmico de componentes
- Dashboard com estatísticas
- Tabelas com dados de exemplo
- Componentes reutilizáveis (cards, botões, badges)
- Animações e transições suaves
- Gradientes e sombras modernas
- Notificações no header
- Dropdown de perfil
- Menu lateral com submenus expansíveis

## Design System

### Cores Principais

- **Primary**: `#10b981` (Verde)
- **Secondary**: `#6366f1` (Índigo)
- **Accent**: `#f59e0b` (Âmbar)

### Componentes

- **Cards**: Containers com sombra e bordas arredondadas
- **Botões**: Primary, Secondary com estados hover
- **Badges**: Success, Warning, Info
- **Inputs**: Com estados de foco
- **Tables**: Responsivas com hover

## Rotas

- `#home` - Dashboard principal com estatísticas
- `#boi` - Gestão de bois e rebanho
- `#pecuarista` - Gestão de pecuaristas/usuários
- `#alimentacao` - Programação de alimentação automatizada
- `#cochos` - Monitoramento de cochos inteligentes
- `#dispositivos` - Gestão de Raspberry Pi e sensores IoT
- `#historico` - Histórico completo de alimentações
- `#relatorios` - Relatórios e análises de consumo
- `#login` - Autenticação de usuários

## Hardware

O sistema é projetado para trabalhar com:

- **Raspberry Pi** (3B+/4) - Controlador principal
- **Sensores de peso/nível** - Monitoramento de estoque
- **Atuadores** - Liberação controlada de sal
- **Tags RFID** (opcional) - Identificação individual dos bois

---

**Nota**: Este é um protótipo frontend.
