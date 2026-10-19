// Versão em inglês: traduz os textos da página (incluindo os que o JS gera depois) a partir de um dicionário PT → EN.
// A escolha fica guardada no navegador; o botão PT/EN do cabeçalho alterna.
(() => {
  const EN = {
    // ---------- cabeçalho / rodapé ----------
    'Empresa Pública · Fundada em 1999 · Luanda, Angola': 'State-owned company · Founded in 1999 · Luanda, Angola',
    'Portal de Vendas ↗': 'Sales Portal ↗', 'Relatórios': 'Reports', 'Canal de Denúncias': 'Whistleblowing',
    'Idioma': 'Language', 'SODIAM, E.P. — início': 'SODIAM, E.P. — home', 'Principal': 'Main',
    'SODIAM, E.P. — Empresa Nacional de Comercialização de Diamantes de Angola': 'SODIAM, E.P. — National Diamond Trading Company of Angola',
    'Institucional': 'About', 'Operações': 'Operations', 'Leilões': 'Auctions', 'Sustentabilidade': 'Sustainability',
    'Imprensa': 'Press', 'Blog': 'Blog', 'Contactos': 'Contact', 'Área do Comprador': 'Buyer Area', 'Abrir menu': 'Open menu',
    'Tornar os diamantes em activos que geram': 'Turning diamonds into assets that create a', 'futuro brilhante': 'brilliant future',
    'para Angola.': 'for Angola.', 'Sobre nós': 'About us', 'Carreiras': 'Careers', 'Comercialização': 'Trading',
    'Lapidação — PDDS': 'Cutting — PDDS', 'Formação — CEFOLAD': 'Training — CEFOLAD', 'Ligações': 'Links',
    'Processo de Kimberley ↗': 'Kimberley Process ↗', 'Perguntas frequentes': 'FAQ', 'Newsletter': 'Newsletter',
    'Comunicados, leilões e relatórios no seu e-mail.': 'Press releases, auctions and reports in your inbox.',
    'O seu e-mail': 'Your e-mail', 'Subscrever': 'Subscribe', 'Subscrito ✓': 'Subscribed ✓',
    '© 2000–2026 SODIAM, E.P. · Todos os direitos reservados': '© 2000–2026 SODIAM, E.P. · All rights reserved',
    'Privacidade': 'Privacy', 'Termos': 'Terms', 'Acessibilidade': 'Accessibility', 'Voltar ao topo': 'Back to top',
    // ---------- hero ----------
    'Diamante hiper-realista a girar: do cristal em bruto ao brilhante lapidado': 'Hyper-realistic rotating diamond: from rough crystal to polished brilliant',
    'BRUTO': 'ROUGH', 'EM LAPIDAÇÃO': 'BEING CUT', 'LAPIDADO': 'POLISHED', 'Estado': 'State', 'Facetas': 'Facets',
    'Índice de refracção': 'Refractive index', 'Rotação': 'Rotation',
    'Desde 1999 · Canal oficial do diamante angolano': 'Since 1999 · The official channel for Angolan diamonds',
    'O brilho de Angola,': 'The brilliance of Angola,', 'gerido com rigor.': 'managed with rigour.',
    'Pioneira na comercialização transparente de diamantes em Angola, a SODIAM é, há mais de 26 anos, o canal através do qual o país leva os seus diamantes ao mundo — com ética, rigor e valor para os angolanos.':
      'A pioneer of transparent diamond trading in Angola, SODIAM has for more than 26 years been the channel through which the country takes its diamonds to the world — with ethics, rigour and value for Angolans.',
    'Novo': 'New',
    'Angola · 21 províncias': 'Angola · 21 provinces', 'Ocorrências aluvionares junto às Lundas.': 'Alluvial occurrences next to the Lundas.',
    'Áreas de prospecção diamantífera.': 'Diamond exploration areas.',
    'Saltar para o conteúdo': 'Skip to content', 'Em breve': 'Coming soon', 'Administração': 'Leadership',
    'Perguntas frequentes': 'FAQ', 'Legal': 'Legal', 'Enquadramento legal': 'Legal framework',
    'Valorizamos e colocamos os diamantes angolanos nos principais centros mundiais — e promovemos a lapidação em Angola.': 'We value Angolan diamonds and place them in the world’s leading centres — while promoting cutting in Angola.',
    'Do kimberlito e dos aluviões das Lundas, 27 empresas mineiras entregam a produção a um único canal: a SODIAM.': 'From the kimberlites and alluvials of the Lundas, 27 mining companies deliver their output to a single channel: SODIAM.',
    'O PDDS e o centro de formação CEFOLAD acrescentam valor ao diamante dentro do país.': 'The PDDS and the CEFOLAD training centre add value to diamonds inside the country.',
    'Sights, spots e leilões electrónicos abertos a compradores internacionais qualificados.': 'Sights, spots and electronic auctions open to qualified international buyers.',
    'Gemólogos certificados fixam o valor de mercado de cada lote — preço justo para o Estado e os produtores.': 'Certified gemologists set each lot’s market value — a fair price for the State and producers.',
    'Triagem por tamanho, modelo, qualidade e cor, com rastreabilidade de origem.': 'Sorted by size, model, quality and colour, with full traceability of origin.',
    'Minas kimberlíticas e aluvionares entregam a produção à SODIAM, que regista cada lote.': 'Kimberlite and alluvial mines deliver their output to SODIAM, which records every lot.',
    'Relatórios, contas e dados de mercado públicos, para que todos acompanhem o desempenho do sector.': 'Reports, accounts and market data made public, so everyone can follow the sector’s performance.',
    'Rastreabilidade total, Processo de Kimberley e ITIE Angola: a base da confiança no diamante angolano.': 'Full traceability, the Kimberley Process and EITI Angola: the foundation of trust in Angolan diamonds.',
    'Regras claras e um processo de qualificação rigoroso para novos compradores e para investidores na lapidação em Angola.': 'Clear rules and a rigorous qualification process for new buyers and for investors in cutting in Angola.',
    'Encerrado a 26 de Junho de 2026, em Luanda. Desde 2019, os leilões electrónicos da SODIAM dão transparência e preço de mercado às pedras de maior valor de Angola.': 'Closed on 26 June 2026 in Luanda. Since 2019, SODIAM’s electronic auctions have brought transparency and market prices to Angola’s most valuable stones.',
    'A produção concentra-se no Leste, com as Lundas no centro. Luanda coordena a comercialização; Saurimo transforma o diamante em indústria.': 'Production is concentrated in the East, with the Lundas at its heart. Luanda coordinates trading; Saurimo turns diamonds into industry.',
    'Os primeiros a organizar o comércio do diamante angolano num canal único e a levar as pedras especiais de Angola a leilão electrónico internacional.': 'The first to organise Angola’s diamond trade into a single channel and to take Angolan special stones to international electronic auction.',
    'A empresa pública que controla e supervisiona a comercialização de diamantes em Angola — o canal único por onde a produção nacional é avaliada, negociada e exportada.': 'The state-owned company that controls and supervises diamond trading in Angola — the single channel through which national production is valued, negotiated and exported.',
    'Há mais de 26 anos, o canal oficial que leva os diamantes de Angola ao mundo — com ética, rigor e transparência.': 'For more than 26 years, the official channel taking Angola’s diamonds to the world — with ethics, rigour and transparency.', '17.º leilão: +23,46% acima do valor esperado': '17th auction: +23.46% above expected value',
    'Conhecer a SODIAM': 'Discover SODIAM', 'Leilões de pedras especiais': 'Special stone auctions',
    'Do subsolo': 'From the ground', 'Do bruto': 'From rough', 'ao brilhante.': 'to brilliant.',
    'Nasce no kimberlito e nos aluviões das Lundas. 27 empresas mineiras — kimberlíticas e aluvionares — entregam a sua produção através de um único canal: a SODIAM.':
      'Born in the kimberlites and alluvial deposits of the Lundas. 27 mining companies — kimberlite and alluvial — deliver their production through a single channel: SODIAM.',
    'Ao mercado mundial': 'To the world market', 'Valor angolano,': 'Angolan value,', 'confiança global.': 'global trust.',
    'Avaliamos, valorizamos e colocamos os diamantes angolanos nos principais centros mundiais — por sights, spots e leilões electrónicos — e promovemos a lapidação em Angola.':
      'We value Angolan diamonds and place them in the world’s leading centres — through sights, spots and electronic auctions — while promoting cutting and polishing in Angola.',
    'A nossa missão': 'Our mission', '“Tornar os diamantes em activos que geram': '“Turning diamonds into assets that create a',
    'futuro brilhante para Angola.': 'brilliant future for Angola.', 'Scroll': 'Scroll', 'Missão': 'Mission', 'Origem': 'Origin',
    'Mercado': 'Market', 'Futuro': 'Future',
    // ---------- números ----------
    'Números-chave': 'Key figures', 'Angola em números': 'Angola in numbers', 'Dados de 2025 · Fonte: SODIAM, E.P.': '2025 data · Source: SODIAM, E.P.',
    'mM': 'bn', 'Quilates de diamantes em bruto exportados em 2025': 'Carats of rough diamonds exported in 2025',
    'Valor das exportações em 2025, a uma média de US$ 101,70/ct': 'Export value in 2025, at an average of US$ 101.70/ct',
    'Empresas mineiras — kimberlíticas e aluvionares — servidas pela SODIAM': 'Mining companies — kimberlite and alluvial — served by SODIAM',
    'Leilão de pedras especiais concluído em Junho de 2026': 'Special stone auction completed in June 2026',
    // ---------- blog na home ----------
    'Perspectivas · Blog SODIAM': 'Perspectives · SODIAM Blog', 'A voz de referência': 'The reference voice', 'do diamante angolano.': 'of Angolan diamonds.',
    'Resultados de leilões, análises de mercado, sustentabilidade e a actividade da SODIAM — em primeira mão.': 'Auction results, market analysis, sustainability and SODIAM’s activity — first-hand.',
    'Ir para o blog →': 'Go to the blog →', 'Ler artigo': 'Read article', 'Em destaque': 'Featured',
    // ---------- legado ----------
    'Legado': 'Legacy', 'Pioneiros do': 'Pioneers of', 'diamante angolano.': 'Angolan diamonds.',
    'Fomos os primeiros a estruturar a comercialização dos diamantes de Angola num canal único, os primeiros a levar as pedras especiais angolanas a leilão electrónico internacional e somos hoje a referência que define as regras do mercado no país.':
      'We were the first to organise Angola’s diamond trade into a single channel, the first to take Angolan special stones to international electronic auction — and today we are the benchmark that sets the market’s rules in the country.',
    '26 anos de referência': '26 years as the benchmark', 'no sector diamantífero': 'in the diamond sector', 'Nasce a SODIAM': 'SODIAM is founded',
    'Criada em Novembro de 1999 como empresa pública de comercialização de diamantes de Angola.': 'Established in November 1999 as Angola’s state-owned diamond trading company.',
    'Nova Política de Comercialização': 'New Trading Policy',
    'O Decreto Presidencial 175/18 abre o mercado a novos modelos de venda, com a SODIAM no centro do sistema.': 'Presidential Decree 175/18 opens the market to new sales models, with SODIAM at the centre of the system.',
    '1.º leilão electrónico de Angola': 'Angola’s 1st electronic auction',
    'Sete pedras especiais, 31 empresas de 8 países e US$ 16,7 milhões — o início de uma nova era de transparência.': 'Seven special stones, 31 companies from 8 countries and US$ 16.7 million — the start of a new era of transparency.',
    'Lapidação em território nacional': 'Cutting on national soil',
    'O Pólo de Desenvolvimento Diamantífero de Saurimo aproxima a indústria das zonas de produção.': 'The Saurimo Diamond Development Hub brings industry closer to the production areas.',
    '17,8 milhões de quilates': '17.8 million carats',
    'Cerca de US$ 1,8 mil milhões em exportações, a uma média de US$ 101,70 por quilate.': 'About US$ 1.8 billion in exports, at an average of US$ 101.70 per carat.',
    '17 leilões e reconhecimento global': '17 auctions and global recognition',
    'Visita técnica do GIA e o 17.º leilão a superar em 23,46% o valor esperado.': 'A GIA technical visit and a 17th auction 23.46% above expected value.',
    // ---------- institucional ----------
    'A entidade que garante a': 'The institution that safeguards the', 'integridade': 'integrity',
    'A SODIAM, E.P. é a empresa pública que controla e supervisiona a comercialização de diamantes em Angola. Somos o canal único através do qual a produção nacional é avaliada, negociada e exportada — protegendo o valor do recurso para o Estado, para as empresas e para as comunidades.':
      'SODIAM, E.P. is the state-owned company that controls and supervises diamond trading in Angola. We are the single channel through which national production is valued, negotiated and exported — protecting the value of the resource for the State, companies and communities.',
    'Governação e Conselho de Administração': 'Governance and Board of Directors', 'Pedra especial angolana em bruto': 'Angolan rough special stone',
    'Pedra especial angolana · diamante em bruto': 'Angolan special stone · rough diamond',
    'Promover a comercialização e a transformação dos diamantes, reinvestindo os ganhos em activos que beneficiam as comunidades locais.': 'To promote the trading and processing of diamonds, reinvesting the proceeds in assets that benefit local communities.',
    'Visão': 'Vision', 'Tornar-se um fornecedor de referência mundial de diamantes naturais, guiado pela ética e pela responsabilidade.': 'To become a world-leading supplier of natural diamonds, guided by ethics and responsibility.',
    'Valores': 'Values', 'Ética': 'Ethics', 'Transparência, previsibilidade e equilíbrio entre a intervenção pública e os agentes de mercado.': 'Transparency, predictability and balance between public intervention and market players.',
    'Compromisso': 'Commitment', 'Medidas estratégicas para preços estáveis e atractivos do diamante angolano.': 'Strategic measures for stable, attractive prices for Angolan diamonds.',
    'Fiabilidade': 'Reliability', 'Dados confiáveis sobre a comercialização de diamantes em Angola.': 'Reliable data on diamond trading in Angola.',
    // ---------- cadeia de valor ----------
    'Da mina ao mercado.': 'From mine to market.', 'Cada etapa, controlada.': 'Every step, controlled.',
    'Vista aérea de mina kimberlítica a céu aberto em Angola': 'Aerial view of an open-pit kimberlite mine in Angola',
    '01 · Extracção': '01 · Mining', 'Produção nacional': 'National production',
    'Minas kimberlíticas e explorações aluvionares nas províncias diamantíferas entregam a produção à SODIAM, que recebe e regista cada lote.': 'Kimberlite mines and alluvial operations in the diamond provinces deliver their production to SODIAM, which receives and records every lot.',
    'Triagem de diamantes em bruto na SODIAM': 'Rough diamond sorting at SODIAM', '02 · Triagem': '02 · Sorting', 'Recepção e classificação': 'Reception and classification',
    'Os diamantes são triados por tamanho, modelo, qualidade e cor, em ambiente seguro e auditável, com rastreabilidade de origem.': 'Diamonds are sorted by size, model, quality and colour in a secure, auditable environment, with full traceability of origin.',
    'Lote de diamantes angolanos em bruto': 'Lot of Angolan rough diamonds', '03 · Avaliação': '03 · Valuation', 'Valorização independente': 'Independent valuation',
    'Gemólogos certificados determinam o valor de mercado de cada lote, garantindo um preço justo ao Estado e aos produtores.': 'Certified gemologists determine the market value of every lot, ensuring a fair price for the State and producers.',
    'Compradores internacionais avaliam diamantes numa sala de visualização': 'International buyers assessing diamonds in a viewing room',
    '04 · Comercialização': '04 · Trading', 'Sights, spots e leilões': 'Sights, spots and auctions',
    'Venda a clientes de referência, operações pontuais e leilões electrónicos de pedras especiais, abertos a compradores internacionais qualificados.': 'Sales to reference clients, spot transactions and electronic auctions of special stones, open to qualified international buyers.',
    'Fábrica de lapidação no Pólo de Desenvolvimento Diamantífero de Saurimo': 'Cutting factory at the Saurimo Diamond Development Hub',
    '05 · Transformação': '05 · Beneficiation', 'Lapidação em Angola': 'Cutting in Angola',
    'O Pólo de Desenvolvimento Diamantífero de Saurimo (PDDS) e o centro de formação CEFOLAD acrescentam valor ao diamante dentro do país.': 'The Saurimo Diamond Development Hub (PDDS) and the CEFOLAD training centre add value to diamonds inside the country.',
    // ---------- atribuições ----------
    'Atribuições': 'Mandate', 'Quatro responsabilidades': 'Four responsibilities', 'ao serviço do Estado.': 'serving the State.',
    'Canal único de comercialização': 'Single trading channel', 'Compra, venda, negociação e exportação de todos os diamantes produzidos em Angola.': 'Purchase, sale, negotiation and export of all diamonds produced in Angola.',
    'Reservas estratégicas': 'Strategic reserves', 'Gestão das reservas estratégicas de diamantes do Estado angolano.': 'Management of the Angolan State’s strategic diamond reserves.',
    'Quota de produção': 'Production quota', 'Aquisição e revenda de 15 a 20% da quota de produção autorizada às empresas mineiras.': 'Purchase and resale of 15–20% of the production quota authorised to mining companies.',
    'Produção artesanal': 'Artisanal production', 'Compra e revenda de diamantes da produção artesanal e semi-industrial, formalizando a cadeia.': 'Purchase and resale of artisanal and semi-industrial production, formalising the chain.',
    // ---------- mapa ----------
    'Angola diamantífera': 'Diamond Angola', 'Um recurso nacional,': 'A national resource,', 'do Leste ao mundo.': 'from the East to the world.',
    'A produção concentra-se nas províncias do Leste — com as Lundas no centro da actividade kimberlítica e aluvionar. Em Luanda, a sede coordena a comercialização; em Saurimo, o PDDS transforma diamante em indústria.':
      'Production is concentrated in the eastern provinces — with the Lundas at the heart of kimberlite and alluvial activity. In Luanda, headquarters coordinates trading; in Saurimo, the PDDS turns diamonds into industry.',
    'Principais províncias produtoras': 'Main producing provinces', 'Outras províncias com ocorrências': 'Other provinces with occurrences', 'Sede e pólos SODIAM': 'SODIAM headquarters and hubs',
    'Passe o cursor sobre o mapa': 'Hover over the map', 'Angola · 18 províncias': 'Angola · 18 provinces', 'Província produtora': 'Producing province',
    'Ocorrências diamantíferas': 'Diamond occurrences', 'Província': 'Province',
    'Principal pólo kimberlítico e aluvionar do país.': 'The country’s main kimberlite and alluvial hub.',
    'Sede do PDDS em Saurimo e de grandes minas kimberlíticas.': 'Home of the PDDS in Saurimo and of major kimberlite mines.',
    'Ocorrências aluvionares e projectos de prospecção.': 'Alluvial occurrences and exploration projects.', 'Áreas de prospecção e exploração aluvionar.': 'Exploration and alluvial mining areas.',
    'Ocorrências kimberlíticas em estudo.': 'Kimberlite occurrences under study.', 'Áreas de prospecção diamantífera.': 'Diamond exploration areas.',
    'Sede · SODIAM, E.P.': 'Headquarters · SODIAM, E.P.', 'Saurimo · PDDS': 'Saurimo · PDDS',
    // ---------- leilões ----------
    '17.º leilão de diamantes em bruto.': '17th rough diamond auction.', '23,46% acima do valor esperado.': '23.46% above expected value.',
    'Encerrado a 26 de Junho de 2026, em Luanda, com a Trans Atlantic Gem Sales. Desde 2019, os leilões electrónicos da SODIAM trazem transparência e preços de mercado às pedras de maior valor de Angola.':
      'Closed on 26 June 2026 in Luanda, with Trans Atlantic Gem Sales. Since 2019, SODIAM’s electronic auctions have brought transparency and market prices to Angola’s most valuable stones.',
    'Receita líquida': 'Net revenue', 'Quilates leiloados': 'Carats auctioned', 'Empresas licitantes / convidadas': 'Bidding / invited companies', 'Acima do valor esperado': 'Above expected value',
    'Sala de licitação ao vivo — simulação ilustrativa': 'Live bidding room — illustrative simulation', 'Sala de licitação · ao vivo': 'Bidding room · live',
    'Demonstração · os leilões oficiais decorrem em sodiamsales.com': 'Demo · official auctions take place on sodiamsales.com',
    'Compradores qualificados': 'Qualified buyers', 'Antuérpia · Dubai · Mumbai · Ramat Gan → Luanda': 'Antwerp · Dubai · Mumbai · Ramat Gan → Luanda',
    'Lote em licitação': 'Lot under bidding', 'N.º': 'No.', 'Lance mais alto': 'Highest bid', 'Intensidade': 'Intensity', 'Fecho': 'Close',
    'Lances': 'Bids', 'Licitantes': 'Bidders', 'Adjudicado': 'Sold', 'Evolução do lance · US$': 'Bid history · US$', 'Hora': 'Time', 'Licitante': 'Bidder', 'Lance': 'Bid',
    'Branco': 'White', 'Octaedro': 'Octahedron', 'Irregular': 'Irregular', 'Amarelo claro': 'Light yellow', 'Macle': 'Macle', 'Dodecaedro': 'Dodecahedron', 'Castanho claro': 'Light brown',
    'Antuérpia': 'Antwerp', 'Nova Iorque': 'New York', 'Xangai': 'Shanghai', 'Joanesburgo': 'Johannesburg', 'Banguecoque': 'Bangkok', 'ÍNDICE SODIAM': 'SODIAM INDEX',
    'Cronologia de leilões': 'Auction timeline', '1.º leilão': '1st auction', '16.º leilão': '16th auction', '17.º leilão': '17th auction', '18.º leilão': '18th auction', 'Próximo': 'Next',
    '7 pedras especiais (43,25–114,94 ct) · US$ 16,7 M · 31 empresas de 8 países': '7 special stones (43.25–114.94 ct) · US$ 16.7 M · 31 companies from 8 countries',
    'Mar 2026': 'Mar 2026', 'Jun 2026': 'Jun 2026', '74 pedras especiais acima de 10,80 ct, por licitação electrónica': '74 special stones above 10.80 ct, by electronic tender',
    '35 pedras + lote run-of-mine · US$ 21,7 M líquidos': '35 stones + run-of-mine lot · US$ 21.7 M net',
    'Registe-se no portal para receber o catálogo e as datas de visualização.': 'Register on the portal to receive the catalogue and viewing dates.',
    'Aceder a sodiamsales.com ↗': 'Go to sodiamsales.com ↗', 'Tornar-se comprador qualificado': 'Become a qualified buyer',
    // ---------- oportunidades ----------
    'Oportunidades': 'Opportunities', 'Um mercado aberto': 'An open market', 'a parceiros de confiança.': 'to trusted partners.',
    'Angola abre-se a novos agentes do mercado de diamantes e à lapidação em território nacional. A SODIAM é a porta de entrada, com regras claras e um processo de qualificação rigoroso.':
      'Angola is opening up to new diamond market players and to cutting on national soil. SODIAM is the gateway, with clear rules and a rigorous qualification process.',
    'Fornecimento regular a clientes de referência, com contratos e volumes previsíveis.': 'Regular supply to reference clients, with predictable contracts and volumes.',
    'Vendas pontuais de lotes seleccionados, ao preço de mercado.': 'One-off sales of selected lots at market price.',
    'Licitação electrónica de pedras especiais e lotes run-of-mine em sodiamsales.com.': 'Electronic tender of special stones and run-of-mine lots on sodiamsales.com.',
    'Instalação de fábricas de lapidação e polimento no PDDS, em Saurimo.': 'Setting up cutting and polishing factories at the PDDS in Saurimo.',
    'Vista aérea do Pólo de Desenvolvimento Diamantífero de Saurimo': 'Aerial view of the Saurimo Diamond Development Hub', 'Saurimo · Lunda Sul': 'Saurimo · Lunda Sul',
    'Pólo de Desenvolvimento Diamantífero de Saurimo — a indústria de lapidação angolana, junto às minas.': 'Saurimo Diamond Development Hub — Angola’s cutting industry, next to the mines.',
    'Como tornar-se comprador qualificado': 'How to become a qualified buyer', 'Registo': 'Registration', 'Submissão da candidatura no portal': 'Application submitted on the portal',
    'Due diligence': 'Due diligence', 'KYC, origem dos fundos e compliance': 'KYC, source of funds and compliance', 'Declaração': 'Declaration',
    'Compromisso de boas práticas': 'Good-practice commitment', 'Acreditação': 'Accreditation', 'Acesso a sights, spots e leilões': 'Access to sights, spots and auctions',
    // ---------- sustentabilidade ----------
    'Sustentabilidade e impacto': 'Sustainability and impact', 'O valor do diamante': 'The value of diamonds', 'volta para as pessoas.': 'goes back to the people.',
    'Cada empresa que opera com a SODIAM assina uma declaração de compromisso com as boas práticas. Rastreabilidade, conformidade com o Processo de Kimberley e participação na ITIE Angola sustentam a confiança no diamante angolano.':
      'Every company working with SODIAM signs a good-practice commitment. Traceability, Kimberley Process compliance and participation in EITI Angola underpin trust in Angolan diamonds.',
    'Processo de Kimberley': 'Kimberley Process', 'Certificação de origem livre de conflito em todas as exportações.': 'Conflict-free origin certification on every export.',
    'ITIE Angola': 'EITI Angola', 'ITIE Angola ↗': 'EITI Angola ↗', 'Transparência nas indústrias extractivas e divulgação de receitas.': 'Transparency in extractive industries and disclosure of revenues.',
    'Rastreabilidade': 'Traceability', 'Registo do lote da mina à exportação, auditável em cada etapa.': 'Lot records from mine to export, auditable at every step.',
    'Boas práticas': 'Good practice', 'Declaração de compromisso obrigatória para todos os parceiros.': 'Mandatory commitment declaration for all partners.',
    'Edifício do centro de formação CEFOLAD em Saurimo': 'CEFOLAD training centre building in Saurimo', 'Formação · CEFOLAD · Saurimo': 'Training · CEFOLAD · Saurimo',
    'Formar a próxima geração de gemólogos e lapidadores angolanos.': 'Training the next generation of Angolan gemologists and cutters.',
    'Escola construída na província da Lunda Sul': 'School built in Lunda Sul province', 'Educação · Lunda Sul': 'Education · Lunda Sul',
    'Infra-estruturas escolares nas comunidades mineiras.': 'School infrastructure in mining communities.', 'Compromisso social': 'Social commitment',
    'Saúde': 'Health', 'Apoio à Maternidade Lucrécia Paim, em Luanda.': 'Support for the Lucrécia Paim Maternity Hospital in Luanda.', 'Comunidades': 'Communities',
    'Acções com a Fundação Brilhante.': 'Initiatives with Fundação Brilhante.', 'Desporto': 'Sport', 'Apoio a clubes do Leste de Angola.': 'Support for clubs in eastern Angola.',
    'Educação': 'Education', 'Escolas na província da Lunda Sul.': 'Schools in Lunda Sul province.', 'Relatório de impacto': 'Impact report',
    // ---------- governação / relatórios ----------
    'Governação': 'Governance', 'Transparência': 'Transparency', 'como princípio.': 'as a principle.',
    'Publicamos relatórios, contas e dados de mercado para que o Estado, os parceiros e os cidadãos acompanhem o desempenho do sector diamantífero.': 'We publish reports, accounts and market data so that the State, partners and citizens can follow the performance of the diamond sector.',
    'Conselho de Administração': 'Board of Directors', 'Estatutos e enquadramento legal': 'Statutes and legal framework', 'Política de Comercialização de Diamantes': 'Diamond Trading Policy',
    'Código de ética e canal de denúncias': 'Code of ethics and whistleblowing channel', 'Todos': 'All', 'Comunicados': 'Press releases', 'Outlook': 'Outlook',
    'Comunicado de imprensa — Resultados do 17.º leilão': 'Press release — Results of the 17th auction', 'Anúncio — Leilão online de 35 diamantes acima de 10 ct': 'Notice — Online auction of 35 diamonds above 10 ct',
    'Relatório e Contas 2025': 'Annual Report and Accounts 2025', 'Outlook do mercado de diamantes — Angola': 'Diamond market outlook — Angola',
    'Relatório de Sustentabilidade e Impacto': 'Sustainability and Impact Report', 'Comunicado de imprensa': 'Press release',
    // ---------- contactos ----------
    'Baía de Luanda ao anoitecer': 'Luanda bay at dusk', 'Fale com': 'Talk to', 'a SODIAM.': 'SODIAM.', 'Sede': 'Headquarters',
    'Rua Rainha Ginga n.º 87, 7.º andar': 'Rua Rainha Ginga No. 87, 7th floor', 'Edifício Endiama / De Beers, n.º 1072': 'Endiama / De Beers Building, No. 1072',
    'Telefone': 'Phone', 'E-mail': 'E-mail', 'Vendas': 'Sales', 'Assunto': 'Subject', 'Geral': 'General', 'Compradores': 'Buyers', 'Denúncia': 'Report',
    'Nome': 'Name', 'Organização': 'Organisation', 'Mensagem': 'Message', 'Enviar mensagem': 'Send message', 'A enviar…': 'Sending…',
    'Mensagem enviada. Obrigado — a SODIAM responderá em breve.': 'Message sent. Thank you — SODIAM will reply shortly.',
    'Não foi possível enviar. Tente novamente ou escreva para geral@sodiam.co.ao.': 'Could not send. Please try again or write to geral@sodiam.co.ao.',
    // ---------- blog ----------
    'Conhecimento e informação': 'Knowledge and insight', 'sobre o diamante angolano.': 'on Angolan diamonds.',
    'Análises de mercado, resultados de leilões, sustentabilidade e a actividade da SODIAM — directamente da entidade que comercializa os diamantes de Angola desde 1999.':
      'Market analysis, auction results, sustainability and SODIAM’s activity — straight from the institution that has traded Angola’s diamonds since 1999.',
    'Pesquisar': 'Search', 'Leilões, Kimberley, lapidação…': 'Auctions, Kimberley, cutting…', 'Nenhum artigo encontrado.': 'No articles found.',
    'Comunicados, leilões e relatórios': 'Press releases, auctions and reports', 'no seu e-mail.': 'in your inbox.', 'O seu e-mail profissional': 'Your business e-mail',
    'Perspectivas': 'Perspectives', 'Partilhar': 'Share', 'Copiar ligação': 'Copy link', 'Copiado ✓': 'Copied ✓', 'Continue a ler': 'Keep reading', 'Todos os artigos': 'All articles',
    'Institucional ': 'About', 'Eventos': 'Events', 'Mercado ': 'Market',
    'Diamantes de Angola': 'Diamonds of Angola', 'Blog SODIAM, E.P.': 'SODIAM, E.P. Blog',
    // artigos
    '17.º leilão: diamantes angolanos superam em 23,46% o valor esperado': '17th auction: Angolan diamonds beat expected value by 23.46%',
    'Encerrado em Luanda, o 17.º leilão de diamantes em bruto da SODIAM gerou cerca de US$ 21,7 milhões líquidos e confirmou a confiança do mercado internacional na produção angolana.': 'Closed in Luanda, SODIAM’s 17th rough diamond auction generated about US$ 21.7 million net and confirmed international confidence in Angolan production.',
    'A SODIAM, E.P. encerrou a 26 de Junho de 2026, em Luanda, o 17.º leilão de diamantes em bruto, realizado em parceria com a Trans Atlantic Gem Sales. Foram colocados no mercado 35 diamantes com mais de dez quilates e um lote run-of-mine, num total de 6 586,89 quilates.': 'On 26 June 2026, in Luanda, SODIAM, E.P. closed its 17th rough diamond auction, held in partnership with Trans Atlantic Gem Sales. 35 diamonds of more than ten carats and a run-of-mine lot were offered, totalling 6,586.89 carats.',
    'Um resultado acima das expectativas': 'A result above expectations',
    'A receita líquida aproximou-se dos US$ 21,7 milhões — cerca de 23,46% acima do valor esperado. Das 34 empresas convidadas, 27 apresentaram propostas, um nível de participação que demonstra a atractividade das pedras especiais angolanas junto dos principais centros mundiais de comercialização.': 'Net revenue approached US$ 21.7 million — about 23.46% above the expected value. Of the 34 companies invited, 27 submitted bids, a level of participation that shows how attractive Angolan special stones are to the world’s leading trading centres.',
    'Cada leilão reforça um princípio simples: transparência gera valor — para o Estado, para os produtores e para Angola.': 'Every auction reinforces a simple principle: transparency creates value — for the State, for producers and for Angola.',
    'Seis anos a abrir caminho': 'Six years of leading the way',
    'Desde o primeiro leilão electrónico de pedras especiais, em 2019, a SODIAM consolidou um modelo de venda competitivo, auditável e aberto a compradores qualificados de todo o mundo. O resultado é a formação de preços justos para os diamantes de maior valor produzidos no país.': 'Since the first electronic auction of special stones in 2019, SODIAM has consolidated a competitive, auditable sales model open to qualified buyers worldwide. The result is fair price formation for the most valuable diamonds produced in the country.',
    'Os compradores interessados em participar nos próximos leilões podem registar-se no portal sodiamsales.com para receber catálogos e datas de visualização.': 'Buyers interested in upcoming auctions can register on sodiamsales.com to receive catalogues and viewing dates.',
    'Três Vice-Presidentes do GIA em visita técnica de alto nível à SODIAM': 'Three GIA Vice-Presidents on a high-level technical visit to SODIAM',
    'A delegação do Gemological Institute of America conheceu de perto os processos de recepção, triagem e avaliação dos diamantes angolanos.': 'The Gemological Institute of America delegation saw first-hand how Angolan diamonds are received, sorted and valued.',
    'A SODIAM recebeu, em Janeiro de 2026, uma visita técnica de alto nível protagonizada por três Vice-Presidentes do Gemological Institute of America (GIA), uma das instituições de referência mundial em gemologia e certificação de diamantes.': 'In January 2026, SODIAM hosted a high-level technical visit by three Vice-Presidents of the Gemological Institute of America (GIA), one of the world’s leading institutions in gemology and diamond grading.',
    'Cooperação técnica e formação': 'Technical cooperation and training',
    'A agenda incluiu a apresentação dos processos de recepção, triagem e avaliação, bem como a discussão de oportunidades de cooperação na formação de quadros angolanos em gemologia — uma prioridade estratégica para acrescentar valor ao diamante dentro do país.': 'The agenda included a presentation of the reception, sorting and valuation processes and a discussion of cooperation opportunities in training Angolan gemologists — a strategic priority for adding value to diamonds within the country.',
    'A visita reforça o posicionamento de Angola como parceiro técnico credível no sector diamantífero internacional.': 'The visit strengthens Angola’s position as a credible technical partner in the international diamond sector.',
    '2025 em números: 17,8 milhões de quilates e US$ 1,8 mil milhões em exportações': '2025 in numbers: 17.8 million carats and US$ 1.8 billion in exports',
    'Angola manteve-se entre os maiores produtores mundiais de diamantes naturais, com um preço médio de US$ 101,70 por quilate.': 'Angola remained among the world’s largest producers of natural diamonds, at an average price of US$ 101.70 per carat.',
    'Em 2025, a SODIAM comercializou aproximadamente 17,8 milhões de quilates de diamantes em bruto, correspondentes a cerca de US$ 1,8 mil milhões, a um preço médio de US$ 101,70 por quilate.': 'In 2025, SODIAM traded approximately 17.8 million carats of rough diamonds, worth about US$ 1.8 billion, at an average price of US$ 101.70 per carat.',
    'Uma produção diversificada': 'A diversified production',
    'A produção resulta da actividade de 27 empresas mineiras, kimberlíticas e aluvionares, concentradas sobretudo nas províncias do Leste. A diversidade de origens confere ao diamante angolano um perfil comercial amplo, das pedras de qualidade industrial às pedras especiais de grande valor.': 'Production comes from 27 kimberlite and alluvial mining companies, mainly in the eastern provinces. This diversity of origins gives Angolan diamonds a broad commercial profile, from industrial-quality goods to high-value special stones.',
    'Num mercado global em ajustamento, a estratégia da SODIAM assenta na estabilidade de preços, na diversificação de canais de venda — sights, spots e leilões — e no reforço da transformação local através do Pólo de Desenvolvimento Diamantífero de Saurimo.': 'In an adjusting global market, SODIAM’s strategy rests on price stability, diversified sales channels — sights, spots and auctions — and stronger local beneficiation through the Saurimo Diamond Development Hub.',
    'Processo de Kimberley: como Angola garante diamantes livres de conflito': 'Kimberley Process: how Angola guarantees conflict-free diamonds',
    'Da mina à exportação, cada lote de diamantes angolanos é registado, certificado e acompanhado por documentação oficial.': 'From mine to export, every lot of Angolan diamonds is recorded, certified and accompanied by official documentation.',
    'O Sistema de Certificação do Processo de Kimberley é o mecanismo internacional que impede a entrada de diamantes de conflito no mercado legítimo. Angola é membro activo e cumpre os seus requisitos em todas as exportações de diamantes em bruto.': 'The Kimberley Process Certification Scheme is the international mechanism that keeps conflict diamonds out of the legitimate market. Angola is an active member and meets its requirements on every rough diamond export.',
    'O papel da SODIAM': 'SODIAM’s role',
    'Enquanto canal único de comercialização, a SODIAM assegura que cada lote é recebido, registado, avaliado e exportado com o respectivo certificado. Esta centralização é a base da rastreabilidade do diamante angolano.': 'As the single trading channel, SODIAM ensures that every lot is received, recorded, valued and exported with its certificate. This centralisation is the foundation of Angolan diamond traceability.',
    'Rastreabilidade não é um requisito burocrático — é a garantia que dá valor ao diamante angolano no mercado mundial.': 'Traceability is not a bureaucratic requirement — it is the guarantee that gives Angolan diamonds their value on the world market.',
    'Transparência reforçada': 'Strengthened transparency',
    'A participação na ITIE Angola e a declaração de compromisso com as boas práticas, exigida a todos os parceiros, completam um quadro de integridade que posiciona Angola como origem de confiança.': 'Participation in EITI Angola and the good-practice commitment required of all partners complete an integrity framework that positions Angola as a trusted origin.',
    'Como funciona um leilão electrónico de pedras especiais': 'How an electronic special stone auction works',
    'Da selecção das pedras à adjudicação: um guia para compradores que pretendem participar nos leilões da SODIAM.': 'From stone selection to award: a guide for buyers who wish to take part in SODIAM auctions.',
    'As pedras especiais — diamantes com mais de 10,80 quilates — são comercializadas por licitação electrónica, um modelo que garante concorrência efectiva e preços de mercado.': 'Special stones — diamonds over 10.80 carats — are sold by electronic tender, a model that ensures real competition and market prices.',
    '1. Selecção e avaliação': '1. Selection and valuation',
    'As pedras são seleccionadas e avaliadas por gemólogos certificados. O catálogo é preparado com informação técnica detalhada para os compradores qualificados.': 'Stones are selected and valued by certified gemologists. The catalogue is prepared with detailed technical information for qualified buyers.',
    '2. Visualização': '2. Viewing',
    'Os compradores registados são convidados para sessões de visualização presencial, onde podem examinar cada pedra antes de licitar.': 'Registered buyers are invited to in-person viewing sessions where they can examine each stone before bidding.',
    '3. Licitação e adjudicação': '3. Bidding and award',
    'As propostas são submetidas em plataforma electrónica segura, em envelope fechado, até à data e hora de encerramento. A adjudicação é feita à melhor proposta, com divulgação pública dos resultados agregados.': 'Bids are submitted on a secure electronic platform, as sealed bids, until the closing date and time. Each lot is awarded to the best bid, and aggregate results are published.',
    'Lapidar em Angola: o Pólo de Desenvolvimento Diamantífero de Saurimo': 'Cutting in Angola: the Saurimo Diamond Development Hub',
    'Transformar o diamante dentro do país é o próximo passo para multiplicar o seu valor para a economia angolana.': 'Processing diamonds inside the country is the next step to multiply their value for the Angolan economy.',
    'O Pólo de Desenvolvimento Diamantífero de Saurimo (PDDS), na província da Lunda Sul, foi concebido para acolher fábricas de lapidação e polimento, aproximando a indústria das zonas de produção.': 'The Saurimo Diamond Development Hub (PDDS), in Lunda Sul province, was designed to host cutting and polishing factories, bringing industry closer to the production areas.',
    'Valor acrescentado, emprego qualificado': 'Added value, skilled jobs',
    'A lapidação local cria emprego qualificado, desenvolve competências técnicas e retém em Angola uma parte maior do valor de cada diamante. A SODIAM apoia o pólo assegurando o fornecimento de matéria-prima às fábricas instaladas.': 'Local cutting creates skilled jobs, builds technical expertise and keeps a larger share of each diamond’s value in Angola. SODIAM supports the hub by supplying rough to the factories.',
    'Investidores interessados em instalar unidades de lapidação podem contactar a SODIAM para conhecer as condições de fornecimento e o enquadramento aplicável.': 'Investors interested in setting up cutting units can contact SODIAM to learn about supply conditions and the applicable framework.',
    'CEFOLAD: formar a próxima geração de gemólogos e lapidadores angolanos': 'CEFOLAD: training the next generation of Angolan gemologists and cutters',
    'A formação técnica é a base de uma indústria diamantífera nacional competitiva.': 'Technical training is the foundation of a competitive national diamond industry.',
    'O centro de formação CEFOLAD prepara jovens angolanos para as profissões da cadeia de valor do diamante — da triagem e avaliação à lapidação e polimento.': 'The CEFOLAD training centre prepares young Angolans for careers along the diamond value chain — from sorting and valuation to cutting and polishing.',
    'Ao investir em capital humano, a SODIAM garante que o crescimento do sector se traduz em oportunidades reais para os angolanos.': 'By investing in people, SODIAM ensures that the sector’s growth turns into real opportunities for Angolans.',
    'Encontro de alinhamento e liderança no Centro de Convenções de Talatona': 'Alignment and leadership meeting at the Talatona Convention Centre',
    'Quadros e liderança da SODIAM reuniram-se para alinhar prioridades estratégicas para o novo ciclo.': 'SODIAM’s managers and leadership met to align strategic priorities for the new cycle.',
    'A SODIAM, E.P. realizou a 12 de Dezembro de 2025, no Hotel e Centro de Convenções de Talatona, um encontro de alinhamento e liderança dedicado às prioridades estratégicas da empresa.': 'On 12 December 2025, at the Talatona Hotel and Convention Centre, SODIAM, E.P. held an alignment and leadership meeting devoted to the company’s strategic priorities.',
    'O encontro reforçou a cultura de rigor, transparência e orientação para resultados que caracteriza a SODIAM.': 'The meeting reinforced the culture of rigour, transparency and results that defines SODIAM.',
    '26 anos a brilhar com Angola': '26 years shining with Angola',
    'Fundada em Novembro de 1999, a SODIAM celebra mais de um quarto de século como guardiã do valor do diamante angolano.': 'Founded in November 1999, SODIAM celebrates more than a quarter of a century as guardian of the value of Angolan diamonds.',
    'Desde 1999, a SODIAM é a entidade pública responsável pela comercialização dos diamantes angolanos. Ao longo de 26 anos, construiu um modelo de mercado que combina a protecção do interesse do Estado com a abertura a parceiros internacionais.': 'Since 1999, SODIAM has been the public entity responsible for trading Angolan diamonds. Over 26 years it has built a market model that combines protecting the State’s interest with openness to international partners.',
    'Pioneirismo': 'Pioneering spirit',
    'Foi a SODIAM que introduziu em Angola os leilões electrónicos de pedras especiais, em 2019, abrindo um novo capítulo de transparência na formação de preços.': 'It was SODIAM that introduced electronic special stone auctions to Angola in 2019, opening a new chapter of transparency in price formation.',
    'O próximo capítulo passa pela transformação local, pela formação de quadros e pelo reforço da rastreabilidade — sempre com o mesmo propósito: tornar os diamantes em activos que geram futuro brilhante para Angola.': 'The next chapter is about local beneficiation, training and stronger traceability — always with the same purpose: turning diamonds into assets that create a brilliant future for Angola.',
  };
  const MONTHS = { Jan: 'Jan', Fev: 'Feb', Mar: 'Mar', Abr: 'Apr', Mai: 'May', Jun: 'Jun', Jul: 'Jul', Ago: 'Aug', Set: 'Sep', Out: 'Oct', Nov: 'Nov', Dez: 'Dec' };
  const RULES = [
    [/^(\d+) min de leitura( →)?$/, (m, n, a) => `${n} min read${a || ''}`],
    [/^LOTE (\d+)$/, (m, n) => `LOT ${n}`],
    [/^(\d{1,2}) (Jan|Fev|Mar|Abr|Mai|Jun|Jul|Ago|Set|Out|Nov|Dez) (\d{4})$/, (m, d, mo, y) => `${d} ${MONTHS[mo]} ${y}`],
  ];
  const tr = t => {
    if (EN[t] !== undefined) return EN[t];
    for (const [re, f] of RULES) if (re.test(t)) return t.replace(re, f);
    if (t.includes(' · ')) { const parts = t.split(' · '); const out = parts.map(p => tr(p) ?? p); if (out.some((x, i) => x !== parts[i])) return out.join(' · '); }
    return null;
  };

  let lang = 'pt';
  try { lang = localStorage.getItem('sodiam-lang') || 'pt'; } catch (e) {}
  const orig = new WeakMap();
  const ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];
  const skip = n => { const p = n.parentElement; return !p || p.closest('script,style,svg text,.count'); };

  function doText(n) {
    if (skip(n)) return;
    const raw = n.nodeValue, t = raw.trim();
    if (!t) return;
    if (lang === 'en') {
      const en = tr(t);
      if (en != null && en !== t) { orig.set(n, t); n.nodeValue = raw.replace(t, en); }
    } else if (orig.has(n)) {
      const pt = orig.get(n); orig.delete(n); n.nodeValue = raw.replace(t, pt);
    }
  }
  function doEl(el) {
    for (const a of ATTRS) {
      const v = el.getAttribute && el.getAttribute(a); if (!v) continue;
      const key = 'data-pt-' + a;
      if (lang === 'en') { const en = tr(v.trim()); if (en != null && en !== v) { if (!el.hasAttribute(key)) el.setAttribute(key, v); el.setAttribute(a, en); } }
      else if (el.hasAttribute(key)) { el.setAttribute(a, el.getAttribute(key)); el.removeAttribute(key); }
    }
  }
  function walk(root) {
    if (root.nodeType === 3) return doText(root);
    if (root.nodeType !== 1) return;
    doEl(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n; while ((n = w.nextNode())) n.nodeType === 3 ? doText(n) : doEl(n);
  }
  let busy = false;
  const mo = new MutationObserver(list => {
    if (lang !== 'en' || busy) return;
    busy = true;
    for (const m of list) {
      if (m.type === 'characterData') doText(m.target);
      else m.addedNodes.forEach(walk);
    }
    busy = false;
  });
  // blocos com versão inglesa escrita à mão (data-en) — usados nas páginas institucionais
  function bilingual() {
    document.querySelectorAll('[data-en]').forEach(el => {
      if (lang === 'en') { if (!el.hasAttribute('data-pt')) el.setAttribute('data-pt', el.innerHTML); el.innerHTML = el.getAttribute('data-en'); }
      else if (el.hasAttribute('data-pt')) { el.innerHTML = el.getAttribute('data-pt'); el.removeAttribute('data-pt'); }
    });
  }
  function apply(l) {
    lang = l;
    try { localStorage.setItem('sodiam-lang', l); } catch (e) {}
    document.documentElement.lang = l === 'en' ? 'en' : 'pt-AO';
    busy = true; bilingual(); walk(document.body); busy = false;
    // título do separador
    if (!window.__ptTitle) window.__ptTitle = document.title;
    document.title = l === 'en' ? window.__ptTitle.split(' — ').map(x => tr(x) ?? x).join(' — ') : window.__ptTitle;
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('is-on', b.textContent.trim().toLowerCase() === l));
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('.lang button'); if (!b) return;
    e.stopImmediatePropagation();
    apply(b.textContent.trim().toLowerCase() === 'en' ? 'en' : 'pt');
  }, true);
  mo.observe(document.body, { childList: true, subtree: true, characterData: true });
  window.SODIAM_LANG = () => lang;
  if (lang === 'en') { if (document.readyState === 'loading') addEventListener('DOMContentLoaded', () => apply('en')); else apply('en'); }
})();
