import { uglify } from "rollup-plugin-uglify";
export default {
	input: 'src/Collection.js',
	output: {
	  file: 'dist/collection.es.js',
	  format: 'es',
	}

  };