import { terser } from "rollup-plugin-terser";
export default {
	input: 'src/Collection.js',
	plugins: [terser()],
	output: {
	  file: 'dist/collection.cjs.0.1.js',
	  format: 'cjs',
	}

  };