import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Actions задаёт GITHUB_REPOSITORY=owner/repo — нужен абсолютный base с именем репо,
// иначе при открытии .../repo без "/" в конце относительные ./assets уезжают на .../assets (404).
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repoName ? `/${repoName}/` : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
