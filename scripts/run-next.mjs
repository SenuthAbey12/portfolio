import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const command = process.argv[2]

if (!['dev', 'build', 'start'].includes(command)) {
  console.error('Usage: node scripts/run-next.mjs <dev|build|start>')
  process.exit(1)
}

const nextCli = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url))
const nodeEnv = command === 'dev' ? 'development' : 'production'
const result = spawnSync(process.execPath, [nextCli, command, ...process.argv.slice(3)], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: nodeEnv },
})

if (result.error) {
  console.error(result.error)
  process.exit(1)
}

process.exit(result.status ?? 1)
