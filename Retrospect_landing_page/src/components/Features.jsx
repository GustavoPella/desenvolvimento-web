import { SectionTag, SectionHeading, SectionLead, IconBox } from "../data/UI";
import { serif, sans, txt, muted } from "../styles/global";
import { FEATURES } from "../data/features";

function FeatureCard({ title, desc, color, icon }) {
  return (
    <div className="card-lift" style={{
      background: "rgba(255,255,255,0.028)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 18, padding: "28px 26px 30px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2.5, background: color }} />
      <IconBox icon={icon} color={color} />
      <h3 style={{ ...serif, fontSize: 19, fontWeight: 700, marginBottom: 10, ...txt }}>{title}</h3>
      <p style={{ ...sans, fontSize: 13.5, lineHeight: 1.72, ...muted }}>{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="funcionalidades" style={{ padding: "88px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionTag bg="rgba(46,125,79,0.1)" color="#5dca9f">Funcionalidades</SectionTag>
          <SectionHeading>Tudo que você precisa para explorar</SectionHeading>
          <SectionLead>Do escaneamento à comunidade, o Retrospect é seu companheiro completo nas aventuras.</SectionLead>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
          {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
        </div>

      </div>
    </section>
  );
}