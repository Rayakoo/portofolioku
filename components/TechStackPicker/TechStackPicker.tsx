"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { techStack, TechData } from "./data";
import styles from "./TechStackPicker.module.css";

function randomAround(base: number, range: number = 1): number {
  const min = Math.max(1, base - range);
  const max = Math.min(10, base + range);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function TechStackPicker() {
  const [selected, setSelected] = useState<number>(1);
  const [animated, setAnimated] = useState<TechData>(techStack[0]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const tech = techStack.find((t) => t.id === selected)!;

  useEffect(() => {
    setAnimated(tech);
    const interval = setInterval(() => {
      setAnimated((prev) => ({
        ...prev,
        mastery: randomAround(tech.mastery),
        familiarity: randomAround(tech.familiarity),
        favorability: randomAround(tech.favorability),
      }));
    }, 150);
    return () => clearInterval(interval);
  }, [selected]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (
      e.key === "ArrowRight" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowUp"
    ) {
      e.preventDefault();
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setSelected((prev) => (prev < techStack.length ? prev + 1 : 1));
      } else {
        setSelected((prev) => (prev > 1 ? prev - 1 : techStack.length));
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <header className={styles.header}>
        <h1 className={styles.title}>Pick ur tech stack</h1>
        <div className={styles.kbdGroup}>
          <small className={styles.kbdHint}>support keyboard arrows</small>
          <kbd className={styles.kbd}>←</kbd>
          <kbd className={styles.kbd}>→</kbd>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.preview}>
          <div className={styles.previewLottie}>
            <div className={styles.lottiePlaceholder}>
              <span>Lottie Animation</span>
              <small>{tech.name}</small>
            </div>
          </div>
          <div className={styles.previewStats}>
            <dl>
              <dt>Mastery</dt>
              <dd className={styles.num}>{animated.mastery}/10</dd>
              <dt>Familiarity</dt>
              <dd className={styles.num}>{animated.familiarity}/10</dd>
              <dt>Favorability</dt>
              <dd className={styles.num}>{animated.favorability}/10</dd>
            </dl>
          </div>
        </div>

        <div className={styles.grid}>
          {techStack.map((t) => (
            <div
              key={t.id}
              className={`${styles.cell} ${selected === t.id ? styles.cellActive : ""}`}
              onClick={() => setSelected(t.id)}
            >
              <input
                type="radio"
                name="tech"
                id={`tech-${t.id}`}
                className={styles.srOnly}
                checked={selected === t.id}
                onChange={() => setSelected(t.id)}
              />
              <label htmlFor={`tech-${t.id}`} className={styles.thumbnail}>
                <img src={t.logo} alt={t.name} />
              </label>
              <span className={styles.label}>{t.name}</span>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <small>{tech.name} &mdash; {selected} / {techStack.length}</small>
      </footer>
    </div>
  );
}
