import { uglify } from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';

export default {
  input: './index.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'click-outside'
  },
  plugins: [
    babel(),
    uglify()
  ]
};