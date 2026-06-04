import Logo from "./Logo";
import { NAV_LINKS } from "../data/constants";

export default function Sidebar({ open, onClose, onScrollTo }) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.55)", zIndex: 90,
            backdropFilter: "blur(2px)",
          }}
        />
      )}

      <div style={{
        position: "fixed", left: 0, top: 0, bottom: 0, width: 270,
        background: "#0b140b", zIndex: 100,
        padding: "72px 32px 40px",
        display: "flex", flexDirection: "column", gap: 2,
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}>
        <button
          onClick={onClose}
          aria-label="Fechar menu"
          style={{
            position: "absolute", top: 18, right: 18,
            background: "none", border: "none",
            color: "rgba(240,240,232,0.5)", fontSize: 22,
            cursor: "pointer", lineHeight: 1,
          }}
        >
          ✕
        </button>

        <Logo size={22} />
        <div style={{ height: 20 }} />

        {NAV_LINKS.map(({ label, id }) => (
          <button key={id} className="sidebar-link" onClick={() => onScrollTo(id)}>
            {label}
          </button>
        ))}

        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <button
            className="btn-primary"
            style={{ width: "100%", textAlign: "center" }}
            onClick={() => onScrollTo("vip")}
          >
            Assinar VIP
          </button>
        </div>
      </div>
    </>
  );
}