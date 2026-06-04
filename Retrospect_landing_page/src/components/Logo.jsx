import { serif, txt } from "../styles/global";

export default function Logo({ size = 26 }) {
  return (
    <span style={{ ...serif, fontSize: size, fontWeight: 900, letterSpacing: "-0.02em", ...txt }}>
      Retro<span style={{ color: "#5dca9f" }}>spect</span>
    </span>
  );
}