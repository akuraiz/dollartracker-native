# DollarTracker Native

DollarTracker is a local-first USD/KHR money tracker that runs as a PWA today and is being prepared for a native iPhone build through Capacitor.

## Current milestone

`v4.0.0-alpha.4 — Clean Core`

- Preserves profiles, records, calculator, themes, backups, and local-first behavior.
- Fixes the separate grey block inside the dark-mode amount field.
- Positions the floating Save button above the iOS keyboard and accessory bar using `visualViewport`.
- Establishes a clean Git repository and Capacitor configuration.
- Does not generate the `ios/` project yet because iOS compilation requires macOS and Xcode.

## Windows setup

1. Install Node.js 22 or newer, GitHub Desktop, and Visual Studio Code.
2. Clone this repository in GitHub Desktop.
3. Open the cloned folder in Visual Studio Code.
4. Run:

```powershell
npm install
npm run verify
npm start
```

Open `http://localhost:4173`.

## Everyday workflow

Pull → edit → test → `npm run verify` → commit → push.

## iPhone native build later

The web core and Capacitor configuration can be developed on Windows. Creating, opening, compiling, and installing the iOS project requires a Mac with Xcode.

On a Mac:

```bash
npm install
npm run ios:add
npm run cap:sync
npm run ios:open
```


### v4.0.0-alpha.4

Adds a graphics-style Glass Intensity slider in Settings so the app can shift between a cooler interface and the older premium Liquid Glass look. Higher settings can use more GPU and may heat iPhones faster.


### v4.0.0-alpha.4

- Christmas Luxe theme revived with warmer green/gold glass.
- Glass Intensity now affects both dark and light mode.
- Luxe mode looks closer to the old beautiful version while cooler levels stay easier on the phone.


## v4.0.0-alpha.4 Theme-Colored Liquid Glass Engine

Dark and light themes now keep their own color personality while the Glass Intensity slider changes blur, glow, saturation, and depth. Christmas Luxe is tuned back toward the warm green/gold old favorite look.
