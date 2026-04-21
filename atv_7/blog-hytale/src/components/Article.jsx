function Article({ titulo, autor, data, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>
        Por <strong>{autor}</strong> —{" "}
        <time dateTime={data.iso}>{data.formatada}</time>
      </p>
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
      <figure>
        <img src={imagem.src} alt={imagem.alt} />
        <figcaption>{imagem.legenda}</figcaption>
      </figure>
    </article>
  );
}

export default Article;