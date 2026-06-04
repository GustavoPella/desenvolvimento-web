import { serif, sans, txt, muted } from "../styles/global";

export function SectionTag({ children, bg, color }) {
  return (
    <span className="badge" style={{ background: bg, color, marginBottom: 14, display: "inline-block" }}>
      {children}
    </span>
  );
}

export function SectionHeading({ children, style = {} }) {
  return (
    <h2 style={{ ...serif, fontSize: "clamp(26px, 3.8vw, 46px)", fontWeight: 700, lineHeight: 1.1, ...txt, ...style }}>
      {children}
    </h2>
  );
}

export function SectionLead({ children, maxWidth = 480 }) {
  return (
    <p style={{ ...sans, fontSize: 16, lineHeight: 1.75, maxWidth, margin: "14px auto 0", ...muted }}>
      {children}
    </p>
  );
}

export function IconBox({ icon, color }) {
  return (
    <div style={{
      width: 46, height: 46, borderRadius: 12, marginBottom: 20,
      background: `${color}18`, color,
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      {icon}
    </div>
  );
}