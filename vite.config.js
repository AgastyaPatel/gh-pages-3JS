import { defineConfig } from 'vite';
import path from 'path';

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: getBuildOutputDir(),
        emptyOutDir: true,
        sourcemap: true
    }
}


function getBuildOutputDir() {
  const currentDir = process.cwd(); // Get the current working directory
  const upperCurrentDir = path.resolve(currentDir + "/../")
  const directoryName = path.basename(currentDir); // Get the name of the directory

  return `../dist/${directoryName}`; // Use the directory name as a separate build folder
}