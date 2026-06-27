import { useEffect, useState } from "react";
import { SectionTag, SectionHeading, SectionLead } from "../data/UI";
import { sans, txt, muted } from "../styles/global";

const STORAGE_KEY = "retrospect:trilhas";

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

function loadTrilhas() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

export default function Trilhas() {
    const [trilhas, setTrilhas] = useState([]);
    const [form, setForm] = useState(initialFormState);
    const [editingId, setEditingId] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTrilhas(loadTrilhas());
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(trilhas));
    }, [trilhas, loaded]);

    const handleChange = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const resetForm = () => {
        setForm(initialFormState);
        setEditingId(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.nome.trim() || !form.localizacao.trim()) {
            return;
        }

        if (editingId) {
            setTrilhas((prev) =>
                prev.map((trilha) =>
                    trilha.id === editingId ? { ...trilha, ...form } : trilha
                )
            );
        } else {
            setTrilhas((prev) => [...prev, { id: crypto.randomUUID(), ...form }]);
        }

        resetForm();
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

    const handleDelete = (id) => {
        const confirmed = window.confirm("Excluir esta trilha?");
        if (!confirmed) return;

        setTrilhas((prev) => prev.filter((trilha) => trilha.id !== id));

        if (editingId === id) {
            resetForm();
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
                        required
                    />
                    <input
                        type="text"
                        placeholder="Localização"
                        value={form.localizacao}
                        onChange={handleChange("localizacao")}
                        required
                    />
                    <select value={form.dificuldade} onChange={handleChange("dificuldade")}>
                        <option value="Fácil">Fácil</option>
                        <option value="Médio">Médio</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                    <textarea
                        placeholder="Descrição"
                        rows={2}
                        value={form.descricao}
                        onChange={handleChange("descricao")}
                        style={{ gridColumn: "1 / -1" }}
                    />
                    <div
                        style={{
                            gridColumn: "1 / -1",
                            display: "flex",
                            gap: 10,
                            justifyContent: "center",
                        }}
                    >
                        <button type="submit" className="btn-primary" style={{ padding: "12px 32px" }}>
                            {editingId ? "Salvar alterações" : "Cadastrar trilha"}
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