export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #070c07; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #070c07; }
  ::-webkit-scrollbar-thumb { background: #2e7d4f; border-radius: 3px; }

  .nav-link {
    background: none; border: none; cursor: pointer;
    font-size: 13.5px; font-weight: 500; letter-spacing: 0.04em;
    color: rgba(240,240,232,0.6); font-family: 'DM Sans', sans-serif;
    transition: color 0.2s; padding: 4px 0;
  }
  .nav-link:hover { color: #5dca9f; }

  .btn-primary {
    background: #2e7d4f; color: #fff; border: none;
    padding: 13px 30px; border-radius: 40px;
    font-size: 14px; font-weight: 600; cursor: pointer;
    letter-spacing: 0.03em; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, transform 0.15s;
  }
  .btn-primary:hover { background: #3da068; transform: scale(1.02); }

  .btn-outline {
    background: transparent; border: 1.5px solid #5dca9f;
    color: #5dca9f; padding: 12px 28px; border-radius: 40px;
    font-size: 14px; font-weight: 600; cursor: pointer;
    font-family: 'DM Sans', sans-serif; transition: all 0.2s;
  }
  .btn-outline:hover { background: #5dca9f; color: #070c07; }

  .card-lift { transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .card-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,0,0,0.45); }

  .sidebar-link {
    display: block; width: 100%; text-align: left;
    background: none; border: none; border-bottom: 1px solid rgba(255,255,255,0.05);
    padding: 14px 0; font-size: 17px; font-weight: 500;
    color: rgba(240,240,232,0.75); cursor: pointer;
    font-family: 'DM Sans', sans-serif; transition: color 0.2s;
  }
  .sidebar-link:hover { color: #5dca9f; }

  .badge {
    display: inline-block; padding: 4px 13px;
    border-radius: 20px; font-size: 11.5px;
    font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
  }

  input, textarea, select {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: #f0f0e8; padding: 14px 18px; border-radius: 10px;
    font-size: 15px; width: 100%; outline: none;
    font-family: 'DM Sans', sans-serif; transition: border-color 0.2s;
    resize: vertical;
  }
  input::placeholder, textarea::placeholder { color: rgba(240,240,232,0.3); }
  input:focus, textarea:focus, select:focus { border-color: rgba(93,202,159,0.6); }
select option {
    background: #111;
    color: #f0f0e8;
}

select option:checked {
    background: #2e7d4f;
    color: white;
}

select option:hover {
    background: #3da068;
}
  .footer-link {
    font-size: 13.5px; color: rgba(240,240,232,0.38);
    cursor: pointer; transition: color 0.2s; margin-bottom: 10px; display: block;
  }
  .footer-link:hover { color: #5dca9f; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .anim-hero   { animation: fadeUp 0.7s ease both; }
  .anim-hero-1 { animation-delay: 0.05s; }
  .anim-hero-2 { animation-delay: 0.18s; }
  .anim-hero-3 { animation-delay: 0.3s; }
  .anim-hero-4 { animation-delay: 0.44s; }
`;

export const serif = { fontFamily: "'Playfair Display', serif" };
export const sans  = { fontFamily: "'DM Sans', sans-serif" };
export const txt   = { color: "#f0f0e8" };
export const muted = { color: "rgba(240,240,232,0.5)" };