/**
 * Estrutura mínima para um SPA com roteamento por hash e carregamento via fetch.
 * 1. Cada rota aponta para um fragmento HTML dentro de pages/.
 * 2. Ao mudar o hash da URL (#home, #sobre...), o conteúdo correspondente é carregado.
 * 3. Você pode ampliar a lógica adicionando novas rotas ou manipulando estados.
 */

// Container principal onde o HTML das páginas será injetado.
const appElement = document.getElementById('app');

// Mapa de rotas: associe o identificador do hash ao arquivo HTML correspondente.
const routes = {
    home: '/src/pages/home/home.html',
    login: '/src/pages/login/login.html',
    boi:'/src/pages/boi/boi.html',
    pecuarista: '/src/pages/pecuarista/pecuarista.html',
    alimentacao: '/src/pages/alimentacao/alimentacao.html',
    cochos: '/src/pages/cochos/cochos.html',
    dispositivos: '/src/pages/dispositivos/dispositivos.html',
    historico: '/src/pages/historico/historico.html',
    relatorios: '/src/pages/relatorios/relatorios.html',
    perfil: '/src/pages/perfil/perfil.html',
};

// Cache simples para evitar novo fetch quando a página já foi carregada.
const pageCache = new Map();

// Normaliza o hash removendo o símbolo # e define 'home' como padrão quando vazio.
const sanitizeHash = (hash) => {
    const value = hash.replace(/^#/, '');
    return value || 'home';
};

// Mostra uma mensagem amigável quando algo não pode ser renderizado.
const renderFallback = (message) => {
    appElement.innerHTML = `<p>${message}</p>`;
};

// Busca o HTML da rota. Se já estiver no cache, devolve a versão armazenada.
const fetchPage = async (routeKey) => {
    if (pageCache.has(routeKey)) {
        return pageCache.get(routeKey);
    }

    const pagePath = routes[routeKey];
    if (!pagePath) {
        return null;
    }

    try {
        const response = await fetch(pagePath, { cache: 'no-cache' });
        if (!response.ok) {
            return null;
        }

        const html = await response.text();
        pageCache.set(routeKey, html);
        return html;
    } catch (error) {
        console.error(`Erro ao carregar ${pagePath}`, error);
        return null;
    }
};

// Atualiza o estado ativo do menu lateral
const updateActiveMenu = (currentHash) => {
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentHash}`) {
            link.classList.add('active');
        }
    });
};

// Controla o fluxo de renderização sempre que o hash muda ou quando a página inicia.
const renderRoute = async () => {
    const currentHash = sanitizeHash(window.location.hash);

    // Controla visibilidade de navbar e menu lateral
    if (currentHash === 'login') {
        document.body.classList.add('login-page');
    } else {
        document.body.classList.remove('login-page');
    }

    // Feedback visual enquanto a nova página é carregada.
    appElement.innerHTML = '<p>Carregando conteúdo...</p>';

    const pageContent = await fetchPage(currentHash);

    if (!pageContent) {
        renderFallback('Página não encontrada. Verifique se o arquivo existe em src/pages/.');
        return;
    }

    appElement.innerHTML = pageContent;
    
    // Atualiza o estado ativo do menu (exceto na página de login)
    if (currentHash !== 'login') {
        updateActiveMenu(currentHash);
    }
};

// Dispara a renderização ao trocar o hash manualmente ou via clique nos links do menu.
window.addEventListener('hashchange', renderRoute);
// Garante que uma rota válida seja renderizada assim que o documento estiver pronto.
window.addEventListener('DOMContentLoaded', renderRoute);
