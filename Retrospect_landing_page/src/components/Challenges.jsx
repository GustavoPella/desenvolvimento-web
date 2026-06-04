import { SectionTag, SectionHeading, SectionLead } from "../data/UI";
import { sans, txt } from "../styles/global";
import { CHALLENGES } from "../data/constants";

function ChallengeCard({ title, desc, pts, diff, diffColor }) {
  return (
    <div className="card-lift" style={{
      background: "rgba(255,255,255,0.028)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 16, padding: "22px 22px 24px",
    }}>
      <h4 style={{ ...sans, fontSize: 15, fontWeight: 600, marginBottom: 9, ...txt }}>{title}</h4>
      <p style={{ ...sans, fontSize: 13, lineHeight: 1.65, marginBottom: 18, color: "rgba(240,240,232,0.45)" }}>{desc}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <span className="badge" style={{ background: "rgba(93,202,159,0.09)", color: "#5dca9f", fontSize: 11 }}>{pts} pts</span>
        <span className="badge" style={{ background: `${diffColor}14`, color: diffColor, fontSize: 11 }}>{diff}</span>
      </div>
    </div>
  );
}

export default function Challenges() {
  return (
    <section id="desafios" style={{ padding: "88px 24px", background: "rgba(46,125,79,0.03)" }}>
      <div style={{ maxWidth: 940, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionTag bg="rgba(192,100,24,0.1)" color="#e0843a">Desafios Ecológicos</SectionTag>
          <SectionHeading>Aventure-se com propósito</SectionHeading>
          <SectionLead maxWidth={500}>
            Complete missões, ganhe distintivos e suba no ranking dos maiores aventureiros do Brasil.
          </SectionLead>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {CHALLENGES.map(c => <ChallengeCard key={c.title} {...c} />)}
        </div>

      </div>
    </section>
  );
}