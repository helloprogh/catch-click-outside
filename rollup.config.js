import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from "rollup-plugin-uglify";
import commonjs from 'rollup-plugin-commonjs';
export default {
    input: './index.js',
    output: {
      file: 'bundle.js',
      format: 'es',
      name: 'click-outside'
    },
    plugins: [
      // resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/env',
            {
              modules: 'false',
              targets: {
                browsers: '> 1%, IE 10, not op_mini all, not dead'
              },
              corejs: 3,
              useBuiltIns: 'usage'
            }
          ]
        ]
      }),
      // commonjs(),
      // uglify()
    ]
  };