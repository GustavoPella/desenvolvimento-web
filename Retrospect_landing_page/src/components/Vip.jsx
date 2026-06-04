import { SectionTag, SectionHeading, SectionLead } from "../data/UI";
import { serif, sans } from "../styles/global";
import { VIP_FEATURES } from "../data/constants";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7l3.5 3.5L12 3.5" stroke="#5dca9f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PlanCard({ label, price, period, highlight, savings }) {
  return (
    <div className="card-lift" style={{
      background: highlight
        ? "linear-gradient(145deg, rgba(122,47,192,0.18), rgba(74,26,122,0.28))"
        : "rgba(255,255,255,0.028)",
      border: highlight
        ? "1.5px solid rgba(166,125,224,0.45)"
        : "1px solid rgba(255,255,255,0.07)",
      borderRadius: 20, padding: "28px 26px 30px",
      position: "relative", flex: 1,
    }}>
      {savings && (
        <span className="badge" style={{
          position: "absolute", top: -13, right: 20,
          background: "#5dca9f", color: "#070c07", fontSize: 11,
        }}>
          {savings}
        </span>
      )}

      <div style={{ ...sans, fontSize: 12, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "rgba(240,240,232,0.45)", marginBottom: 8 }}>
        {label}
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginBottom: 24 }}>
        <span style={{ ...serif, fontSize: 38, fontWeight: 700, color: highlight ? "#c4a0f0" : "#f0f0e8" }}>{price}</span>
        <span style={{ ...sans, fontSize: 13, color: "rgba(240,240,232,0.38)" }}>{period}</span>
      </div>

      <div style={{ marginBottom: 24 }}>
        {VIP_FEATURES.map(f => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <CheckIcon />
            <span style={{ ...sans, fontSize: 13.5, color: "rgba(240,240,232,0.72)" }}>{f}</span>
          </div>
        ))}
      </div>

      <button
        style={{
          width: "100%", padding: "13px", borderRadius: 40,
          cursor: "pointer", fontWeight: 600, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
          background: highlight ? "#7a2fc0" : "transparent",
          color: highlight ? "#fff" : "#a67de0",
          border: highlight ? "none" : "1.5px solid #a67de0",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = "0.82"; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
      >
        Assinar {label}
      </button>
    </div>
  );
}

export default function Vip() {
  return (
    <section id="vip" style={{ padding: "88px 24px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionTag bg="rgba(122,47,192,0.12)" color="#a67de0">Passe VIP</SectionTag>
          <SectionHeading>
            Eleve sua aventura ao{" "}
            <span style={{ color: "#a67de0" }}>próximo nível</span>
          </SectionHeading>
          <SectionLead maxWidth={440}>
            Junte-se à elite dos exploradores e desfrute de funcionalidades exclusivas.
          </SectionLead>
        </div>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <PlanCard label="Mensal" price="R$ 14,90" period="/mês"                          highlight={false} />
          <PlanCard label="Anual"  price="R$ 9,90"  period="/mês · cobrado anualmente"     highlight={true}  savings="Economize 34%" />
        </div>

      </div>
    </section>
  );
}