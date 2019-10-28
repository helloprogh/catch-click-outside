import babel from 'rollup-plugin-babel';
export default {
    input: './index.js',
    output: {
      file: 'bundle.js',
      format: 'es',
      name: 'v-catch-out-click'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**' 
      })
    ]
  };