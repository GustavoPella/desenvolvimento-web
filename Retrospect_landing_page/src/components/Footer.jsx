import Logo from "./Logo";
import { sans } from "../styles/global";
import { FOOTER_COLS, SOCIAL_ICON_PATHS } from "../data/constants";

function SocialButton({ path }) {
  return (
    <button
      style={{
        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "50%", width: 36, height: 36, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "rgba(240,240,232,0.55)", transition: "all 0.2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.color = "#5dca9f"; e.currentTarget.style.borderColor = "rgba(93,202,159,0.35)"; }}
      onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,240,232,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
    </button>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <div style={{ ...sans, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(240,240,232,0.7)", marginBottom: 18 }}>
        {title}
      </div>
      {links.map(link => (
        <span key={link} className="footer-link">{link}</span>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#050a05", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "52px 32px 30px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, marginBottom: 44 }}>
          <div>
            <Logo size={26} />
            <p style={{ ...sans, fontSize: 13, lineHeight: 1.7, marginTop: 12, marginBottom: 18, color: "rgba(240,240,232,0.35)" }}>
              O app que transforma sua aventura em uma experiência inesquecível.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL_ICON_PATHS.map((path, i) => (
                <SocialButton key={i} path={path} />
              ))}
            </div>
          </div>

          {FOOTER_COLS.map(col => (
            <FooterColumn key={col.title} {...col} />
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <p style={{ ...sans, fontSize: 12.5, color: "rgba(240,240,232,0.25)" }}>
            © 2026 Retrospect · Todos os direitos reservados
          </p>
          <p style={{ ...sans, fontSize: 12.5, color: "rgba(240,240,232,0.25)" }}>
            Desenvolvido por{" "}
            <span style={{ color: "#5dca9f" }}>Gustavo Pellá Bazanella</span>
            {" "}· Centro Universitário Assis Gurgacz
          </p>
        </div>

      </div>
    </footer>
  );
}