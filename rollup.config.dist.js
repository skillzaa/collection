import { terser } from "rollup-plugin-terser";
export default {
	input: 'src/Collection.js',
	plugins: [terser()],
	output: {
	  file: 'public/collection.js',
	  format: 'es',
	}

  };