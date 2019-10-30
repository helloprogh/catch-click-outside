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
      uglify()
    ]
  };