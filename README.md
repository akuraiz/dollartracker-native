# DollarTracker Native

DollarTracker is a local-first USD/KHR money tracker that runs as a PWA today and is being prepared for a native iPhone build through Capacitor.

## Current milestone

`v4.0.0-alpha.11 — Render Engine Foundation`

- Adds a central render scheduler to batch common UI updates into the next animation frame.
- Preserves balance count animations while scheduled transaction renders wait for the browser's next paint.
- Reuses current-month data across monthly totals, budgets, category chart, and top-category rendering.
- Skips repeated fixed text writes when the value has not changed.
- Keeps the alpha.10.2 slider design and alpha.10 transaction feedback.
- Keeps Liquid Glass visuals, storage, backup format, and calculations untouched.

## Live app path

The actual app files are in `www/`.

For GitHub Pages, the working app path is usually:

```text
https://akuraiz.github.io/dollartracker-native/www/
```

This package also includes a root redirect, so if GitHub Pages serves the repo root, this can forward to the app:

```text
https://akuraiz.github.io/dollartracker-native/
```

## Windows setup

1. Install Node.js 22 or newer, GitHub Desktop, and Visual Studio Code.
2. Clone this repository in GitHub Desktop.
3. Open the cloned folder in Visual Studio Code.
4. Run:

```powershell
npm.cmd install
npm.cmd run verify
npm.cmd start
```

Open `http://localhost:4173` on the PC.

## Everyday workflow

```text
Copy update into repo
→ npm.cmd run verify
→ test locally
→ commit
→ push
→ GitHub Actions deploys
→ test on iPhone
```

## iPhone native build later

The web core and Capacitor configuration can be developed on Windows. Creating, opening, compiling, and installing the iOS project requires a Mac with Xcode.

On a Mac:

```bash
npm install
npm run ios:add
npm run cap:sync
npm run ios:open
```
