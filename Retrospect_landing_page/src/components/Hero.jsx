import { SectionTag } from "../data/UI";
import { serif, sans, txt, muted } from "../styles/global";
import { HERO_STATS } from "../data/constants";

export default function Hero({ onScrollTo }) {
  return (
    <section id="inicio" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", textAlign: "center",
      padding: "130px 24px 90px", position: "relative", overflow: "hidden",
    }}>
      {/* Background glows */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 55% at 50% 42%, rgba(46,125,79,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "12%", left: "4%",   width: 280, height: 280, borderRadius: "50%", background: "rgba(46,125,79,0.05)",  pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "8%", right: "6%", width: 180, height: 180, borderRadius: "50%", background: "rgba(26,122,170,0.06)", pointerEvents: "none" }} />

      <div className="anim-hero anim-hero-1">
        <SectionTag bg="rgba(93,202,159,0.1)" color="#5dca9f">
          Explore. Descubra. Preserve.
        </SectionTag>
      </div>

      <h1 className="anim-hero anim-hero-2" style={{
        ...serif, fontSize: "clamp(40px, 6.5vw, 84px)",
        fontWeight: 900, lineHeight: 1.06, letterSpacing: "-0.03em",
        maxWidth: 840, marginBottom: 22, ...txt,
      }}>
        A natureza na palma<br />
        <span style={{ color: "#5dca9f" }}>da sua mão</span>
      </h1>

      <p className="anim-hero anim-hero-3" style={{
        ...sans, fontSize: "clamp(15px, 1.8vw, 19px)",
        ...muted, maxWidth: 520, lineHeight: 1.75, marginBottom: 40,
      }}>
        Identifique espécies, explore trilhas, conecte-se com aventureiros
        e complete desafios ecológicos — tudo em um único app.
      </p>

      <div className="anim-hero anim-hero-4" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
        <button className="btn-primary" style={{ fontSize: 15, padding: "15px 34px" }} onClick={() => onScrollTo("funcionalidades")}>
          Explorar funcionalidades
        </button>
        <button className="btn-outline" style={{ fontSize: 15, padding: "15px 34px" }} onClick={() => onScrollTo("vip")}>
          Ver plano VIP
        </button>
      </div>

      <div style={{ marginTop: 72, display: "flex", gap: 52, flexWrap: "wrap", justifyContent: "center" }}>
        {HERO_STATS.map(([value, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ ...serif, fontSize: 34, fontWeight: 700, color: "#5dca9f" }}>{value}</div>
            <div style={{ ...sans, fontSize: 12.5, ...muted, marginTop: 4, letterSpacing: "0.04em" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}