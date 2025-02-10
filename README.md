<h1 align="center">Portfolio - Thiago</h1>
<p align="center"><i>Repositório para versionamento e documentação do projeto Portfolio - Thiago.</i></p>

<p align="center" display="inline-block">
  <img src="https://img.shields.io/badge/HTML-orange?logo=html5&logoColor=white&labelColor=orange&color=orange" alt="HTML 5"/>
  <img src="https://img.shields.io/badge/React-%2328C1DB?logo=react&logoColor=white&labelColor=%2328C1DB" alt="react"/>
  <img src="https://img.shields.io/badge/TypeScript-%232F74C0?logo=typescript&logoColor=white&labelColor=%232F74C0" alt="typescript"/>
  <img src="https://img.shields.io/badge/TailWind-%231BC1B1?logo=tailwindcss&logoColor=white&labelColor=%231BC1B1" alt="tailwind css"/>
  <img src="https://img.shields.io/badge/CSS3-%23146EB0?logo=css3&logoColor=white&labelColor=%23146EB0" alt="css 3"/>
  <img src="https://img.shields.io/badge/Vite-%23B337F7?logo=vite&logoColor=white&labelColor=%23B337F7" alt="vite"/>
  <img src="https://img.shields.io/badge/NPM-%23C43636?logo=npm&logoColor=white&labelColor=%23C43636" alt="npm"/>
</p>

##  Sobre o Projeto

Este é o meu portfólio pessoal, desenvolvido com React, Vite e TypeScript. O objetivo do projeto é apresentar minhas habilidades, experiências e projetos de forma moderna e interativa.

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenção do projeto.
- **Vite**: Ferramenta de build e desenvolvimento que proporciona uma experiência de desenvolvimento rápida e eficiente.
- **Tailwind CSS**: Framework de CSS utilitário que permite a construção de interfaces modernas e responsivas com facilidade.
- **React Router Dom**: Biblioteca para gerenciamento de rotas na aplicação React, permitindo a navegação entre diferentes páginas de forma simples e eficaz.

### Funcionalidades

- **Informações**: Apresentação de informações pessoais e profissionais.
- **Portfolio**: Lista de projetos realizados com links para mais detalhes.
- **Contato**: Seção de contato para facilitar a comunicação.
- **Navegação Eficiente**: Implementação de rotas dinâmicas e estáticas com o React Router Dom para uma navegação fluida.

### Requisitos

- Node.js (Versão 20.12.1);
- npm
                                                                                                  
### Ferramento do Desenvolvedor

<p display="inline-block">
  <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode-logo"/>
</p>

## Running

npm run dev

## Build

npm run build

##  Components

A pasta **Components** é destinada à criação e armazenamento de todos os componentes reutilizáveis que serão utilizados no projeto. Esses componentes são blocos de construção independentes e encapsulados que podem ser utilizados em várias partes da aplicação, promovendo a reutilização de código e a modularidade.

### Menu

O componente **Menu** implementa um menu de navegação com efeito de slide, que se abre ao clicar no ícone de hambúrguer. Ele utiliza o estado isMenuOpen para controlar a visibilidade do menu e hoveredText para exibir o texto de cada item do menu ao passar o mouse sobre ele. Ao clicar em um item, o menu se fecha automaticamente e a navegação é realizada através de links configurados com o React Router. O componente também inclui um logo que rotaciona ao ser clicado e um ícone de fechamento com transições suaves. As opções de idioma são gerenciadas com o i18n, permitindo tradução dinâmica do texto exibido no menu.

### Animate-Background

O componente **Particle** é responsável por renderizar um plano de fundo animado utilizando a biblioteca tsparticles, que cria partículas interativas em tela. Ele inicializa o motor de partículas com configurações personalizadas, incluindo comportamento de interação (como repulsão ao passar o mouse ou clique para adicionar partículas), estilização, e desempenho otimizado com limite de FPS. O componente também permite carregar uma imagem no fundo e adapta o comportamento das partículas para garantir uma experiência visual fluida e dinâmica.

