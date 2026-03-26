# SYED AMAAN | Visionary Curator & Data Analyst

A premium, minimalist portfolio showcasing strategic mindset and analytical precision.

## Architecture & Design

### Ambient Physics-Based Background (Wisteria Motif)

**Architectural Summary:**
A lightweight, non-blocking client component designed to introduce ambient, organic motion to the minimalist portfolio. It utilizes a randomized, physics-driven particle system of 15 SVG elements simulating falling wisteria petals.

**Technical Specifications:**
- **Hydration Safety:** Petal coordinates, rotation, and animation delays are calculated exclusively post-mount via a `DOMContentLoaded` hook (or `useEffect` in React) to prevent rendering mismatches.
- **Performance Optimization:** Limited to a strict cap of 15 DOM nodes. Animations leverage hardware-accelerated CSS transforms (translate, scale, rotate) driven by infinite repeat loops.
- **UX Integrity:** The container enforces `pointer-events-none`, `fixed inset-0`, and `z-0` to guarantee the animation layer operates strictly in the background without intercepting user clicks or altering document flow.

**Design Language:**
To maintain the "Swiss Minimalist Luxury" aesthetic, traditional vibrant floral colors were discarded. The SVG petals are rendered in a muted slate/sage (`text-slate-400`), throttled to 20% opacity (`opacity-20`), acting as subtle, frosted-glass structural accents rather than distinct visual distractions.

## Project Structure
- `index.html`: Semantic markup and resource orchestration.
- `style.css`: Centralized typography, keyframes, and custom utility classes.
- `script.js`: Encapsulated behavior, Tailwind configuration, and interaction logic.

---
*Developed with love and dedication.*
