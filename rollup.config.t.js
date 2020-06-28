import { terser } from "rollup-plugin-terser";
export default {
	input: 'src/Collection.js',
	plugins: [terser()],
	output: {
	  file: 'public/collection.cjs.js',
	  format: 'cjs',
	}
	
  };