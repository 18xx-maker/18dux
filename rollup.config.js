import alias from '@rollup/plugin-alias'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

import * as path from 'path'

import pkg from './package.json'

const extensions = ['.ts']

const config = [
  {
    input: 'src/index.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
      indent: false
    },
    external: Object.keys(pkg.dependencies),
    plugins: [
      alias({
        entries: {
          '18dux': path.resolve(__dirname, 'src')
        }
      }),
      resolve({ extensions }),
      typescript(),
      babel()
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'esm',
      indent: false
    },
    external: Object.keys(pkg.dependencies),
    plugins: [
      alias({
        entries: {
          '18dux': path.resolve(__dirname, 'src')
        }
      }),
      resolve({ extensions }),
      typescript(),
      babel()
    ]
  }
]

export default config
