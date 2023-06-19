/*
 * @Author: fangtao
 * @Date:   2023-06-19 20:26:14
 * @Last Modified by:   fangtao
 * @Last Modified time: 2023-06-19 20:56:09
 */
import babel from '@rollup/plugin-babel'

const plugins = [
  babel({
    babelrc: false,
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-export-default-from']
  })
]

export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    plugins
  },
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    plugins
  }
]