### CustomButton

O componente **CustomButton** é uma solução flexível para renderizar botões ou links estilizados com suporte a tooltips, acessibilidade, e tradução. Ele aceita diversas propriedades, como texto, tipo, URL, evento de clique e estado de desabilitação, adaptando-se dinamicamente ao uso como link ou botão. Quando o atributo tooltip é fornecido, o botão é envolvido em um tooltip interativo, exibindo informações adicionais ao passar o cursor. O estilo e comportamento incluem animações suaves e desabilitação visual com classes utilitárias para melhorar a usabilidade e a experiência do usuário.

### CustomCarousel

O componente **CustomCarousel** é um carrossel interativo que exibe uma coleção de imagens com links associados, projetado para destacar trabalhos realizados. Ele utiliza o Carousel personalizado com suporte ao plugin de reprodução automática (Autoplay), proporcionando uma transição suave entre os itens a cada 2 segundos. Os dados do carrossel são dinâmicos, carregados de um arquivo externo, e incluem links clicáveis que abrem em uma nova aba. Além disso, o componente suporta internacionalização, exibindo textos traduzidos. Estilizado com responsividade, ele oferece animações de escala ao passar o cursor, criando uma experiência visual atraente e interativa.

### CustomProgress

O componente **CustomProgress** exibe uma seção de barras de progresso que representa habilidades ou competências, com valores e rótulos dinâmicos carregados de um arquivo de dados externo. Ele utiliza o componente de progresso estilizado e suporta internacionalização para exibir o título e os rótulos traduzidos. Projetado para ser responsivo, o layout adapta-se a diferentes tamanhos de tela, organizando as barras em colunas ou linhas conforme necessário. Ideal para apresentar habilidades de forma visual e clara, ele combina funcionalidade e estética para enriquecer a experiência do usuário.

### Designs

O componente **Designs** apresenta uma lista de projetos ou trabalhos de design, organizados dinamicamente com base em um conjunto de dados. Cada item inclui uma imagem representativa, um título destacado, uma breve descrição e um botão personalizável que pode conter links externos. Com suporte à internacionalização, o texto é exibido no idioma configurado pelo usuário. O layout é responsivo, adaptando-se a dispositivos móveis e desktops, e utiliza uma abordagem visualmente atraente com cores contrastantes e seções bem delineadas. Ideal para destacar projetos em um portfólio com uma experiência de usuário elegante e funcional.

### Footer

O componente **Footer** é responsável pelo rodapé do portfólio, apresentando uma estrutura funcional e minimalista. Ele inclui um trocador de idiomas, representado pelo componente LanguageSwitcher, permitindo a alternância dinâmica entre os idiomas suportados. Além disso, exibe uma mensagem centralizada com o texto traduzível de direitos autorais, destacando o nome do autor do portfólio. O layout é responsivo, com um design que se adapta bem a diferentes tamanhos de tela, utilizando uma paleta de cores sóbria com fundo escuro e texto claro, garantindo uma experiência visual harmoniosa.

### Header

O componente **Header** é responsável pela seção de cabeçalho do portfólio, oferecendo uma interface elegante e funcional. Ele apresenta o logotipo do portfólio, estilizado com bordas arredondadas, uma borda destacada em amarelo e uma animação de rotação suave ao passar o mouse, adicionando um toque de dinamismo. Além disso, o cabeçalho inclui o componente Menu, posicionado à direita, que fornece uma navegação intuitiva para as diferentes seções do portfólio. O layout responsivo garante que o cabeçalho seja bem exibido em diferentes dispositivos, mantendo uma aparência organizada e profissional.

### Information

