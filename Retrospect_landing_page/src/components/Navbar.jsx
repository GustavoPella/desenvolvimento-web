import Logo from "./Logo";
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ scrolled, onMenuOpen, onScrollTo }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 80,
      height: 66, padding: "0 32px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(7,12,7,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.35s",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button
          onClick={onMenuOpen}
          aria-label="Abrir menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#f0f0e8", display: "flex", padding: 6 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect y="3"  width="20" height="1.8" rx="0.9" fill="currentColor"/>
            <rect y="9"  width="14" height="1.8" rx="0.9" fill="currentColor"/>
            <rect y="15" width="20" height="1.8" rx="0.9" fill="currentColor"/>
          </svg>
        </button>
        <Logo size={24} />
      </div>

      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {NAV_LINKS.map(({ label, id }) => (
          <button key={id} className="nav-link" onClick={() => onScrollTo(id)}>
            {label}
          </button>
        ))}
      </div>

      <button
        className="btn-primary"
        style={{ padding: "10px 20px", fontSize: 13 }}
        onClick={() => onScrollTo("vip")}
      >
        Assinar VIP
      </button>
    </nav>
  );
}