import { useEffect, useState } from "react";
import { SectionTag, SectionHeading, SectionLead } from "../data/UI";
import { sans, txt, muted } from "../styles/global";

const API = "http://localhost:8080/api/trilhas";

const initialFormState = {
    nome: "",
    localizacao: "",
    dificuldade: "Fácil",
    descricao: "",
};

const dificuldadeColor = {
    "Fácil": "#2e7d4f",
    "Médio": "#c06418",
    "Difícil": "#c01a3a",
};

export default function Trilhas() {
    const [trilhas, setTrilhas] = useState([]);
    const [form, setForm] = useState(initialFormState);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");

    async function fetchTrilhas() {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setTrilhas(data);
        } catch {
            setErro("Não foi possível conectar ao servidor. Verifique se o backend está rodando.");
        }
    }

    useEffect(() => {
        fetchTrilhas();
    }, []);

    const handleChange = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const resetForm = () => {
        setForm(initialFormState);
        setEditingId(null);
        setErro("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!form.nome.trim() || !form.localizacao.trim()) return;

        setLoading(true);
        setErro("");

        try {
            if (editingId) {
                await fetch(`${API}/${editingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else {
                await fetch(API, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            }

            await fetchTrilhas();
            resetForm();
        } catch {
            setErro("Erro ao salvar. Verifique se o backend está rodando.");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (trilha) => {
        setEditingId(trilha.id);
        setForm({
            nome: trilha.nome,
            localizacao: trilha.localizacao,
            dificuldade: trilha.dificuldade,
            descricao: trilha.descricao,
        });
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Excluir esta trilha?");
        if (!confirmed) return;

        try {
            await fetch(`${API}/${id}`, { method: "DELETE" });
            await fetchTrilhas();
            if (editingId === id) resetForm();
        } catch {
            setErro("Erro ao excluir. Verifique se o backend está rodando.");
        }
    };

    return (
        <section id="minhas-trilhas" style={{ padding: "88px 24px" }}>
            <div style={{ maxWidth: 880, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 48 }}>
                    <SectionTag bg="rgba(46,125,79,0.1)" color="#5dca9f">
                        Minhas Trilhas
                    </SectionTag>
                    <SectionHeading>Cadastre e gerencie suas trilhas</SectionHeading>
                    <SectionLead>
                        Adicione, edite ou remova trilhas que você já percorreu ou
                        planeja explorar.
                    </SectionLead>
                </div>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: 13,
                        marginBottom: 44,
                        background: "rgba(255,255,255,0.028)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 16,
                        padding: 24,
                    }}
                >
                    <input
                        type="text"
                        placeholder="Nome da trilha"
                        value={form.nome}
                        onChange={handleChange("nome")}
                        disabled={loading}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Localização"
                        value={form.localizacao}
                        onChange={handleChange("localizacao")}
                        disabled={loading}
                        required
                    />
                    <select
                        value={form.dificuldade}
                        onChange={handleChange("dificuldade")}
                        disabled={loading}
                    >
                        <option value="Fácil">Fácil</option>
                        <option value="Médio">Médio</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                    <textarea
                        placeholder="Descrição"
                        rows={2}
                        value={form.descricao}
                        onChange={handleChange("descricao")}
                        disabled={loading}
                        style={{ gridColumn: "1 / -1" }}
                    />

                    {erro && (
                        <p style={{ ...sans, fontSize: 13, color: "#e0593a", gridColumn: "1 / -1", textAlign: "center" }}>
                            {erro}
                        </p>
                    )}

                    <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10, justifyContent: "center" }}>
                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                            style={{ padding: "12px 32px", opacity: loading ? 0.7 : 1 }}
                        >
                            {loading ? "Salvando..." : editingId ? "Salvar alterações" : "Cadastrar trilha"}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                className="btn-outline"
                                style={{ padding: "12px 32px" }}
                                onClick={resetForm}
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>

                {trilhas.length === 0 ? (
                    <p style={{ ...sans, textAlign: "center", ...muted }}>
                        Nenhuma trilha cadastrada ainda.
                    </p>
                ) : (
                    <div style={{ display: "grid", gap: 14 }}>
                        {trilhas.map((trilha) => (
                            <div
                                key={trilha.id}
                                className="card-lift"
                                style={{
                                    background: "rgba(255,255,255,0.028)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    borderRadius: 14,
                                    padding: "18px 22px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: 16,
                                    flexWrap: "wrap",
                                }}
                            >
                                <div>
                                    <h4 style={{ ...sans, fontSize: 15, fontWeight: 600, marginBottom: 4, ...txt }}>
                                        {trilha.nome}
                                    </h4>
                                    <p style={{ ...sans, fontSize: 13, ...muted, marginBottom: 8 }}>
                                        {trilha.localizacao}
                                    </p>
                                    {trilha.descricao && (
                                        <p style={{ ...sans, fontSize: 13, ...muted, marginBottom: 8 }}>
                                            {trilha.descricao}
                                        </p>
                                    )}
                                    <span
                                        className="badge"
                                        style={{
                                            display: "inline-block",
                                            background: `${dificuldadeColor[trilha.dificuldade]}14`,
                                            color: dificuldadeColor[trilha.dificuldade],
                                            fontSize: 11,
                                        }}
                                    >
                                        {trilha.dificuldade}
                                    </span>
                                </div>

                                <div style={{ display: "flex", gap: 8 }}>
                                    <button
                                        type="button"
                                        className="btn-outline"
                                        style={{ padding: "8px 18px", fontSize: 13 }}
                                        onClick={() => handleEdit(trilha)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        style={{
                                            padding: "8px 18px",
                                            fontSize: 13,
                                            borderRadius: 40,
                                            border: "1.5px solid #c01a3a",
                                            color: "#e0593a",
                                            background: "transparent",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => handleDelete(trilha.id)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}