import { SectionTag, SectionHeading, SectionLead } from "../data/UI";

export default function Contact() {
  return (
    <section id="contato" style={{ padding: "88px 24px", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>

        <SectionTag bg="rgba(26,122,170,0.1)" color="#4da8d4">Contato</SectionTag>
        <SectionHeading style={{ marginBottom: 10 }}>Entre em contato</SectionHeading>
        <SectionLead>Dúvidas sobre o app, parcerias ou suporte? Estamos à disposição.</SectionLead>

        <div style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 36 }}>
          <input type="text"  placeholder="Seu nome" />
          <input type="email" placeholder="Seu melhor e-mail" />
          <textarea placeholder="Motivo do contato..." rows={5} />
          <button
            className="btn-primary"
            style={{ alignSelf: "center", padding: "14px 44px", fontSize: 15, marginTop: 6 }}
          >
            Enviar mensagem
          </button>
        </div>

      </div>
    </section>
  );
}