O componente **Information** exibe informações de contato e links para redes sociais em um layout visualmente atraente e organizado. Ele utiliza uma imagem de fundo estilizada com uma sobreposição escura para destacar os conteúdos principais. As informações de contato, como e-mail e telefone, são apresentadas com ícones grandes e destacados em amarelo, criando contraste com o texto branco. Na parte inferior, os ícones das redes sociais são exibidos de forma espaçada e com uma animação de aumento ao passar o mouse, incentivando a interação do usuário. O design responsivo garante uma experiência consistente em diferentes tamanhos de tela.

### LanguageSwitcher

O componente **LanguageSwitcher** fornece uma interface simples e intuitiva para alternar entre os idiomas do site, utilizando o recurso de tradução do i18n. Ele exibe dois botões estilizados para as opções de idiomas disponíveis: Português e Inglês. Ao clicar em um botão, a linguagem ativa é alterada dinamicamente, permitindo ao usuário navegar pelo site no idioma de sua preferência de forma instantânea e sem recarregar a página.

### Services

O componente **Services** exibe uma seção com informações sobre os serviços oferecidos. Ele mapeia um array de objetos services, renderizando cada serviço com um ícone, título e descrição. Cada serviço é apresentado em um cartão com um efeito de expansão no fundo, que cresce ao passar o mouse sobre ele. O texto e os ícones dos serviços são traduzidos dinamicamente usando o useTranslation do react-i18next. Os cartões possuem uma animação suave ao interagir com eles, além de um design responsivo que se ajusta em diferentes tamanhos de tela.

### TooltipMensseg

O componente **TooltipMensseg** exibe um botão com um efeito de tooltip que aparece ao passar o mouse sobre ele. Quando o usuário passa o mouse sobre o botão "Hover", o tooltip é ativado e exibe a mensagem "Add to library". O componente utiliza os componentes Tooltip, TooltipContent, TooltipTrigger e TooltipProvider da biblioteca UI, oferecendo uma maneira simples de mostrar informações adicionais ao usuário de forma interativa.

## Pages

A pasta **pages** contém todas as páginas do nosso projeto. Cada página é um componente React responsável por renderizar uma seção específica da aplicação. Estas páginas são gerenciadas pelo React Router DOM, sendo reinderizadas dentro de um layout, para proporcionar uma navegação fluida e intuitiva.

A pasta **pages** tem como objetivo organizar todas as páginas da aplicação de maneira estruturada e modular, facilitando a manutenção e a expansão do projeto. Novas páginas podem ser adicionadas conforme necessário, sem a necessidade de alterar a estrutura ou o funcionamento do roteamento principal.

### Home

A página Home apresenta uma introdução ao usuário, com uma estrutura organizada em três seções principais:

- Redes sociais: A primeira seção contém ícones de redes sociais, que são mapeados a partir de socialData e exibidos com um efeito de hover. Cada ícone é um link para abrir o perfil da rede social em uma nova aba.

- Saudação e apresentação: A segunda seção mostra o nome do usuário (Thiago Silva Souza) com um subtítulo que varia de acordo com a tradução ativa, acompanhado de uma animação de texto com o Typewriter, mostrando uma lista de palavras definidas em words. O texto é dinâmico e, ao ser renderizado, parece que está sendo digitado e apagado, criando um efeito visual interessante.

- Contato: A última seção exibe ícones de contato, como o Telegram, e permite que o visitante entre em contato rapidamente, com links para abrir o aplicativo de mensagens em novas abas. Cada ícone de contato é clicável e possui uma animação de hover.

Além disso, a página conta com um fundo animado proporcionado pelo componente Particle, criando um efeito visual de partículas se movendo no plano de fundo. Isso adiciona uma sensação de dinamismo e modernidade à página.

A tradução do conteúdo é feita através do i18n (React i18next), permitindo que o site seja exibido em múltiplos idiomas conforme a escolha do usuário.

### About

A página About apresenta uma introdução sobre o usuário, destacando sua experiência profissional e habilidades. Ela utiliza o componente CustomButton para permitir o download do currículo em português e inglês, além de incluir uma imagem do usuário. Em seguida, são renderizados os componentes Services e CustomProgress, que detalham os serviços oferecidos e o progresso nas habilidades do usuário. O conteúdo é dinâmico, com textos traduzíveis usando o useTranslation do React i18next, garantindo suporte a múltiplos idiomas.

