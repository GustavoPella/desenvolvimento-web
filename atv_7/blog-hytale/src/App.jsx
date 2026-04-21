import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const post = {
  titulo: "Hytale: O Futuro dos Jogos Sandbox",
  autor: "Redação Hytale Brasil",
  data: {
    iso: "2026-03-22",
    formatada: "22 de março de 2026",
  },
  conteudo: [
    "Hytale é um dos jogos mais aguardados da atualidade, desenvolvido pela Hypixel Studios. Misturando elementos de RPG, sandbox e criação de mundos, o jogo promete revolucionar a forma como exploramos universos virtuais.",
    "Com gráficos estilizados, sistemas de combate dinâmicos e ferramentas avançadas de modding, Hytale oferece liberdade total para os jogadores criarem suas próprias experiências. Seja explorando masmorras, construindo cidades ou criando minigames, as possibilidades são infinitas.",
  ],
  imagem: {
    src: "https://via.placeholder.com/600x400",
    alt: "Gameplay de Hytale com cenário de aventura",
    legenda: "Mundo vibrante e cheio de aventuras em Hytale.",
  },
};

const navLinks = [
  { label: "Home",      href: "#" },
  { label: "Notícias",  href: "#" },
  { label: "Gameplay",  href: "#" },
  { label: "Contato",   href: "#" },
];

const postsRelacionados = [
  { label: "Data de Lançamento de Hytale",    href: "#" },
  { label: "Como Funciona o Sistema de Mods", href: "#" },
  { label: "Dicas para Iniciantes",           href: "#" },
];

function App() {
  return (
    <>
      <Header titulo="Blog Hytale Brasil" />
      <Navigation links={navLinks} />
      <main>
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
          imagem={post.imagem}
        />
        <Sidebar posts={postsRelacionados} />
      </main>
      <Footer ano={2026} nomeBlog="Blog Hytale Brasil" />
    </>
  );
}

export default App;