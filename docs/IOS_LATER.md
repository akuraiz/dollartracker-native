# iOS Build Later

A Mac is required for Xcode, app signing, real iPhone haptic testing, and the final iOS build.

When Mac access is available:

```bash
npm install
npm run ios:add
npm run cap:sync
npm run ios:open
```

The next native milestone will add Haptics, Keyboard, Status Bar, Share, Filesystem, and Camera behind a small bridge with safe PWA fallbacks.