### Contact

A página Contact é voltada para o contato do usuário, oferecendo uma seção com informações e um formulário (presumivelmente contido no componente Information) para que os visitantes possam enviar mensagens. O título da página é dinâmico, com traduções gerenciadas pelo useTranslation do React i18next, permitindo um conteúdo multilíngue. O componente Information provavelmente exibe detalhes de contato, como e-mail, telefone e links para redes sociais. A estrutura é centrada e adaptável, com uma boa apresentação em dispositivos de diferentes tamanhos.

### Portfolio

A página Portfolio é dedicada à exibição dos projetos e trabalhos realizados, e está estruturada da seguinte maneira:

- Cabeçalho: O título da seção é exibido em um formato grande e centralizado, com o nome do portfólio, traduzido através do i18n para se adaptar ao idioma escolhido pelo usuário. Abaixo do título, uma breve descrição é fornecida, destacando a natureza dos trabalhos (meus projetos).

- Designs: A página faz uso do componente Designs para exibir uma galeria ou lista de designs/projetos. Este componente provavelmente inclui a exibição de imagens, títulos, e talvez links para projetos ao vivo ou detalhes adicionais.

- Carrossel de Projetos: Após os designs, o componente CustomCarousel é inserido para fornecer um carrossel interativo de imagens ou vídeos. Esse carrossel permite ao usuário navegar pelos projetos de maneira dinâmica e visualmente atraente.

Esse layout é ideal para quem deseja exibir uma coleção de trabalhos de forma organizada e interativa, com uma boa combinação de galeria estática e interatividade através do carrossel. A tradução do conteúdo é gerida via i18n, assegurando que a página seja acessível em múltiplos idiomas.

## Layout

A pasta **Layouts** contém os componentes de layout que definem a estrutura visual e organizacional das páginas do nosso projeto. Cada layout é criado uma única vez e serve como um contêiner para as rotas filhas gerenciadas pelo React Router DOM através do componente **Outlet**.

### Main

O layout Main é responsável por definir a estrutura básica da página, utilizando o conceito de "layout" para envolver as páginas e componentes da aplicação. Ele organiza os elementos essenciais como o cabeçalho (header), conteúdo principal (main), e o rodapé (footer). Vamos analisar a estrutura:

- Estrutura geral: O layout é definido como uma estrutura flexível com flex e flex-col para garantir que os componentes principais (cabeçalho, conteúdo, rodapé) sejam organizados em uma coluna vertical.

- Header: O cabeçalho é carregado no topo da página. Ele recebe o componente Header, que é responsável pela exibição do logo, menu, ou outras informações relacionadas ao topo da página.

- Main: A área principal da página, onde o conteúdo específico de cada página será renderizado, é gerida pelo Outlet do react-router-dom. Isso significa que o conteúdo dinâmico de cada página será inserido aqui, dependendo da rota acessada. O Outlet permite que o layout permaneça constante, enquanto o conteúdo da página muda conforme a navegação.

- Footer: O rodapé é carregado no final da página e contém informações como copyright, links, ou outros dados importantes para o usuário. Ele recebe o componente Footer, que provavelmente é dinâmico e pode ter diferentes informações ou links dependendo da página.

Este layout é eficiente para manter a consistência na estrutura visual do site, enquanto permite que o conteúdo de cada página seja facilmente substituído conforme a navegação do usuário, sem perder a navegação ou a base do design.

## Styles

O arquivo **index.css** é onde armazenamos os arquivos CSS globais do projeto. Este arquivo é utilizada para centralizar os estilos que são compartilhados entre diferentes componentes e páginas, promovendo a reutilização de código e a manutenção consistente do design visual da aplicação.

## Routes

