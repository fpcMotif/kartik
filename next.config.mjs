import path from "node:path";
import { fileURLToPath } from "node:url";
import { withNextVideo } from "next-video/process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  turbopack: {
    root: projectRoot,
  },
};

const configWithVideo = withNextVideo(nextConfig);

// Remove experimental.outputFileTracingIncludes and add it at top level for Next.js 16
if (configWithVideo.experimental?.outputFileTracingIncludes) {
  configWithVideo.outputFileTracingIncludes =
    configWithVideo.experimental.outputFileTracingIncludes;
  delete configWithVideo.experimental.outputFileTracingIncludes;
}

export default configWithVideo;
