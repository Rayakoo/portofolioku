"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
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
  const [hovered, setHovered] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const tech = techStack.find((t) => t.id === selected)!;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 700px)");
    const update = () => setIsCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
    <div id="tech-stack" className={styles.wrapper} ref={wrapperRef}>
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
          <div
            className={styles.previewLottie}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <motion.div
              className={styles.floatingLogo}
              style={{ color: tech.color }}
              animate={
                hovered
                  ? { scale: 1.35, rotateY: 0, y: 0 }
                  : { rotateY: [0, 360], y: [0, -12, 0] }
              }
              transition={
                hovered
                  ? { duration: 0.35, ease: "easeOut" }
                  : {
                      rotateY: { duration: 5, repeat: Infinity, ease: "linear" },
                      y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
                    }
              }
            >
              <tech.logo size={110} aria-hidden />
            </motion.div>
            <motion.small
              className={styles.previewName}
              animate={{ scale: hovered ? 1.5 : 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ originX: 0.5, originY: 0 }}
            >
              {tech.name}
            </motion.small>
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
          {techStack.map((t) =>
            t.mobileHidden && isCompact ? null : (
              <div
                key={t.id}
                className={`${styles.cell} ${selected === t.id ? styles.cellActive : ""} ${t.mobileHidden ? styles.mobileHidden : ""}`}
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
                  <t.logo aria-hidden />
                </label>
                <span className={styles.label}>{t.name}</span>
              </div>
            )
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <small>{tech.name} &mdash; {selected} / {techStack.length}</small>
      </footer>
    </div>
  );
}
