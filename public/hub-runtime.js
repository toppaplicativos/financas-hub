    const CATEGORY = {"key":"financas","short":"FINANÇAS","label":"Finanças pessoais e organização","host":"finance.toppapps.online","title":"Soluções para organizar decisões financeiras com mais clareza.","description":"Guias e ferramentas digitais para reunir informações, escolher prioridades e construir uma rotina financeira possível.","accent":"#b34b3d","accent_soft":"#f6e9e5","hero_asset":"https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/assets/hero-financas-1.webp","hero_alt":"Ilustração editorial de organização financeira com caderno, moedas e gráfico","slides":[{"title":"Clareza antes de cortar tudo.","copy":"Comece entendendo entradas, saídas e decisões que merecem atenção no seu momento.","image":"https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/assets/hero-financas-1.webp","alt":"Destaque editorial 1 de FINANÇAS"},{"title":"Uma rotina financeira precisa caber na vida.","copy":"Escolha uma solução por objetivo e avance com um próximo passo observável.","image":"https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/assets/hero-financas-2.webp","alt":"Destaque editorial 2 de FINANÇAS"},{"title":"Organização também é reduzir ruído.","copy":"Reúna as informações essenciais e compare caminhos com mais tranquilidade.","image":"https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/assets/hero-financas-3.webp","alt":"Destaque editorial 3 de FINANÇAS"}],"collections":[["começar","Começar pela organização","Para colocar o mês em uma visão simples e possível."],["dividas","Lidar com dívidas","Para reunir obrigações e preparar decisões sem improviso."],["rotina","Criar uma rotina","Para acompanhar o dinheiro e revisar o que mudou."]],"products":[{"slug":"o-salario-sumiu","title":"O Salário Sumiu","subtitle":"Mapa do Dinheiro","description":"Liste o que entra, o que sai e o que não tem nome. Em 15 minutos o mapa do mês aparece.","objective":"Organização financeira","theme":"Visão do mês","audience":"Quem quer entender o próprio mês","format":"Guia digital + aplicação","delivery":"Entrega digital","price":27.9,"status":"live","priority":1,"collection":"começar","tags":["salário","dinheiro","gastos","mês","organização"],"featured":true,"cover":"https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/assets/covers/o-salario-sumiu.webp"},{"slug":"30-dias-organizar","title":"30 Dias Para Organizar Sua Vida Financeira","subtitle":"Ritmo de 30 Dias","description":"Uma ação curta por dia para ver, organizar, decidir e manter uma rotina possível.","objective":"Rotina e planejamento","theme":"Hábitos financeiros","audience":"Quem precisa de constância","format":"Plano de aplicação","delivery":"Entrega digital","price":37.9,"status":"live","priority":2,"collection":"rotina","tags":["30 dias","rotina","planejamento","hábitos","organizar"],"featured":true,"cover":"https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/assets/covers/30-dias-organizar.webp"},{"slug":"adeus-dividas","title":"Adeus Dívidas","subtitle":"Plano de Ataque às Dívidas","description":"Reúna obrigações, compare informações e prepare a próxima conversa com mais clareza.","objective":"Dívidas","theme":"Priorização","audience":"Quem precisa organizar obrigações","format":"Guia digital + aplicação","delivery":"Entrega digital","price":37.9,"status":"live","priority":3,"collection":"dividas","tags":["dívidas","obrigações","prioridade","negociação","acordo"],"featured":true,"cover":"https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/assets/covers/adeus-dividas.webp"},{"slug":"reserva-de-emergencia-do-zero","title":"Reserva de Emergência do Zero","subtitle":"Primeira Reserva","description":"Um caminho planejado para começar uma reserva com critérios, sem tratar metas financeiras como promessa de resultado.","objective":"Reserva e proteção","theme":"Planejamento","audience":"Quem quer começar do zero","format":"Guia digital","delivery":"Publicação em preparação","price":null,"status":"planned","priority":4,"collection":"começar","tags":["reserva","emergência","proteção","começar do zero"],"featured":false,"cover":"https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/assets/covers/reserva-de-emergencia-do-zero.webp"}],"faqs":[["Como escolher uma solução?","Use o objetivo e o momento que mais se aproximam da sua necessidade. A página individual explica o que está incluído e o próximo passo."],["As soluções prometem resultado financeiro?","Não. Elas organizam informação, reflexão e aplicação. O resultado externo depende das suas decisões, contexto e execução."],["Como recebo o acesso?","As condições de acesso, pagamento e eventual garantia devem estar confirmadas na página oficial da oferta antes da compra."]]};
    const SUPPORT_EMAIL = 'suporte@toppapps.online';
    let pathParts = location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
    let params = new URLSearchParams(location.search);
    const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
    const money = (value) => value == null ? 'Preço a confirmar' : value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    const findProduct = (slug) => CATEGORY.products.find((product) => product.slug === slug);
    const initials = (title) => title.split(/\s+/).filter(Boolean).slice(0,2).map((part) => part[0]).join('').toUpperCase();
    const statusLabel = (status) => status === 'live' ? 'Em produção · QA pendente' : 'Planejada · não publicada';
    const productHref = (product) => `/p/${product.slug}`;
    function header() {
      return `<header class="site-header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Toppapps, início da loja de ${esc(CATEGORY.short)}"><span class="brand-mark" aria-hidden="true">${esc(CATEGORY.short.slice(0,2))}</span><span>TOPPAPPS <em>· ${esc(CATEGORY.short)}</em></span></a><div class="header-search"><label class="sr-only" for="header-search">Buscar soluções</label><input id="header-search" type="search" placeholder="Buscar soluções" autocomplete="off" list="search-suggestions"></div><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button><nav class="main-nav" id="main-nav" aria-label="Navegação principal"><a href="/#catalogo">Soluções</a><a href="/#colecoes">Coleções</a><a href="/#destaques">Destaques editoriais</a><a href="/suporte">Suporte</a></nav></div></header>`;
    }
    function footer() {
      return `<footer class="site-footer wrap"><span>TOPPAPPS · ${esc(CATEGORY.short)} · Loja de soluções</span><span><a href="/suporte">Suporte</a> · <a href="/#catalogo">Ver soluções</a> · ${SUPPORT_EMAIL}</span></footer>`;
    }
    function confidence() {
      return `<section class="confidence" aria-label="Informações de compra e suporte"><div class="wrap confidence-grid"><div class="confidence-item"><b aria-hidden="true">01</b><span>Entrega digital</span></div><div class="confidence-item"><b aria-hidden="true">02</b><span>Acesso após confirmação</span></div><div class="confidence-item"><b aria-hidden="true">03</b><span>Informações da oferta na página oficial</span></div><div class="confidence-item"><b aria-hidden="true">04</b><span>Suporte por canal oficial</span></div></div></section>`;
    }
    function carousel() {
      const slides = CATEGORY.slides;
      return `<div class="hero-visual"><img id="hero-image" class="${(slides[0].image.endsWith('.png') || slides[0].image.endsWith('.webp')) ? 'alpha-asset' : ''}" src="${esc(slides[0].image)}" alt="${esc(slides[0].alt)}" width="900" height="520" fetchpriority="high"><div class="carousel" aria-label="Destaques da categoria"><div class="carousel-caption" aria-live="polite"><strong id="slide-title">${esc(slides[0].title)}</strong><span id="slide-copy">${esc(slides[0].copy)}</span></div><div class="carousel-controls"><button id="slide-prev" type="button" aria-label="Destaque anterior">‹</button><button id="slide-next" type="button" aria-label="Próximo destaque">›</button><div class="carousel-dots" role="tablist" aria-label="Escolher destaque">${slides.map((_, index) => `<button type="button" role="tab" aria-label="Destaque ${index+1}" aria-selected="${index === 0}" class="${index === 0 ? 'active' : ''}" data-slide="${index}"></button>`).join('')}</div></div></div></div>`;
    }
    function hubHero() {
      return `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow">LOJA TOPPAPPS · ${esc(CATEGORY.short)}</p><h1>${esc(CATEGORY.title)}</h1><p class="hero-lede">${esc(CATEGORY.description)}</p><div class="hero-actions"><a class="button" href="#catalogo">Explorar soluções</a><a class="button secondary" href="/suporte">Acessar suporte</a></div><p class="hero-note">A loja organiza a escolha. A página de cada solução explica o próximo passo.</p></div>${carousel()}</div></section>`;
    }
    function collectionSection() {
      return `<section class="section" id="colecoes"><div class="wrap"><div class="section-head"><p class="eyebrow">NAVEGAÇÃO POR INTENÇÃO</p><h2>Encontre um ponto de partida para o seu momento.</h2><p class="copy">As coleções agrupam soluções por objetivo real do catálogo e levam você direto ao recorte escolhido.</p></div><div class="collection-row">${CATEGORY.collections.map(([slug,title,description], index) => `<a class="collection-card" href="/categoria/${slug}"><span class="index">0${index+1} · COLEÇÃO</span><h3>${esc(title)}</h3><p>${esc(description)}</p></a>`).join('')}</div></div></section>`;
    }
    function featureCard(product) {
      return `<article class="feature-card"><div class="feature-media" aria-hidden="true">${esc(initials(product.title))}</div><div class="feature-body"><span class="eyebrow">SELEÇÃO EDITORIAL</span><h3>${esc(product.title)}</h3><p>${esc(product.description)}</p><div class="feature-footer"><strong>${product.price == null ? 'Em preparação' : money(product.price)}</strong><a class="button secondary" href="${productHref(product)}">Conhecer</a></div></div></article>`;
    }
    function highlights() {
      const products = CATEGORY.products.filter((product) => product.featured);
      if (!products.length) return '';
      return `<section class="section light" id="destaques"><div class="wrap"><div class="section-head"><p class="eyebrow">DESTAQUES EDITORIAIS</p><h2>Uma seleção para começar sem percorrer o catálogo inteiro.</h2><p class="copy">Esta é uma seleção editorial da categoria. Não representa ranking de vendas ou avaliações.</p></div><div class="feature-grid">${products.map(featureCard).join('')}</div></div></section>`;
    }
    function optionsFrom(field) { return [...new Set(CATEGORY.products.map((product) => product[field]).filter(Boolean))]; }
    function filterPanel() {
      const objectives = optionsFrom('objective'), formats = optionsFrom('format');
      return `<div class="filter-panel" id="filter-panel"><div class="filter-groups"><div class="filter-group"><h3>Objetivo</h3>${objectives.map((value) => `<label class="filter-option"><input type="checkbox" data-filter-field="objective" value="${esc(value)}">${esc(value)}</label>`).join('')}</div><div class="filter-group"><h3>Formato</h3>${formats.map((value) => `<label class="filter-option"><input type="checkbox" data-filter-field="format" value="${esc(value)}">${esc(value)}</label>`).join('')}</div><div class="filter-group"><h3>Estado</h3><label class="filter-option"><input type="checkbox" data-filter-field="status" value="live">Em produção</label><label class="filter-option"><input type="checkbox" data-filter-field="status" value="planned">Em preparação</label></div></div><div class="active-filters" id="active-filters"></div><div class="actions"><button class="button secondary" type="button" id="clear-filters">Limpar filtros</button></div></div>`;
    }
    function catalogCard(product) {
      const live = product.status === 'live';
      return `<article class="product-card" data-product="${esc(product.slug)}"><div class="product-cover"><img class="${(product.cover.endsWith('.png') || product.cover.endsWith('.webp')) ? 'alpha-asset' : ''}" src="${esc(product.cover)}" alt="Capa de ${esc(product.title)}" width="900" height="520" loading="lazy"></div><div class="product-body"><span class="status ${live ? 'live' : 'planned'}">${esc(statusLabel(product.status))}</span><h3>${esc(product.title)}</h3><p class="product-subtitle">${esc(product.subtitle)}</p><p class="product-description">${esc(product.description)}</p><div class="product-meta"><span>${esc(product.format)}</span><span>${esc(product.delivery)}</span></div><div class="product-footer"><div class="product-price">${live ? `<small>Valor informado</small>${money(product.price)}` : `<small>Estado comercial</small>Em preparação`}</div>${live ? `<a class="button" href="${productHref(product)}">Comprar</a>` : `<a class="button secondary" href="${productHref(product)}">Ver detalhes</a>`}</div></div></article>`;
    }
    function catalogSection(initialCollection = '') {
      return `<section class="section catalog-shell" id="catalogo"><div class="wrap"><div class="section-head"><p class="eyebrow">CATÁLOGO DA CATEGORIA</p><h2>Compare soluções e escolha o próximo passo.</h2><p class="copy">Pesquise por nome, tema, objetivo, público ou formato. Os estados e valores exibidos são os registrados para esta categoria.</p></div><div class="catalog-toolbar" role="search"><div class="search-field"><label for="catalog-search">Buscar soluções</label><input id="catalog-search" type="search" placeholder="Nome, tema ou necessidade" autocomplete="off" list="search-suggestions" value="${esc(params.get('q') || '')}"></div><button class="tool-button" type="button" id="filter-toggle" aria-expanded="false" aria-controls="filter-panel">Filtros <span id="filter-count"></span></button><div class="select-field"><label for="sort-select">Ordenar</label><select id="sort-select"><option value="recommended">Recomendadas</option><option value="recent">Mais recentes</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option><option value="title">Nome</option></select></div></div>${filterPanel()}<div class="active-filters" id="toolbar-filters"></div><div class="result-summary"><strong id="result-count">0 soluções</strong><span>Sem ranking inventado: a loja mostra estados reais e seleção editorial.</span></div><div class="catalog-grid" id="catalog-grid"></div><div class="empty-state" id="empty-state"><strong>Nenhuma solução corresponde a esta busca.</strong><span>Tente outro termo ou limpe os filtros. Você também pode explorar uma coleção ou falar com o suporte.</span><div class="actions"><button class="button secondary" type="button" id="empty-clear">Limpar busca e filtros</button><a class="button ghost" href="/suporte">Acessar suporte</a></div></div></div><datalist id="search-suggestions"></datalist></section>`;
    }
    function relatedSection() {
      return `<section class="section dark"><div class="wrap"><div class="section-head"><p class="eyebrow">COMBINAÇÕES POR OBJETIVO</p><h2>Se uma solução não basta, continue por uma coleção relacionada.</h2><p class="copy">As combinações abaixo são caminhos de navegação, não descontos ou bundles de compra. Abra a coleção e compare as opções disponíveis.</p></div><div class="related-grid">${CATEGORY.collections.map(([slug,title,description], index) => `<article class="related-card"><span class="index">0${index+1} · CAMINHO</span><h3>${esc(title)}</h3><p>${esc(description)}</p><a href="/categoria/${slug}">Ver soluções relacionadas</a></article>`).join('')}</div></div></section>`;
    }
    function supportSection() {
      return `<section class="section dark" id="suporte"><div class="wrap support-grid"><div><p class="eyebrow">SUPORTE E CONTATO</p><h2>Ajuda clara para acesso, pagamento e uso.</h2><p class="copy">Se encontrar uma dificuldade, informe a solução, a URL acessada e o dispositivo usado. Não envie senhas ou dados completos de pagamento.</p></div><div class="support-box"><h3>Canal oficial</h3><p><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p><div class="support-list"><div><b>01</b><span>Nome da solução e rota acessada.</span></div><div><b>02</b><span>Descrição objetiva do que aconteceu.</span></div><div><b>03</b><span>Orientação após a confirmação da compra.</span></div></div></div></div></section>`;
    }
    function faqSection() {
      return `<section class="section"><div class="wrap"><div class="section-head"><p class="eyebrow">DÚVIDAS REAIS</p><h2>Antes de escolher, confira as respostas.</h2></div><div class="faq-list">${CATEGORY.faqs.map(([question,answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('')}</div></div></section>`;
    }
    function hub(collection = '') {
      document.title = `${CATEGORY.short} | Toppapps`;
      return `${header()}<main id="main-content">${hubHero()}${confidence()}${collectionSection()}${highlights()}${catalogSection(collection)}${relatedSection()}${supportSection()}${faqSection()}</main>${footer()}`;
    }
    function routeHeader(title, eyebrow) { return `${header()}<main id="main-content"><section class="route-hero"><div class="wrap"><p class="eyebrow">${esc(eyebrow)} · ${esc(CATEGORY.short)}</p><h1>${esc(title)}</h1></div></section>`; }
    function productPage(product) {
      const live = product.status === 'live';
      document.title = `${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(product.title, 'SOLUÇÃO INDIVIDUAL')}<section class="section"><div class="wrap detail-grid"><article class="detail-card"><span class="status ${live ? 'live' : 'planned'}">${esc(statusLabel(product.status))}</span><h2>${esc(product.subtitle)}</h2><p>${esc(product.description)}</p><h3>O que esta solução organiza</h3><ul><li>Objetivo: ${esc(product.objective)}</li><li>Tema: ${esc(product.theme)}</li><li>Formato: ${esc(product.format)}</li><li>Entrega: ${esc(product.delivery)}</li></ul></article><aside class="detail-card"><h2>${live ? money(product.price) : 'Em preparação'}</h2><div class="route-note"><strong>${live ? 'Próximo passo' : 'Estado comercial'}</strong><br>${live ? 'A página explica o escopo antes de encaminhar para qualquer confirmação de compra.' : 'Esta oferta ainda não possui CTA de compra ou preço publicado.'}</div><div class="actions">${live ? `<a class="button" href="/app/${product.slug}">Conhecer a área da solução</a>` : `<span class="button disabled" aria-disabled="true">Compra não publicada</span>`}<a class="button secondary" href="/">Voltar ao catálogo</a></div></aside></div></section><section class="section light"><div class="wrap"><div class="section-head"><p class="eyebrow">TRANSPARÊNCIA</p><h2>A oferta separa descoberta, decisão e acesso.</h2><p class="copy">O catálogo ajuda a escolher. Esta página apresenta a solução. Condições de pagamento, garantia e acesso somente devem aparecer quando confirmadas no fluxo oficial.</p></div></div></section>${supportSection()}${footer()}</main>`;
    }
    function appPage(product) {
      const live = product.status === 'live';
      document.title = `Área de ${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(`Área de ${product.title}`, 'ÁREA DA SOLUÇÃO')}<section class="section"><div class="wrap"><div class="center-card"><p class="eyebrow">${live ? 'ACESSO DA SOLUÇÃO' : 'ROTA PLANEJADA'}</p><h1>${live ? 'Seu próximo passo fica nesta área.' : 'Esta área ainda não foi publicada.'}</h1><p>${live ? 'O acesso funcional e as instruções da oferta devem ser liberados somente após a confirmação no fluxo oficial.' : 'A rota faz parte do contrato da oferta, mas permanece indisponível enquanto bundle, suporte e QA não estiverem confirmados.'}</p><div class="actions">${live ? `<a class="button secondary" href="/obrigado/${product.slug}">Ver instruções de acesso</a>` : ''}<a class="button secondary" href="/p/${product.slug}">Voltar para a solução</a></div></div></div></section>${supportSection()}${footer()}</main>`;
    }
    function thanksPage(product) {
      const live = product.status === 'live';
      document.title = `Acesso a ${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(`Acesso a ${product.title}`, 'ACESSO E PRÓXIMO PASSO')}<section class="center-route"><div class="wrap"><div class="center-card"><p class="eyebrow">${live ? 'INSTRUÇÕES DE ACESSO' : 'ROTA PLANEJADA'}</p><h1>${live ? 'As instruções aparecem após a confirmação.' : 'Esta página ainda não está publicada.'}</h1><p>${live ? 'Não há confirmação de compra nesta página. O acesso deve ser enviado pelo fluxo oficial da oferta depois que as condições forem aceitas.' : 'A página de obrigado faz parte do contrato, mas permanece planejada até a publicação completa da oferta.'}</p><div class="actions"><a class="button secondary" href="/">Voltar ao catálogo</a><a class="button ghost" href="/suporte">Acessar suporte</a></div></div></div></section>${footer()}</main>`;
    }
    function supportPage() {
      document.title = `Suporte | ${CATEGORY.short}`;
      return `${routeHeader('Ajuda para escolher, acessar e usar.', 'CENTRAL DE SUPORTE')}<section class="section"><div class="wrap detail-grid"><article class="detail-card"><h2>Antes de entrar em contato</h2><ul><li>Nome da solução e URL acessada.</li><li>Dispositivo e navegador usados.</li><li>Mensagem ou comportamento observado.</li><li>Se a confirmação de compra já aconteceu.</li></ul></article><article class="detail-card"><h2>Canal oficial</h2><p><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p><p>Não envie senhas, tokens ou dados completos de cartão. O suporte orienta acesso, pagamento, download e uso conforme o estado real da oferta.</p></article></div></section>${faqSection()}${footer()}</main>`;
    }
    function notFound() {
      document.title = `Página não encontrada | ${CATEGORY.short}`;
      return `${routeHeader('Este caminho não faz parte desta loja.', '404 · ROTA NÃO ENCONTRADA')}<section class="center-route"><div class="wrap"><div class="center-card"><p>Verifique a URL ou volte para o catálogo desta categoria. Nenhuma rota de outra loja é usada como fallback.</p><div class="actions"><a class="button" href="/">Voltar ao catálogo</a><a class="button secondary" href="/suporte">Acessar suporte</a></div></div></div></section>${footer()}</main>`;
    }
    function salesCss() {
      return `
        .has-offer-bar .site-header{top:52px;z-index:70}
        .offer-bar{position:sticky;top:0;z-index:80;background:#B91C1C;color:#fff;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.55rem 1rem;padding:.7rem 1rem;font-weight:700;font-size:.9rem;box-shadow:0 6px 18px rgba(185,28,28,.4)}
        .offer-bar-kicker{letter-spacing:.14em;font-size:.7rem}
        .offer-bar-clock{font-variant-numeric:tabular-nums;letter-spacing:.08em;background:rgba(0,0,0,.28);padding:.18rem .55rem;border-radius:6px;font-size:1.08rem}
        .offer-bar a{color:#fff!important;background:#1C1917!important;border-color:#1C1917!important}
        .offer-visit{margin:.55rem 0 0;font-weight:700;color:#FCA5A5;display:flex;align-items:center;gap:.45rem}
        .offer-visit .offer-bar-clock{background:#B91C1C;color:#fff}
        .sp-cta,.sp-offer .button,.hero-actions .sp-cta{background:#b34b3d!important;border-color:#b34b3d!important;color:#fff!important}
        .sp-hero h1{font-size:clamp(1.75rem,4.2vw,3.15rem);line-height:1.12;margin:.45rem 0 1rem;letter-spacing:-.04em}
        .sp-grid{display:grid;gap:1.6rem}
        @media(min-width:860px){.sp-grid{grid-template-columns:1.08fr .92fr;align-items:center}}
        .sp-solution{margin-top:1rem;border:1px solid #e5d4cf;background:#fff;border-left:4px solid var(--accent);border-radius:12px;padding:.95rem 1.05rem}
        .sp-solution strong{display:block;color:var(--accent);font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.35rem}
        .sp-solution p{margin:0;font-size:1.02rem;line-height:1.5;font-weight:650}
        .sp-proof{display:flex;flex-wrap:wrap;gap:.55rem;margin:1rem 0 0}
        .sp-proof span{border:1px solid #d7dbe3;padding:.32rem .7rem;border-radius:999px;font-size:.75rem}
        .sp-quote{background:#fff;border:1px solid #e5e7eb;padding:1rem;border-radius:14px;overflow:auto}
        .sp-quote img{width:44px;height:44px;border-radius:50%;object-fit:cover;float:left;margin:0 .75rem .4rem 0}
        .sp-quote p{margin:0 0 .4rem}
        .sp-quote footer{color:var(--muted);font-size:.82rem}
        .sp-dark{background:var(--deep);color:#fff}
        .sp-dark h2,.sp-offer h2{color:#fff}
        .sp-dark .copy,.sp-offer .copy{color:rgba(255,255,255,.74)}
        .sp-dark img{width:100%;border-radius:16px;object-fit:cover;height:320px}
        .sp-effect{margin-top:.9rem;border:1px solid #ead9d4;background:#f6e9e5;border-radius:10px;padding:.7rem .9rem;font-size:.88rem;font-weight:650}
        .sp-steps{display:grid;gap:.8rem;margin-top:1.4rem}
        @media(min-width:700px){.sp-steps{grid-template-columns:repeat(3,1fr)}}
        .sp-step{background:#fff;border:1px solid #e5e7eb;border-top:4px solid var(--accent);border-radius:12px;padding:1.1rem}
        .sp-letters{display:grid;gap:.7rem;margin-top:1.3rem}
        @media(min-width:700px){.sp-letters{grid-template-columns:repeat(4,1fr)}}
        .sp-letter{background:var(--paper);border:1px solid #e5e7eb;border-radius:12px;padding:1rem}
        .sp-letter span{display:grid;place-items:center;width:36px;height:36px;border-radius:8px;background:var(--accent);color:#fff;font-weight:800}
        .sp-app{display:grid;gap:1.4rem;align-items:center}
        @media(min-width:860px){.sp-app{grid-template-columns:1fr 1fr}}
        .sp-app.reverse .sp-copy{order:2}
        .sp-mock{display:flex;justify-content:center;align-items:center;min-height:280px;background:transparent}
        .sp-mock img{max-height:420px;width:auto;max-width:100%;object-fit:contain;background:transparent;box-shadow:none;height:auto;border-radius:0}
        .sp-box{border:1px solid #e5e7eb;border-radius:14px;padding:1rem;background:#fff;margin-top:1rem;font-size:.92rem;line-height:1.55}
        .sp-box p{margin:0 0 .45rem}
        .sp-box p:last-child{margin:0}
        .sp-box b{color:var(--accent)}
        .sp-guide{display:grid;gap:1.2rem;margin-top:1.6rem}
        @media(min-width:860px){.sp-guide{grid-template-columns:1.05fr .95fr;align-items:start}}
        .sp-guide-hero{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1rem 1rem 1.15rem}
        .sp-guide-hero img{display:block;width:100%;height:auto;aspect-ratio:3/4.2;object-fit:contain;object-position:top;border-radius:12px;margin-bottom:1rem;box-shadow:0 16px 36px rgba(22,28,34,.12);background:var(--paper)}
        .sp-guide-hero h3,.sp-guide-item h3{margin:0 0 .4rem;font-size:1.12rem;letter-spacing:-.03em;line-height:1.25}
        .sp-guide-side{display:grid;gap:.75rem}
        .sp-guide-item{display:grid;grid-template-columns:92px 1fr;gap:.9rem;align-items:center;background:#fff;border:1px solid var(--line);border-radius:14px;padding:.7rem}
        .sp-guide-item img{width:92px;height:122px;object-fit:cover;object-position:top;border-radius:8px;box-shadow:0 8px 16px rgba(22,28,34,.1);background:var(--paper)}
        @media(max-width:620px){.sp-guide-item{grid-template-columns:72px 1fr}.sp-guide-item img{width:72px;height:96px}}
        .sp-bens{display:grid;gap:.7rem;margin-top:1.3rem}
        @media(min-width:700px){.sp-bens{grid-template-columns:1fr 1fr}}
        .sp-ben{border:1px solid #e5e7eb;border-radius:12px;padding:1.1rem;background:#fff}
        .sp-faces{display:grid;gap:.8rem;margin-top:1.3rem}
        @media(min-width:800px){.sp-faces{grid-template-columns:repeat(3,1fr)}}
        .sp-offer{background:var(--deep);color:#fff;padding:2.4rem 0}
        .sp-stack{display:grid;gap:.55rem;margin:1.1rem 0}
        .sp-stack div{display:flex;justify-content:space-between;gap:1rem;border-bottom:1px solid rgba(255,255,255,.12);padding:.55rem 0;font-size:.92rem}
        .sp-price{font-size:2.4rem;font-weight:850;letter-spacing:-.04em;margin:.4rem 0}
        .sp-old{text-decoration:line-through;opacity:.55;margin-right:.4rem}
        .sp-seal{width:120px;height:120px;border-radius:50%;border:3px solid var(--accent);display:grid;place-items:center;text-align:center;font-weight:800;letter-spacing:.04em;color:var(--accent);background:var(--accent-soft);font-size:13px;line-height:1.2;margin-bottom:1.2rem}
        .app-shell{min-height:100vh;background:var(--paper);color:var(--ink)}
        .app-top{background:var(--deep);color:#fff;padding:18px 0 22px}
        .app-top h1{margin:0;font-size:1.4rem;letter-spacing:-.04em}
        .app-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px}
        .app-input{width:100%;min-height:44px;border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:#fff}
        .app-bar{height:10px;border-radius:99px;background:#ece8e4;overflow:hidden}
        .app-bar>span{display:block;height:100%;background:var(--accent)}
        .app-links{display:flex;flex-wrap:wrap;gap:14px;margin-top:14px;font-size:13px;font-weight:700}
        .app-links a{color:#e8c4b8;text-decoration:none}
        .kind-row{display:flex;flex:1 1 220px;gap:6px}
        .kind-chip{flex:1;min-height:44px;border:1px solid var(--line);background:#fff;border-radius:10px;font-weight:700;font-size:13px;color:var(--ink)}
        .kind-chip.on{background:var(--accent);border-color:var(--accent);color:#fff}
        .thanks{padding:48px 0 72px;max-width:720px}
        .thanks h1{font-size:clamp(1.7rem,4vw,2.6rem);letter-spacing:-.04em;line-height:1.12;margin:0 0 14px}
        .thanks-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
        .thanks-list{margin:0;padding-left:1.2rem;display:grid;gap:8px;line-height:1.5}
        @media(max-width:620px){.sp-dark img{height:220px}}
      `;
    }

    const SALARIO_PDF = 'https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/product/salario/guia-o-salario-sumiu.pdf';
    const SALARIO_A = 'https://raw.githubusercontent.com/toppaplicativos/financas-hub/1efe090036052e5cba84f8c990c3c234623cabfc/public/product/salario';
    const SALARIO_PAY = '#oferta';
    const salarioCta = (label) => `<a class="button sp-cta" href="${SALARIO_PAY}">${label}</a>`;

    function salarioSalesPage() {
      document.title = 'O Salário Sumiu | Finanças Toppapps';
      const A = SALARIO_A;
      const cta = salarioCta;
      return `<style>${salesCss()}</style>
      <div class="offer-bar" data-offer-timer data-offer-slug="o-salario-sumiu"><span class="offer-bar-kicker">OFERTA IMPERDÍVEL</span><span>Por tempo limitado</span><span>De R$ 97 por R$ 27,90</span><span>Termina em <span class="offer-bar-clock" data-clock>20:00</span></span>${cta('Quero agora')}</div>
      ${header()}
      <main id="main-content">
        <section class="hero"><div class="wrap sp-grid sp-hero">
          <div>
            <p class="eyebrow">PARA QUEM VÊ O SALÁRIO SUMIR</p>
            <h1>Em 15 minutos você vê para onde o salário foi.</h1>
            <div class="hero-actions">${cta('Quero o mapa do mês')}<a class="button secondary" href="#app">Ver o app em 3 funções</a></div>
            <p class="hero-note">Acesso na hora · primeira lista em 15 min · 7 dias para desistir</p>
            <div class="sp-solution"><strong>A solução</strong><p>Liste o que entra, o que sai e o que não tem nome. Em 15 minutos o mapa do mês aparece no app.</p></div>
            <p class="hero-lede">Você recebe o guia em PDF e o app Mapa do Dinheiro. A primeira lista sai hoje. 7 dias para desistir. Não promete renda, lucro nem independência financeira.</p>
            <div class="sp-proof"><span>Mapa em 15 min</span><span>R$ 27,90</span><span>PDF 14 páginas + app</span><span>Garantia 7 dias</span></div>
            <blockquote class="sp-quote" style="margin-top:1.2rem">
              <img src="${A}/faces/carla.webp" alt="Carla M." width="88" height="88">
              <p>Eu não fazia ideia do que saía no cartão. Sentei 15 minutos, listei tudo e achei quatro gastos sem nome. No outro dia eu já sabia o que perguntar.</p>
              <footer>Carla M. · Caixa · Fortaleza</footer>
            </blockquote>
          </div>
          <div class="hero-visual"><img src="${A}/hero.webp" alt="Caderno com colunas Entra e Sai ao lado do celular com o mapa do mês" width="1600" height="900"></div>
        </div></section>

        <section class="sp-dark" id="dor"><div class="wrap sp-grid" style="padding:4rem 0">
          <img src="${A}/pain.webp" alt="Mesa com recibos, boletos e celular cheio de aviso de banco" width="1600" height="900">
          <div>
            <p class="eyebrow" style="color:#E8C4B8">TALVEZ VOCÊ RECONHEÇA</p>
            <h2>O salário cai na sexta. Na quarta a conta já está no vermelho.</h2>
            <p class="copy">Você corta o café. Corta o streaming. O cartão continua alto. Tem lançamento sem nome e você não para para olhar.</p>
            <div style="margin-top:1.2rem;display:grid;gap:.9rem">
              <article><h3>O mês inteiro vive no extrato</h3><p class="copy">Ninguém senta para ler. O banco mostra números. Não mostra o mapa.</p></article>
              <article><h3>Você corta o que aparece</h3><p class="copy">O que não tem nome continua saindo. É aí que o salário some.</p></article>
              <article><h3>A culpa chega no meio do mês</h3><p class="copy">O dinheiro já foi. Sobrou a sensação de que você não consegue olhar.</p></article>
            </div>
          </div>
        </div></section>

        <section class="section" id="solucao"><div class="wrap">
          <div class="sp-grid">
            <div>
              <p class="eyebrow">A SOLUÇÃO</p>
              <h2>Do extrato confuso para o mapa do mês. 15 minutos.</h2>
              <p class="copy">Você não começa cortando. Você começa listando. Entrada, saída e o que não tem nome. O app devolve o mapa. Amanhã você olha só o que ficou sem nome.</p>
              <p class="sp-effect">Em 15 minutos o mês cabe numa lista. O mistério vira três números na tela.</p>
            </div>
            <img src="${A}/session.webp" alt="Mãos no celular à noite, app aberto com o mapa do mês" width="1600" height="900" style="width:100%;border-radius:16px;object-fit:cover;height:320px">
          </div>
          <div class="sp-steps">
            <article class="sp-step"><p class="eyebrow">01</p><h3>O que entra</h3><p class="copy">Escreva o salário e qualquer outro valor que cai este mês. Um número visível.</p></article>
            <article class="sp-step"><p class="eyebrow">02</p><h3>O que sai</h3><p class="copy">Passe um lançamento por vez. Conta, impulso ou ainda sem nome.</p></article>
            <article class="sp-step"><p class="eyebrow">03</p><h3>O que não tem nome</h3><p class="copy">Marque. Isso vira a lista curta de amanhã. Não um nó na cabeça.</p></article>
          </div>
        </div></section>

        <section class="section light" id="metodo"><div class="wrap">
          <p class="eyebrow">MÉTODO</p>
          <h2>MAPA reduz o mês a quatro movimentos.</h2>
          <p class="copy">Cada letra existe no PDF e no app. Não é slogan. É a ordem do primeiro uso.</p>
          <div class="sp-letters">
            <article class="sp-letter"><span>M</span><p><b>Mostrar o que entra</b></p><p class="copy">O salário deixa de ser um sentimento. Vira um número.</p></article>
            <article class="sp-letter"><span>A</span><p><b>Anotar o que sai</b></p><p class="copy">Um lançamento por vez. Sem planilha de 40 colunas.</p></article>
            <article class="sp-letter"><span>P</span><p><b>Procurar o que não tem nome</b></p><p class="copy">O gasto sem rótulo é o que some o mês.</p></article>
            <article class="sp-letter"><span>A</span><p><b>Arrumar o próximo olhar</b></p><p class="copy">Amanhã você não reabre o extrato inteiro. Olha a lista curta.</p></article>
          </div>
        </div></section>

        <section class="section" id="app"><div class="wrap">
          <p class="eyebrow">NO APP · TRÊS FUNÇÕES</p>
          <h2>Três funções: entrar, sair, marcar o que não tem nome.</h2>
          <article class="sp-app" style="margin-top:1.6rem">
            <div class="sp-copy">
              <p class="eyebrow">NO APP · O QUE ENTRA</p>
              <h3>Em 2 minutos o salário vira um número na tela.</h3>
              <p class="copy">Você abre o Mapa do Dinheiro e escreve o que caiu. O mês começa com um valor visível. Sem gráfico bonito. Sem meta de rico.</p>
              <p class="sp-effect">O salário deixa de ser um mistério. Ele aparece no topo da lista.</p>
              <div class="sp-box"><p><b>Situação.</b> Sexta-feira. O Pix do salário chegou. Você ainda não abriu o extrato.</p><p><b>Faça.</b> Abra o app. Digite o valor que caiu.</p><p><b>Resultado.</b> O mês começa com um número. Não com uma conversa na cabeça.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div>
            </div>
            <figure class="sp-mock"><img src="${A}/miniapp/montar.webp" alt="Celular com o app pedindo o que entra este mês" width="446" height="916"></figure>
          </article>
        </div></section>

        <section class="section light"><div class="wrap">
          <article class="sp-app reverse">
            <div class="sp-copy">
              <p class="eyebrow">NO APP · O QUE SAI</p>
              <h3>Um lançamento por vez. Conta, impulso ou sem nome.</h3>
              <p class="copy">Você não classifica a vida inteira. Passa o que já saiu. O app soma. O que não tem nome fica marcado.</p>
              <p class="sp-effect">O cartão deixa de ser um bloco único. Vira uma lista que cabe na mão.</p>
              <div class="sp-box"><p><b>Situação.</b> O extrato tem trinta linhas. Você não sabe por onde começar.</p><p><b>Faça.</b> Passe um por um. Escolha conta, impulso ou sem nome.</p><p><b>Resultado.</b> Em 15 minutos você vê o que é aluguel, o que é mercado e o que ainda precisa de nome.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div>
            </div>
            <figure class="sp-mock"><img src="${A}/miniapp/sessao.webp" alt="Celular com a lista do que já saiu no mês" width="446" height="916"></figure>
          </article>
        </div></section>

        <section class="section"><div class="wrap">
          <article class="sp-app">
            <div class="sp-copy">
              <p class="eyebrow">NO APP · O QUE NÃO TEM NOME</p>
              <h3>O mapa só fecha quando o mistério vira uma lista curta.</h3>
              <p class="copy">Encerrar não é fingir que está tudo classificado. É deixar o que não tem nome visível. Amanhã você olha só isso.</p>
              <p class="sp-effect">O salário some menos quando o que não tem nome tem uma fila.</p>
              <div class="sp-box"><p><b>Situação.</b> Sobrou um Pix e uma parcela que você não reconhece.</p><p><b>Faça.</b> Marque sem nome. Deixe na lista de amanhã.</p><p><b>Resultado.</b> O mês inteiro não volta para a mesa. Volta só o que ainda precisa de nome.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div>
            </div>
            <figure class="sp-mock"><img src="${A}/miniapp/retomada.webp" alt="Celular com o mapa do mês e a lista do que não tem nome" width="446" height="916"></figure>
          </article>
        </div></section>

        <section class="section light" id="conteudo"><div class="wrap">
          <p class="eyebrow">O GUIA</p>
          <h2>Com 15 minutos você ganha o domínio do mês.</h2>
          <p class="copy">O guia é o papel do mesmo método do app. Entra, sai, o que não tem nome. No fim da sessão a sobra aparece. Amanhã você olha só a fila curta.</p>
          <div class="sp-guide">
            <article class="sp-guide-hero">
              <img src="${A}/pdf/p10.webp" alt="Página do guia com um mês de exemplo: entra, sai, sem nome e sobra visível" width="720" height="1020">
              <h3>No fim da sessão o mistério vira três números.</h3>
              <p class="copy">Entra. Sai. Sem nome. A sobra visível. Sem lucro prometido. Só o mês na frente dos olhos.</p>
              <p class="sp-effect">É isso que você vê quando a lista fecha. Não um extrato de trinta linhas.</p>
            </article>
            <div class="sp-guide-side">
              <article class="sp-guide-item">
                <img src="${A}/pdf/p01.webp" alt="Capa do guia O Salário Sumiu" width="720" height="1020">
                <div><h3>Hoje você senta. Não começa cortando.</h3><p class="copy">O salário deixa de ser um sentimento. Vira o primeiro número da página.</p></div>
              </article>
              <article class="sp-guide-item">
                <img src="${A}/pdf/p04.webp" alt="Os quatro movimentos do método MAPA" width="720" height="1020">
                <div><h3>Quatro movimentos. A ordem já está pronta.</h3><p class="copy">Mostrar o que entra. Anotar o que sai. Procurar o que não tem nome. Olhar amanhã.</p></div>
              </article>
              <article class="sp-guide-item">
                <img src="${A}/pdf/p12.webp" alt="Três linhas da lista de amanhã" width="720" height="1020">
                <div><h3>Amanhã o extrato inteiro fica de fora.</h3><p class="copy">Três itens sem nome. Uma pergunta para cada. Você continua de onde parou.</p></div>
              </article>
              <div class="hero-actions">${cta('Quero o guia e o app')}</div>
            </div>
          </div>
        </div></section>

        <section class="section" id="recebe"><div class="wrap">
          <p class="eyebrow">O QUE VOCÊ RECEBE</p>
          <h2>O mapa do mês. No PDF e no app.</h2>
          <div class="sp-bens">
            <article class="sp-ben"><h3>O salário vira um número em 2 minutos</h3><p class="copy">Você troca “o dinheiro sumiu” por “caiu R$ 2.840”.</p><p class="eyebrow">No app: escrever o que entra.</p></article>
            <article class="sp-ben"><h3>O que sai cabe numa lista</h3><p class="copy">Um lançamento por vez. Conta, impulso ou sem nome.</p><p class="eyebrow">Abra o app depois do jantar. 15 minutos.</p></article>
            <article class="sp-ben"><h3>O que não tem nome ganha uma fila</h3><p class="copy">O mistério deixa de ocupar a cabeça inteira.</p><p class="eyebrow">Marque. Olhe amanhã. Só isso.</p></article>
            <article class="sp-ben"><h3>Amanhã você não recomeça o extrato</h3><p class="copy">O mapa guarda a lista curta. Você continua de onde parou.</p><p class="eyebrow">O app mostra a sobra visível e o que falta nomear.</p></article>
          </div>
        </div></section>

        <section class="section" id="antes"><div class="wrap sp-grid">
          <article class="sp-ben" style="background:#1C1917;color:#fff">
            <p class="eyebrow" style="color:#E8C4B8">ANTES</p>
            <h3>Extrato aberto. Recibo na mesa. Salário sumido.</h3>
            <p class="copy" style="color:rgba(255,255,255,.74)">Você corta o que aparece. O que não tem nome continua saindo. No meio do mês a conta já está no vermelho.</p>
          </article>
          <article class="sp-ben">
            <p class="eyebrow">DEPOIS</p>
            <h3>Entra. Sai. Sem nome. Sobra visível.</h3>
            <p class="copy">Três números na tela. Uma lista curta para amanhã. O mês cabe numa página. Sem promessa de lucro.</p>
          </article>
        </div></section>

        <section class="section light" id="prova"><div class="wrap">
          <p class="eyebrow">QUEM JÁ LISTOU</p>
          <h2>Três pessoas. Três listas. Nenhum milagre.</h2>
          <p class="copy">Relatos de uso. Resultado medido em clareza do mês. Não em renda, lucro ou independência financeira.</p>
          <div class="sp-faces">
            <blockquote class="sp-quote"><img src="${A}/faces/carla.webp" alt="Carla M."><p>Eu não fazia ideia do que saía no cartão. Sentei 15 minutos, listei tudo e achei quatro gastos sem nome. No outro dia eu já sabia o que perguntar.</p><footer>Carla M. · Caixa · Fortaleza</footer></blockquote>
            <blockquote class="sp-quote"><img src="${A}/faces/joao.webp" alt="João P."><p>Eu só olhava o saldo no vermelho. Botei o que entra e o que sai no app. Sobraram dois Pix sem nome. Parei de chutar no escuro.</p><footer>João P. · Motorista de app · Recife</footer></blockquote>
            <blockquote class="sp-quote"><img src="${A}/faces/fernanda.webp" alt="Fernanda S."><p>Eu cortava merenda e o mês não cabia. Li o guia, marquei o que não tinha nome e vi que o furo não era o lanche. Era a parcela que eu fingia que não existia.</p><footer>Fernanda S. · Professora · Belo Horizonte</footer></blockquote>
          </div>
        </div></section>

        <section class="section light" id="publico"><div class="wrap sp-grid">
          <div><p class="eyebrow">PARA QUEM É</p><h2>Se o salário some e você não sabe o que saiu, a lista sai hoje.</h2><p class="copy">Quem recebe e não encara o extrato. Quem trabalha o dia inteiro e só olha a conta no vermelho. Quem já tentou planilha enorme e desistiu na primeira semana.</p></div>
          <div><p class="eyebrow">PARA QUEM NÃO É</p><h2>Não é curso de investimento. Não promete renda.</h2><p class="copy">Não promete lucro, independência financeira nem conta gorda. Não é consultoria. Não substitui banco, contador nem acordo de dívida.</p></div>
        </div></section>

        <section class="sp-offer" id="oferta"><div class="wrap">
          <p class="eyebrow" style="color:#E8C4B8">OFERTA IMPERDÍVEL</p>
          <h2>Hoje o mês cabe numa lista. O que não tem nome fica visível.</h2>
          <p class="copy">R$ 27,90 por tempo limitado. Guia em PDF (14 páginas) + app Mapa do Dinheiro. Acesso digital após o pagamento.</p>
          <p class="sp-price"><span class="sp-old">R$ 97</span> R$ 27,90</p>
          <p class="offer-visit">Por tempo limitado · <span class="offer-bar-clock" data-clock>20:00</span></p>
          <div class="sp-stack">
            <div><span>Guia O Salário Sumiu · PDF 14 páginas</span><b>incluso</b></div>
            <div><span>App Mapa do Dinheiro · celular e computador</span><b>incluso</b></div>
            <div><span>Cartão do mês, lista sem nome e próximo olhar</span><b>incluso</b></div>
          </div>
          <div class="hero-actions">${cta('Quero o mapa do mês')}</div>
          <p class="hero-note" style="color:rgba(255,255,255,.7)">7 dias para desistir, nos termos do art. 49 do CDC. Organização financeira. Não promete renda, lucro nem independência financeira.</p>
        </div></section>

        <section class="section" id="garantia"><div class="wrap" style="max-width:720px">
          <div class="sp-seal">7 DIAS<br>CDC</div>
          <p class="eyebrow">GARANTIA</p>
          <h2>7 dias para desistir. O risco fica com a gente.</h2>
          <p class="copy">Art. 49 do CDC. Se o material não servir, peça o reembolso pelo e-mail de suporte informando a compra.</p>
        </div></section>

        <section class="section" id="faq"><div class="wrap">
          <p class="eyebrow">DÚVIDAS</p>
          <h2>O que você recebe, o app incluso e a garantia de 7 dias.</h2>
          <div class="faq-list">
            <details open><summary>O que eu recebo?</summary><p>A solução é o mapa do mês: o que entra, o que sai e o que não tem nome. Você recebe o guia em PDF (14 páginas) e o app Mapa do Dinheiro.</p></details>
            <details><summary>O app já está incluso?</summary><p>Sim. O Mapa do Dinheiro faz parte da oferta. Abre no celular e no computador. Sem loja. Sem instalar. Você lista o que entra, o que sai e marca o que não tem nome.</p></details>
            <details><summary>Como recebo o arquivo?</summary><p>A entrega é digital, após a confirmação do pagamento. O PDF chega no acesso. O app abre na hora.</p></details>
            <details><summary>Qual é a garantia?</summary><p>Você tem 7 dias para desistir, com base no art. 49 do CDC. Peça o reembolso pelo e-mail de suporte informando a compra.</p></details>
            <details><summary>Isso promete renda ou lucro?</summary><p>Não. É organização do mês. Não promete renda, lucro, independência financeira nem conta gorda.</p></details>
            <details><summary>Serve para quem trabalha o dia inteiro?</summary><p>Sim. O método existe para uma lista de 15 minutos depois do expediente.</p></details>
            <details><summary>Como falo com o suporte?</summary><p>E-mail oficial: ${SUPPORT_EMAIL}. Informe o nome da solução, a página e o dispositivo. Não envie senhas nem dados de pagamento.</p></details>
          </div>
        </div></section>

        <section class="section light"><div class="wrap" style="text-align:center;max-width:720px;margin-inline:auto">
          <p class="eyebrow">COMECE HOJE</p>
          <h2>Daqui a 15 minutos o mês cabe numa lista.</h2>
          <p class="copy">No app, escreva o que entra, o que sai e o que não tem nome. A oferta termina no cronômetro vermelho.</p>
          <div class="hero-actions" style="justify-content:center">${cta('Quero o mapa do mês')}</div>
        </div></section>

        <section class="section" id="suporte"><div class="wrap" style="max-width:720px">
          <p class="eyebrow">SUPORTE</p>
          <h2>Ajuda clara para acesso, pagamento e uso.</h2>
          <p class="copy">Canal oficial: ${SUPPORT_EMAIL}. Informe o nome da solução, a página acessada e o dispositivo. Não envie senhas ou dados completos de pagamento.</p>
          <div class="hero-actions"><a class="button secondary" href="/suporte">Abrir o suporte</a></div>
        </div></section>
      </main>
      ${footer()}`;
    }

    function salarioThanksPage() {
      document.title = 'Acesso | O Salário Sumiu';
      return `<style>${salesCss()}</style>${header()}<main id="main-content"><section class="section"><div class="wrap thanks">
        <p class="eyebrow">ACESSO</p>
        <h1>O guia e o app estão aqui.</h1>
        <p class="copy">Quando o pagamento confirma, você baixa o PDF e abre o Mapa do Dinheiro neste aparelho. Não pedimos senha de banco. Os lançamentos ficam só aqui.</p>
        <div class="thanks-actions">
          <a class="button sp-cta" href="${SALARIO_PDF}" download="o-salario-sumiu-guia.pdf">Baixar o guia em PDF</a>
          <a class="button secondary" href="/app/mapa-do-dinheiro">Abrir o Mapa do Dinheiro</a>
        </div>
        <section class="app-card" style="margin-top:28px">
          <p class="eyebrow">PRIMEIRA SESSÃO · 15 MIN</p>
          <ol class="thanks-list">
            <li>Escreva o que entra este mês.</li>
            <li>Anote o que sai: conta, impulso ou sem nome.</li>
            <li>Amanhã olhe só o que ficou sem nome.</li>
          </ol>
        </section>
        <p class="hero-note">7 dias para desistir, art. 49 do CDC. Dúvida: ${SUPPORT_EMAIL}. Não envie senhas nem dados de pagamento.</p>
      </div></section></main>${footer()}`;
    }

    function salarioAppPage() {
      document.title = 'Mapa do Dinheiro | O Salário Sumiu';
      return `<style>${salesCss()}</style>${header()}
      <div class="app-shell" id="mapa-root">
        <header class="app-top"><div class="wrap">
          <p class="eyebrow" style="color:#E8C4B8;margin-bottom:6px">APP · MAPA DO DINHEIRO</p>
          <h1>O mês numa lista</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,.74);max-width:560px">Liste o que entra, o que sai e o que não tem nome. Em 15 minutos o mapa aparece.</p>
          <div class="app-links">
            <a href="${SALARIO_PDF}" download="o-salario-sumiu-guia.pdf">Baixar o guia</a>
            <a href="/p/o-salario-sumiu">Página da solução</a>
            <a href="/suporte">Suporte</a>
          </div>
        </div></header>
        <main class="wrap" id="mapa-app" style="display:grid;gap:16px;padding:22px 0 48px"></main>
      </div>
      ${footer()}`;
    }

    function bindSalarioApp() {
      const root = document.getElementById('mapa-app');
      if (!root) return;
      const KEY = 'topp-mapa-o-salario-sumiu';
      const KINDS = [{id:'conta',label:'conta'},{id:'impulso',label:'impulso'},{id:'sem-nome',label:'sem nome'}];
      const empty = { v:1, income:0, items:[] };
      const brl = (n) => n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
      const parseMoney = (value) => {
        const n = Number(String(value).replace(/\./g,'').replace(',','.').replace(/[^\d.-]/g,''));
        return Number.isFinite(n) ? Math.max(0, n) : 0;
      };
      let store;
      try {
        const raw = localStorage.getItem(KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        store = parsed && typeof parsed.income === 'number' && Array.isArray(parsed.items) ? { v:1, income:parsed.income, items:parsed.items } : { ...empty, items:[] };
      } catch (e) { store = { v:1, income:0, items:[] }; }
      let kind = 'conta';
      let label = '';
      let amount = '';
      let incomeDraft = store.income ? String(store.income).replace('.', ',') : '';
      const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} };
      const paint = () => {
        const out = store.items.reduce((s,i) => s + i.amount, 0);
        const unnamed = store.items.filter((i) => i.kind === 'sem-nome');
        const unnamedSum = unnamed.reduce((s,i) => s + i.amount, 0);
        const leftover = store.income - out;
        const maxBar = Math.max(store.income, out, unnamedSum, 1);
        const nextStep = store.income <= 0
          ? 'Comece pelo que entra. Um número visível. Sem meta.'
          : store.items.length === 0
            ? 'Anote o primeiro lançamento. Conta, impulso ou sem nome.'
            : unnamed.length > 0
              ? `Amanhã olhe só ${unnamed.length === 1 ? 'este item' : `estes ${unnamed.length} itens`} sem nome. Não o extrato inteiro.`
              : leftover < 0
                ? 'A lista passou do que entra. Confira duplicata antes de cortar no escuro.'
                : 'Nada sem nome. A sobra visível não é lucro. É o que restou na lista.';
        const bars = [['ENTRA', store.income],['SAI', out],['SEM NOME', unnamedSum]].map(([name,val]) => `
          <div style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;font-weight:700;font-size:13px"><span>${name}</span><span>${brl(val)}</span></div>
            <div class="app-bar" style="margin-top:6px"><span style="width:${Math.min(100,(val/maxBar)*100)}%"></span></div>
          </div>`).join('');
        const list = store.items.length === 0
          ? `<li class="copy">Nenhum lançamento ainda. Um por vez.</li>`
          : store.items.map((item) => `<li style="display:flex;justify-content:space-between;gap:12px;border:1px solid ${item.kind==='sem-nome'?'var(--accent)':'var(--line)'};border-radius:12px;padding:10px 12px"><span><b>${esc(item.label)}</b><br><small style="color:var(--muted)">${esc(item.kind)}</small></span><span style="display:flex;align-items:center;gap:10px"><b>${brl(item.amount)}</b><button type="button" class="button secondary" data-remove="${esc(item.id)}">tirar</button></span></li>`).join('');
        const unnamedHtml = unnamed.length === 0
          ? `<p class="copy">Nada marcado ainda. Quando não souber o nome, marque.</p>`
          : `<ul style="padding-left:18px;margin:0">${unnamed.map((item) => `<li>${esc(item.label)} · ${brl(item.amount)}</li>`).join('')}</ul>`;
        root.innerHTML = `
          <section class="app-card">
            <p class="eyebrow">01 · O QUE ENTRA</p>
            <label for="income" style="display:block;font-weight:700;margin-bottom:8px">Valor que caiu este mês</label>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <input id="income" class="app-input" inputmode="decimal" placeholder="2840" value="${esc(incomeDraft)}" style="flex:1 1 180px">
              <button class="button sp-cta" type="button" id="income-save">Guardar entradas</button>
            </div>
            <p class="hero-note">Um número visível. Sem meta. Sem gráfico de rico.</p>
          </section>
          <section class="app-card">
            <p class="eyebrow">02 · O QUE SAI</p>
            <div style="display:grid;gap:8px">
              <input id="out-label" class="app-input" placeholder="Aluguel, mercado, Pix 18/08" value="${esc(label)}">
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <input id="out-amount" class="app-input" inputmode="decimal" placeholder="900" value="${esc(amount)}" style="flex:1 1 120px">
                <div class="kind-row" role="group" aria-label="Tipo do lançamento">
                  ${KINDS.map((option) => `<button type="button" class="${kind===option.id?'kind-chip on':'kind-chip'}" data-kind="${option.id}">${option.label}</button>`).join('')}
                </div>
                <button class="button sp-cta" type="button" id="out-add">Anotar</button>
              </div>
            </div>
            <ul style="list-style:none;padding:0;margin:14px 0 0;display:grid;gap:8px">${list}</ul>
          </section>
          <section class="app-card">
            <p class="eyebrow">03 · MAPA DO MÊS</p>
            <h2 style="margin:0 0 12px;font-size:22px">Entra. Sai. Sem nome.</h2>
            ${bars}
            <p style="margin:8px 0 14px;font-weight:800;color:${leftover<0?'var(--accent)':'inherit'}">Sobra visível: ${brl(leftover)}</p>
            <p class="eyebrow">O que não tem nome</p>
            ${unnamedHtml}
            <div class="sp-effect" style="margin-top:14px">${esc(nextStep)}</div>
            <p class="hero-note">Os dados ficam neste aparelho. Amanhã você olha só a lista curta.</p>
            <div class="hero-actions">
              <a class="button secondary" href="${SALARIO_PDF}" download="o-salario-sumiu-guia.pdf">Baixar o guia em PDF</a>
              <button type="button" class="button secondary" id="mapa-clear">Limpar o mapa</button>
            </div>
          </section>`;
        const incomeEl = document.getElementById('income');
        const labelEl = document.getElementById('out-label');
        const amountEl = document.getElementById('out-amount');
        incomeEl?.addEventListener('input', () => { incomeDraft = incomeEl.value; });
        labelEl?.addEventListener('input', () => { label = labelEl.value; });
        amountEl?.addEventListener('input', () => { amount = amountEl.value; });
        incomeEl?.addEventListener('keydown', (e) => { if (e.key === 'Enter') saveIncome(); });
        labelEl?.addEventListener('keydown', (e) => { if (e.key === 'Enter') addItem(); });
        amountEl?.addEventListener('keydown', (e) => { if (e.key === 'Enter') addItem(); });
        document.getElementById('income-save')?.addEventListener('click', saveIncome);
        document.getElementById('out-add')?.addEventListener('click', addItem);
        document.getElementById('mapa-clear')?.addEventListener('click', () => {
          if (!window.confirm('Limpar o mapa deste aparelho?')) return;
          store = { v:1, income:0, items:[] };
          incomeDraft = ''; label = ''; amount = ''; kind = 'conta';
          save(); paint();
        });
        root.querySelectorAll('[data-kind]').forEach((btn) => btn.addEventListener('click', () => { kind = btn.getAttribute('data-kind'); paint(); }));
        root.querySelectorAll('[data-remove]').forEach((btn) => btn.addEventListener('click', () => {
          store.items = store.items.filter((i) => i.id !== btn.getAttribute('data-remove'));
          save(); paint();
        }));
      };
      function saveIncome() {
        store.income = parseMoney(incomeDraft);
        save(); paint();
      }
      function addItem() {
        const n = parseMoney(amount);
        const name = label.trim();
        if (!name || n <= 0) return;
        store.items = [{ id: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())), label:name, amount:n, kind }, ...store.items];
        label = ''; amount = '';
        save(); paint();
      }
      paint();
    }

    function bindOfferTimer() {
      const root = document.querySelector('[data-offer-timer]');
      if (!root) { document.body.classList.remove('has-offer-bar'); return; }
      document.body.classList.add('has-offer-bar');
      const slug = root.getAttribute('data-offer-slug') || location.pathname;
      const clocks = [...document.querySelectorAll('[data-clock]')];
      const WINDOW_MS = 20 * 60 * 1000;
      const MAX_MS = 30 * 60 * 1000;
      const COOLDOWN_MS = 2 * 60 * 60 * 1000;
      const key = 'topp-offer-' + slug;
      const now = Date.now();
      let end;
      try {
        const raw = localStorage.getItem(key);
        const saved = Number(raw);
        if (raw && Number.isFinite(saved)) {
          if (saved > now && saved - now <= MAX_MS) end = saved;
          else if (saved <= now && now - saved < COOLDOWN_MS) end = saved;
        }
        if (!end) {
          end = now + WINDOW_MS;
          localStorage.setItem(key, String(end));
        }
      } catch (e) {
        end = now + WINDOW_MS;
      }
      const pad = (n) => String(n).padStart(2, '0');
      const tick = () => {
        const left = Math.max(0, end - Date.now());
        const label = left === 0 ? '00:00' : pad(Math.floor(left / 60000)) + ':' + pad(Math.floor((left % 60000) / 1000));
        clocks.forEach((el) => { el.textContent = label; });
        if (left === 0) {
          const kicker = root.querySelector('.offer-bar-kicker');
          if (kicker) kicker.textContent = 'OFERTA ENCERRADA · PREÇO VIGENTE';
        }
      };
      tick();
      setInterval(tick, 1000);
    }

        function mount() {
      const app = document.getElementById('app');
      if (!app) return;
      pathParts = location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
      params = new URLSearchParams(location.search);
      let output;
      if (pathParts.length === 0) output = hub();
      else if (pathParts[0] === 'categoria' && pathParts[1] && CATEGORY.collections.some(([slug]) => slug === pathParts[1])) output = hub(pathParts[1]);
      else if (pathParts[0] === 'p' && pathParts[1] === 'o-salario-sumiu') output = salarioSalesPage();
      else if (pathParts[0] === 'app' && (pathParts[1] === 'mapa-do-dinheiro' || pathParts[1] === 'o-salario-sumiu')) output = salarioAppPage();
      else if (pathParts[0] === 'obrigado' && pathParts[1] === 'o-salario-sumiu') output = salarioThanksPage();
      else if (pathParts[0] === 'p' && pathParts[1] && findProduct(pathParts[1])) output = productPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'app' && pathParts[1] && findProduct(pathParts[1])) output = appPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'obrigado' && pathParts[1] && findProduct(pathParts[1])) output = thanksPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'suporte') output = supportPage();
      else output = notFound();
      document.body.classList.remove('has-offer-bar');
      app.innerHTML = output;
      bindCommon();
      if (pathParts.length === 0 || pathParts[0] === 'categoria') bindHub();
    }
    function bindCommon() {
      const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.main-nav');
      menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
      document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); }));
      const headerSearch = document.getElementById('header-search');
      headerSearch?.addEventListener('keydown', (event) => { if (event.key === 'Enter' && headerSearch.value.trim()) location.href = `/?q=${encodeURIComponent(headerSearch.value.trim())}#catalogo`; });
      const datalist = document.getElementById('search-suggestions');
      bindOfferTimer();
      bindSalarioApp();
      if (datalist) datalist.innerHTML = CATEGORY.products.flatMap((product) => [product.title, product.objective, product.theme, ...product.tags]).map((value) => `<option value="${esc(value)}"></option>`).join('');
    }
    function bindCarousel() {
      let index = 0, timer;
      const title = document.getElementById('slide-title'), copy = document.getElementById('slide-copy'), dots = [...document.querySelectorAll('[data-slide]')];
      const render = (next) => { index = (next + CATEGORY.slides.length) % CATEGORY.slides.length; const slide = CATEGORY.slides[index]; title.textContent = slide.title; copy.textContent = slide.copy; const image = document.getElementById('hero-image'); if (image) { image.src = slide.image; image.alt = slide.alt; } dots.forEach((dot, dotIndex) => { dot.classList.toggle('active', dotIndex === index); dot.setAttribute('aria-selected', String(dotIndex === index)); }); };
      const start = () => { clearInterval(timer); timer = setInterval(() => render(index + 1), 6500); };
      document.getElementById('slide-prev')?.addEventListener('click', () => { render(index - 1); start(); });
      document.getElementById('slide-next')?.addEventListener('click', () => { render(index + 1); start(); });
      dots.forEach((dot) => dot.addEventListener('click', () => { render(Number(dot.dataset.slide)); start(); }));
      const visual = document.querySelector('.hero-visual'); visual?.addEventListener('mouseenter', () => clearInterval(timer)); visual?.addEventListener('mouseleave', start); visual?.addEventListener('focusin', () => clearInterval(timer)); visual?.addEventListener('focusout', start); start();
    }
    function syncQuery(next) { const query = new URLSearchParams(next); const queryString = query.toString(); history.replaceState(null, '', `${location.pathname}${queryString ? `?${queryString}` : ''}#catalogo`); }
    function bindHub() {
      bindCarousel();
      const grid = document.getElementById('catalog-grid'), empty = document.getElementById('empty-state'), search = document.getElementById('catalog-search'), sort = document.getElementById('sort-select'), toggle = document.getElementById('filter-toggle'), panel = document.getElementById('filter-panel'), count = document.getElementById('result-count'), filterCount = document.getElementById('filter-count'), active = document.getElementById('toolbar-filters'), panelActive = document.getElementById('active-filters');
      if (!grid || !search || !sort) return;
      const selected = { objective: new Set(), format: new Set(), status: new Set() };
      const initialCollection = pathParts[0] === 'categoria' ? pathParts[1] : params.get('collection') || '';
      const state = { q: params.get('q') || '', collection: initialCollection, sort: params.get('sort') || 'recommended' };
      search.value = state.q; sort.value = state.sort;
      if (state.collection) syncQuery({ q: state.q, collection: state.collection, sort: state.sort });
      function matches(product) {
        const text = [product.title, product.subtitle, product.description, product.objective, product.theme, product.audience, product.format, ...product.tags].join(' ').toLowerCase();
        const queryOk = !state.q || text.includes(state.q.toLowerCase());
        const collectionOk = !state.collection || product.collection === state.collection;
        const filtersOk = Object.entries(selected).every(([field, values]) => !values.size || values.has(String(product[field])));
        return queryOk && collectionOk && filtersOk;
      }
      function render() {
        const filtered = CATEGORY.products.filter(matches).sort((a,b) => { if (state.sort === 'price-asc') return (a.price ?? 999999) - (b.price ?? 999999); if (state.sort === 'price-desc') return (b.price ?? -1) - (a.price ?? -1); if (state.sort === 'title') return a.title.localeCompare(b.title,'pt-BR'); if (state.sort === 'recent') return b.priority - a.priority; return a.priority - b.priority; });
        grid.innerHTML = filtered.map(catalogCard).join(''); count.textContent = `${filtered.length} ${filtered.length === 1 ? 'solução' : 'soluções'}`; empty.classList.toggle('show', filtered.length === 0); const chips = []; if (state.collection) { const collection = CATEGORY.collections.find(([slug]) => slug === state.collection); if (collection) chips.push(['collection',state.collection,collection[1]]); } Object.entries(selected).forEach(([field, values]) => values.forEach((value) => chips.push([field,value,value]))); const chipMarkup = chips.map(([field,value,label]) => `<span class="filter-chip">${esc(label)} <button type="button" aria-label="Remover filtro ${esc(label)}" data-remove-field="${esc(field)}" data-remove-value="${esc(value)}">×</button></span>`).join(''); active.innerHTML = chipMarkup; panelActive.innerHTML = chipMarkup; filterCount.textContent = chips.length ? `(${chips.length})` : ''; document.querySelectorAll('[data-remove-field]').forEach((button) => button.addEventListener('click', () => { const field = button.dataset.removeField, value = button.dataset.removeValue; if (field === 'collection') state.collection = ''; else selected[field]?.delete(value); syncQuery({q: state.q, collection: state.collection, sort: state.sort}); render(); })); syncQuery({ q: state.q, collection: state.collection, sort: state.sort }); }
      document.querySelectorAll('[data-filter-field]').forEach((input) => input.addEventListener('change', () => { if (input.checked) selected[input.dataset.filterField].add(input.value); else selected[input.dataset.filterField].delete(input.value); render(); }));
      search.addEventListener('input', () => { state.q = search.value.trim(); render(); }); sort.addEventListener('change', () => { state.sort = sort.value; render(); }); toggle.addEventListener('click', () => { const open = panel.classList.toggle('open'); toggle.classList.toggle('active',open); toggle.setAttribute('aria-expanded',String(open)); }); document.getElementById('clear-filters')?.addEventListener('click', () => { Object.values(selected).forEach((values) => values.clear()); state.collection = ''; state.q = ''; search.value = ''; render(); }); document.getElementById('empty-clear')?.addEventListener('click', () => { Object.values(selected).forEach((values) => values.clear()); state.collection = ''; state.q = ''; search.value = ''; render(); }); render();
    }
    function boot() {
      window.__hubRemount = mount;
      if (!document.getElementById('app')) {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', boot, { once: true });
        } else {
          setTimeout(boot, 30);
        }
        return;
      }
      mount();
    }
    boot();
    window.addEventListener('popstate', mount);
