# DollarTracker Native

DollarTracker is a local-first USD/KHR money tracker that runs as a PWA today and is being prepared for a native iPhone build through Capacitor.

## Current milestone

`v4.0.0-alpha.10 — Phase 2 Transaction Feedback`

- Restores the main balance count animation on iPhone/thermal-lite devices after adding money.
- Adds focused transaction feedback for Add, Quick Add, Edit, and Delete without reducing Liquid Glass visuals.
- Fixes Delete so the balance can animate from the previous value instead of jumping instantly.
- Keeps the slider polish from alpha.9 and the root `index.html` redirect for GitHub Pages.
- Keeps the native-ready `www/` app structure for Capacitor later.

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
