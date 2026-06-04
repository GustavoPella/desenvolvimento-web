import { useState, useEffect, useRef } from "react";
import { SectionTag, SectionHeading } from "../data/UI";
import { serif, sans } from "../styles/global";
import { CAROUSEL_ITEMS } from "../data/constants";

function CarouselArrow({ side, onClick }) {
  const path = side === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6";

  return (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Anterior" : "Próximo"}
      style={{
        position: "absolute",
        top: "50%",
        [side]: 16,
        transform: "translateY(-50%)",
        zIndex: 10,
        background: "rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        width: 46,
        height: 46,
        borderRadius: "50%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={path} />
      </svg>
    </button>
  );
}

function CarouselDots({ count, active, onSelect }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 22,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        gap: 8,
        zIndex: 10,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            width: i === active ? 24 : 8,
            height: 8,
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            transition: "all .3s ease",
            background:
              i === active
                ? "#5dca9f"
                : "rgba(255,255,255,0.35)",
          }}
        />
      ))}
    </div>
  );
}

function CarouselSlide({ slide, active }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: slide.bg,
        opacity: active ? 1 : 0,
        transition: "opacity .6s ease",
        pointerEvents: active ? "auto" : "none",
        display: "grid",
        placeItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,.35) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 700,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            padding: "8px 14px",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 22,
            background: `${slide.accent}25`,
            color: slide.accent,
            border: `1px solid ${slide.accent}40`,
            ...sans,
          }}
        >
          {slide.tag}
        </span>

        <h3
          style={{
            ...serif,
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 18,
            lineHeight: 1.1,
          }}
        >
          {slide.title}
        </h3>

        <p
          style={{
            ...sans,
            color: "rgba(255,255,255,.78)",
            fontSize: "clamp(15px,1.5vw,18px)",
            lineHeight: 1.8,
            maxWidth: 550,
          }}
        >
          {slide.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + CAROUSEL_ITEMS.length) %
        CAROUSEL_ITEMS.length
    );
  };

  const goTo = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section
      id="trilhas"
      style={{
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <SectionTag
            bg="rgba(26,122,170,.1)"
            color="#4da8d4"
          >
            Galeria
          </SectionTag>

          <SectionHeading>
            Viva cada aventura
          </SectionHeading>
        </div>

        <div
          style={{
            position: "relative",
            height: 500,
            borderRadius: 28,
            overflow: "hidden",
            boxShadow:
              "0 25px 60px rgba(0,0,0,.35)",
          }}
        >
          {CAROUSEL_ITEMS.map((slide, index) => (
            <CarouselSlide
              key={index}
              slide={slide}
              active={index === current}
            />
          ))}

          <CarouselArrow
            side="left"
            onClick={prevSlide}
          />

          <CarouselArrow
            side="right"
            onClick={nextSlide}
          />

          <CarouselDots
            count={CAROUSEL_ITEMS.length}
            active={current}
            onSelect={goTo}
          />
        </div>
      </div>
    </section>
  );
}