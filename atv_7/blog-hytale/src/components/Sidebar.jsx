function Sidebar({ posts }) {
  return (
    <aside><h3>Conteúdos Relacionados</h3><ul>{posts.map((post) => (<li key={post.label}><a href={post.href}>{post.label}</a></li>))}</ul></aside>
  );
}

export default Sidebar;