O arquivo **routes.tsx** é responsável pela definição e organização das rotas da aplicação utilizando o React Router DOM. Ele centraliza a criação das rotas principais e a associação delas aos diferentes layouts e componentes de páginas da aplicação.

### Estrutura e Funcionalidades

- **React Router DOM:** Utilizado para gerenciar a navegação entre diferentes páginas e layouts da aplicação.
- **Layouts e Rotas Filhas:** Utiliza o componente <Outlet /> do React Router DOM para criar rotas filhas dentro de cada layout principal. Isso permite a organização hierárquica das páginas e o controle preciso do fluxo de navegação.

## Bibliotecas

### Tail Wind

**Tailwind CSS** é um framework de CSS utilitário que oferece uma abordagem diferente para estilização de páginas web. Em vez de fornecer classes predefinidas para componentes específicos, como botões ou cards, Tailwind oferece uma série de classes utilitárias de baixo nível que podem ser combinadas para criar interfaces customizadas de maneira rápida e eficiente.

Um recurso muito interessante do Tailwind CSS que está sendo usado neste projeto é o cssnano. Dentro do arquivo postcss.config.js, você encontrará a seguinte linha de código:

...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),

Este código permite que, ao realizar a build do projeto, seja criado um CSS minificado que inclui apenas os estilos do Tailwind CSS que foram efetivamente utilizados. Os estilos não utilizados não são incluídos na build de produção, o que torna o projeto mais leve e otimizado para desempenho.

O **cssnano** é uma ferramenta de minificação de CSS que ajuda a reduzir o tamanho dos arquivos CSS, removendo espaços em branco, comentários e aplicando outras otimizações. No contexto do Tailwind CSS, isso é especialmente útil porque garante que apenas os estilos necessários são incluídos na build final, eliminando qualquer CSS desnecessário.

### React Router Dom

Neste projeto utilizamos a biblioteca **React Router DOM**, um biblioteca para criação de rotas criada especialmente para o React. Utilizamos cinco componentes desta iblioteca para a ciação de rotas no nosso projeto, BrowserRouter, Routes, Route, Outlet e Link.

- **BrowserRouter:** Deve englobar todo o nosso projeto, todas as rotas e componentes devem estar dentro deste componente para que o sistema de rotas funciona corretamente;
- **Routes:** Engloba todos os componentes que serão trocados conforme navegamos pelo site;
- **Route:**  Possui duas propriedades: path e element. Ele será responsável por chamar o componente atribuído em element de acordo com a rota definida em path, ou seja, sempre que determinada rota for acessada no navegador o componente presente em element será renderizado;
- **Outlet:** Neste projeto o Outlet é passado dentro dos layouts com a função de fazer a troca das pages, as rotas filhas, que são passadas dentro do Route;
- **Link:** O Link é usado no lugar da tag <a></a> para que o reload da página não aconteça quando clicarmos nos links. Além disso, o href será trocado por to.

### Font Awesome

**Font Awesome** é uma das bibliotecas de ícones mais populares e amplamente utilizadas no desenvolvimento web. Ela fornece uma ampla coleção de ícones vetoriais escaláveis que podem ser facilmente customizados — tamanho, cor, sombra, e qualquer coisa que possa ser feito com o poder do CSS.

No React, para que ela consiga renderizar os componetes é necessario fazer o import dos componente *FontAwesomeIcon* e dentro do componente utilizando o icon={} são passados os icones que também devem ser importados de respectivas pastas da biblioteca.

### Jest

**Jest** é uma das bibliotecas de testes mais populares para aplicações JavaScript, e funciona muito bem com React. Desenvolvido pelo Facebook, é amplamente utilizado em projetos React para testes unitários, testes de integração e até mesmo testes de snapshot.

### React Testing Library

O **React Testing Library** é uma  biblioteca oferece utilitários para testar componentes React de forma que o comportamento do usuário seja o foco principal. Ela promove testes mais orientados à experiência do usuário ao invés de detalhes da implementação do componente.

### @testing-library/jest-dom

