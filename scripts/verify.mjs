import { access, readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

const required = [
  'www/index.html',
  'www/styles.css',
  'www/app.js',
  'www/service-worker.js',
  'www/manifest.webmanifest',
  'capacitor.config.json',
  'package.json'
];

for (const file of required) await access(file);
JSON.parse(await readFile('www/manifest.webmanifest', 'utf8'));
JSON.parse(await readFile('capacitor.config.json', 'utf8'));
JSON.parse(await readFile('package.json', 'utf8'));

for (const file of ['www/app.js', 'www/service-worker.js']) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status || 1);
}
console.log('DollarTracker repository checks passed.');
