import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // generate self-contained build
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "./", // fixes workspace root warning
  },
  outputFileTracingRoot: __dirname, // ensures standalone build traces files correctly
}

export default nextConfig