O **@testing-library/jest-dom** é uma extensão para o *Jest*, adiciona métodos adicionais ao expect() para facilitar o teste de elementos DOM.

### Babel

**Babel** é uma ferramenta popular utilizada em projetos JavaScript e TypeScript para transpilar o código, convertendo sintaxes modernas de JavaScript/TypeScript em versões mais antigas, garantindo compatibilidade com diferentes navegadores e ambientes. Ele é amplamente utilizado no desenvolvimento de aplicações React para lidar com novas features do ECMAScript, JSX e TypeScript.

### tsparticles

**tsparticles** é uma biblioteca JavaScript para criar animações de partículas interativas e personalizáveis em websites. Ela permite adicionar efeitos dinâmicos como partículas flutuantes, estrelas e neblinas, com alta performance e fácil integração. Oferece controle sobre a aparência e comportamento das partículas, como cor, velocidade e interatividade com o usuário, sendo ideal para melhorar o visual e a experiência do usuário em sites e aplicações.

### Typewriter

A biblioteca **Typewriter** é uma ferramenta simples para criar efeitos de digitação em texto em sites. Ela simula a ação de uma máquina de escrever, digitando e apagando palavras ou frases de forma automatizada. É altamente personalizável, permitindo controlar a velocidade da digitação, o cursor, e a repetição dos textos. É uma excelente escolha para adicionar animações de texto interativas e chamativas em projetos web.

### Shadcn

**ShadCN** é uma biblioteca de componentes de interface de usuário (UI) para React, que oferece uma coleção de componentes prontos para serem usados e personalizáveis. Ela é baseada no design system de alta qualidade e permite criar aplicações modernas e acessíveis de forma rápida. A biblioteca foca na simplicidade, performance e facilidade de uso, proporcionando componentes como botões, menus, modais, e muito mais, com suporte completo para temas e personalização.

### i18next

**i18next** é uma poderosa biblioteca JavaScript para internacionalização (i18n) que permite traduzir seu site ou aplicação para vários idiomas. Ela fornece recursos como a gestão de traduções, interpolação de valores dinâmicos, pluralização e suporte a diferentes formatos de dados. A biblioteca é altamente configurável e funciona bem tanto no lado do cliente quanto no lado do servidor. O i18next pode ser integrado com frameworks como React, Angular e Vue.js, e também oferece suporte para contextos de tradução, gerenciamento de recursos de tradução de maneira eficiente e uma experiência de desenvolvimento simplificada.

## Assets

A pasta **assets** é utilizada para armazenar todos os arquivos estáticos que são compartilhados e utilizados em diferentes partes do projeto. Esses arquivos incluem imagens, ícones, logos, backgrounds e outros recursos que não são específicos de um componente ou módulo, mas que são utilizados globalmente na aplicação.

- **icon:** Este subdiretório contém todos os ícones utilizados no projeto. Os ícones são pequenos gráficos que representam ações, estados ou funcionalidades específicas;
- **logo:** Este subdiretório armazena as logos utilizadas no projeto. As logos são imagens que representam a identidade visual da aplicação ou da empresa;
- **background:** Este subdiretório contém as imagens de background (plano de fundo) utilizadas na aplicação. As imagens de background são usadas para criar o layout visual das páginas;
- **locales:** Arquivos utilizados pela biblioteca i18 para tradução do projeto.


## Referência

- [balta.io - Documentação com GitHub](https://balta.io/blog/documentacao-com-github)

- [medium.com - Entendendo e Aplicando o React Router DOM v6](https://medium.com/@rohyer/entendendo-e-aplicando-o-react-router-dom-v6-757995891bde)

- [React Router](https://reactrouter.com/)

- [Font Awesome](https://docs.fontawesome.com/)

- [Tail Wind](https://tailwindcss.com/docs/installation)

- [i18next](https://tableless.com.br/i18next-para-internacionalizacao/)

- [shadcn](https://ui.shadcn.com)

- [Typewriter](https://www.npmjs.com/package/typewriter)