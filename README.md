
# µVerse — µLearn CHN Website Redesign

A futuristic, space-themed website redesign for **µLearn CHN (College of Engineering Chengannur)**, built to visually represent the µLearn ecosystem through motion, glassmorphism, and interactive storytelling.

---

## 🚀 Project Overview

µVerse is a **frontend-only, production-ready redesign** of the µLearn CHN website.
The goal was to move away from a static layout and create an **immersive, narrative-driven experience** that reflects learning as a journey.

The site uses:

* Animated space background
* Glassmorphism UI
* Interactive event timeline
* Floating memories gallery
* Responsive layout for mobile & desktop

No frameworks. No heavy libraries. Just **HTML, CSS, and vanilla JavaScript**.

---

## 🧠 Design Philosophy

* **Space = Exploration**
  Learning is represented as a journey through space (planet, orbits, stars).

* **Glass = Transparency & Community**
  All major content blocks use glassmorphism to imply openness and collaboration.

* **Motion = Engagement**
  Nothing is static — subtle motion guides attention without overwhelming users.

* **Minimal but expressive**
  Visual depth without clutter.

---

## ✨ Key Features

### 🌌 Animated Space Background

* Fixed starfield with layered motion
* Rotating planet and orbit rings
* Always stays behind content (`z-index` controlled)

---

### 🧭 Header & Navigation

* Fixed navbar with blur + gradient fade
* Progressive dark-blue blur for link container
* “Join µLearn” CTA button
* Smooth anchor scrolling
* Responsive collapse on smaller screens

---

### 🪐 Hero Section

* Centered “Welcome to µVerse”
* Orbitron typography with glow effects
* Positioned to avoid overlap with the rotating globe

---

### 📖 About Section

* Clean, centered layout
* Radial glow divider
* High readability with restrained animation

---

### 🧪 Event Journey (Timeline)

* Vertical timeline with center line + glowing dots
* Events alternate left/right
* Each event is a **glass image card**
* Clicking a card:

  * Triggers a **WOW scale effect**
  * Opens a **floating event preview panel**
  * Preview appears on the **opposite side** of the clicked card
  * Smooth slide-in animation
* Preview auto-closes on outside click or scroll
* No overlap while scrolling

---

### 🖼️ Memories (Gallery)

* Central “Memories” title
* Multiple floating glass image windows
* Images move freely with controlled animations
* One image periodically glides to the center
* No overlap, fast but aesthetic motion
* Fully responsive

---

### 📊 Statistics Section

* Card-based metrics
* Matches µLearn branding
* Glow emphasis on numbers
* Responsive grid

---

### 🔄 Learning Circles

* Split glass layout
* Cartoon illustration embedded inside glass
* “Create / Join” button with elastic click animation
* Navigates to `circles.html`

---

### 👥 Team Section

* Card-based team members
* Circular avatars with brand-colored glow
* Hover interaction:

  * Lift
  * Glow increase
  * Avatar emphasis

---

### 🤝 Connect Section

* Center-aligned CTA
* “Join Discord” & “Join WhatsApp” buttons
* Proper hover + click feedback
* External links open safely (`noopener`)

---

### 🦶 Footer

* Space-themed gradient footer
* Email contact
* Navigation shortcuts
* Social icons (LinkedIn, Instagram, X, Facebook)
* Icons only (names shown on hover tooltip)
* Copyright notice

---

## 🧩 Pages Included

* `index.html` — Main website
* `join.html` — Registration page
* `circles.html` — Learning Circles page
* `style.css` — Main styling
* `script.js` — Interactions & animations

---

## 📱 Responsiveness

* Fully responsive across:

  * Desktop
  * Tablet
  * Mobile
* Timeline collapses cleanly
* Navbar adapts for smaller screens
* Touch-friendly interactions

---

## 🛠 Tech Stack

* **HTML5**
* **CSS3**

  * Glassmorphism
  * Animations
  * Custom gradients
* **Vanilla JavaScript**

  * Event handling
  * Dynamic positioning
  * Intersection Observer
* **Fonts**

  * Orbitron
  * Inter
* **Icons**

  * Font Awesome

---

## 📂 Project Structure

```
/
├── index.html
├── join.html
├── circles.html
├── style.css
├── join.css
├── circles.css
├── script.js
└── images/
```

---

## 🎯 Purpose

This redesign was created to:

* Increase student engagement
* Make µLearn CHN visually memorable
* Showcase events as a journey, not a list
* Reflect µLearn’s futuristic learning culture

---


