# Changelog

## 4.0.0-alpha.11 — Render Engine Foundation

- Added a central `scheduleRender()` queue so transaction, settings, history filter, import/export, and profile changes can batch their DOM updates into the next animation frame.
- Added safe render-option merging so balance count animations keep the correct starting balance even when several UI updates happen together.
- Added a tiny cached-ID helper for repeated fixed text updates and skipped unchanged text writes.
- Reused the same current-month record set across monthly totals, budgets, chart, and top-category rendering to reduce repeated filtering.
- Added optional development render timing logs behind `localStorage.setItem("dollarTracker.debugPerf", "1")`.
- Updated `APP_VERSION`, `package.json`, service-worker cache, and cache-busting query strings to `4.0.0-alpha.11`.
- Kept Liquid Glass visuals, slider design, theme signatures, storage, backup format, and calculations untouched.

## 4.0.0-alpha.10.2 — Clean Slider Hotfix

- Rebuilt the Glass Intensity slider into a cleaner thin-track control.
- Removed the visible left/right slider shell caps that looked like extra circles on iPhone.
- Reduced slider-only shadow and background layers to lower unnecessary paint cost.
- Added active Cooler/Balanced/Luxe label syncing so Luxe values no longer highlight Balanced.
- Batched slider repaint work with `requestAnimationFrame` while dragging.
- Updated `APP_VERSION`, `package.json`, service-worker cache, and cache-busting query strings to `4.0.0-alpha.10.2`.
- Kept the alpha.10 iPhone balance count animation and transaction feedback.
- Kept Liquid Glass visuals, theme signatures, storage, backup format, and calculations untouched.

## 4.0.0-alpha.10 — Phase 2 Transaction Feedback

- Restored the main balance count animation on iPhone/thermal-lite devices while still respecting the system Reduce Motion setting.
- Added a lightweight transaction feedback pulse after Add, Quick Add, Edit, and Delete.
- Fixed Delete so it captures the previous balance and animates to the new balance instead of doing a plain render.
- Updated cache-busting query strings for `styles.css` and `app.js` to `4.0.0-alpha.10`.
- Bumped app, package, and service-worker cache versions to `4.0.0-alpha.10`.
- Kept Liquid Glass visuals, theme signatures, storage, backup format, and calculations untouched.

## 4.0.0-alpha.5

- Restored the Christmas theme toward the warmer, more alive old Liquid Glass style.
- Made Glass Intensity affect light mode as well as dark mode.
- Added readable light-mode glass surfaces and cream Christmas light-mode controls.
- Kept iPhone optimizations by using static ambience instead of moving aurora effects.

## 4.0.0-alpha.5

- Established the native-ready repository structure.
- Added Capacitor 8 configuration without generating iOS on Windows.
- Fixed the dark-theme amount input grey rectangle.
- Added keyboard-safe floating Save positioning.
- Added setup, iOS handoff, testing, and release documentation.

## 4.0.0-alpha.5 - Theme-Colored Liquid Glass Engine

- Reworked the glass system so every theme keeps its color identity in dark mode instead of turning black.
- Added matching tinted glass behavior for light mode so it is not plain clear/white.
- Tuned Christmas Luxe toward the old warm green/gold favorite look.
- Made Glass Intensity behave like graphics settings: Cooler, Balanced, and Luxe change blur/glow/depth while preserving theme color.
- Kept iPhone thermal-lite optimization: static ambience on Balanced/Luxe, no continuous orb animation on iPhone.
