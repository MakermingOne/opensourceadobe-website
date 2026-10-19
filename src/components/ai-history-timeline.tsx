"use client";

import { useRef, useState } from "react";
import styles from "./ai-history.module.css";

const events = [
  { id: "turing", year: "1950", label: "1950", date: "Computing machinery and intelligence", title: "Can machines think?", text: "Alan Turing proposes the imitation game, now known as the Turing test, and explores whether machines could learn. The ideas precede the name artificial intelligence.", url: "https://doi.org/10.1093/mind/LIX.236.433", link: "Explore Turing’s paper" },
  { id: "proposal", year: "1955", label: "1955 · Aug", date: "August 31 · Dartmouth proposal", title: "Intelligence gets a new name.", text: "John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon write a proposal for a summer research project on artificial intelligence. The proposal introduces the name; the workshop itself is planned for 1956.", url: "https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html", link: "Read the original proposal" },
  { id: "logic", year: "1955–56", label: "1955 · LT", date: "Late 1955 conception · running in 1956", title: "Logic Theorist takes shape.", text: "Allen Newell, Herbert Simon, and Cliff Shaw develop Logic Theorist, an early AI program designed for automated reasoning. Conceived in late 1955 and running in 1956, it eventually proves 38 of the first 52 theorems in chapter two of Principia Mathematica.", url: "https://iiif.library.cmu.edu/file/Simon_box00069_fld05361_bdl0001_doc0001/Simon_box00069_fld05361_bdl0001_doc0001.pdf", link: "Read Simon’s retrospective (PDF)" },
  { id: "workshop", year: "1956", label: "1956", date: "Summer · Hanover, New Hampshire", title: "A research field gathers.", text: "Researchers meet for the Dartmouth Summer Research Project on Artificial Intelligence. The workshop becomes a founding event for AI as a field, building on the proposal written the previous year.", url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth", link: "Explore Dartmouth’s history" },
  { id: "lisp", year: "1958", label: "1958", date: "A language for symbolic ideas", title: "Lisp takes shape.", text: "John McCarthy begins developing Lisp, a language built around symbolic expressions. It becomes an influential tool for AI research and for representing and manipulating ideas in computer programs.", url: "https://www-formal.stanford.edu/jmc/history/lisp/lisp.html", link: "Read McCarthy’s history of Lisp" },
];

export function AiHistoryTimeline() {
  const [active, setActive] = useState(1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const event = events[active];
  function select(index: number, focus = false) {
    const next = (index + events.length) % events.length;
    setActive(next);
    if (focus) tabs.current[next]?.focus();
  }
  return <div className={styles.timeline}>
    <p className={styles.caption}>A short history of an ambitious idea · 1950–1958</p>
    <div className={styles.tabs} role="tablist" aria-label="AI history years">
      {events.map((item, index) => <button key={item.id} id={`year-${item.id}`} ref={(node) => { tabs.current[index] = node; }} role="tab" aria-selected={active === index} aria-controls="ai-history-event" tabIndex={active === index ? 0 : -1} onClick={() => select(index)} onKeyDown={(e) => {
        const next = e.key === "ArrowRight" ? index + 1 : e.key === "ArrowLeft" ? index - 1 : e.key === "Home" ? 0 : e.key === "End" ? events.length - 1 : undefined;
        if (next !== undefined) { e.preventDefault(); select(next, true); }
      }}>{item.label}</button>)}
    </div>
    <div id="ai-history-event" className={styles.event} role="tabpanel" aria-labelledby={`year-${event.id}`} tabIndex={0}>
      <div><div className={styles.eventYear}>{event.year}</div><p className={styles.caption}>{event.date}</p></div>
      <div><h3>{event.title}</h3><p>{event.text}</p><a href={event.url} target="_blank" rel="noopener noreferrer">{event.link} ↗</a></div>
    </div>
    <div className={styles.controls}><span>Milestone {active + 1} / {events.length}</span><div><button aria-label="Previous milestone" onClick={() => select(active - 1)}>←</button><button aria-label="Next milestone" onClick={() => select(active + 1)}>→</button></div></div>
  </div>;
}
