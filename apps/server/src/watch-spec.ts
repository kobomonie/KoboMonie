import { spawn } from 'node:child_process';
import chokidar from 'chokidar';

const watcher = chokidar.watch(['src/routes/**/*.ts', 'src/app.ts'], {
  ignored: /(^|[\]/])\..*/, // ignore dotfiles
  persistent: true,
  cwd: process.cwd(),
});

console.log('Watching for changes to regenerate OpenAPI spec...');

let processing = false;

const generate = () => {
  if (processing) return;
  processing = true;

  console.log('Change detected. Regenerating OpenAPI spec...');

  const child = spawn('bun', ['run', 'src/generate-openapi.ts'], {
    stdio: 'inherit',
    shell: true,
  });

  child.on('close', (code) => {
    if (code === 0) {
      console.log('OpenAPI spec generated successfully.');
    } else {
      console.error(`OpenAPI spec generation failed with code ${code}`);
    }
    processing = false;
  });
};

// Initial generation
generate();

watcher.on('change', (path) => {
  console.log(`File ${path} has been changed`);
  generate();
});
