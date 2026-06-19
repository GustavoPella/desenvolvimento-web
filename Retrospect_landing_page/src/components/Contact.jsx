import { useState } from "react";
import { SectionTag, SectionHeading, SectionLead } from "../data/UI";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setFeedback("Preencha todos os campos antes de enviar.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(body.error ?? "Erro ao enviar mensagem.");
      }

      setStatus("success");
      setFeedback("Mensagem enviada! Retornaremos em breve.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message);
    }
  };

  return (
    <section id="contato" style={{ padding: "88px 24px", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>

        <SectionTag bg="rgba(26,122,170,0.1)" color="#4da8d4">Contato</SectionTag>
        <SectionHeading style={{ marginBottom: 10 }}>Entre em contato</SectionHeading>
        <SectionLead>Dúvidas sobre o app, parcerias ou suporte? Estamos à disposição.</SectionLead>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 36 }}>
          <input
            type="text"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange("name")}
            disabled={status === "loading"}
          />
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={form.email}
            onChange={handleChange("email")}
            disabled={status === "loading"}
          />
          <textarea
            placeholder="Motivo do contato..."
            rows={5}
            value={form.message}
            onChange={handleChange("message")}
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className="btn-primary"
            disabled={status === "loading"}
            style={{
              alignSelf: "center",
              padding: "14px 44px",
              fontSize: 15,
              marginTop: 6,
              opacity: status === "loading" ? 0.7 : 1,
              cursor: status === "loading" ? "default" : "pointer",
            }}
          >
            {status === "loading" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {feedback && (
            <p
              style={{
                fontSize: 13.5,
                marginTop: 4,
                color: status === "error" ? "#e0593a" : "#5dca9f",
              }}
            >
              {feedback}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}