Steps
----
- Every code has to be type in the typescript folder and not directly.
- The typescript code has to be generated using tsc and also generate .d.ts files with it.
- move the collection.d.ts file to public folder from typescript folder.
- delete all .d.ts files from typescript folder.
- now concat all the js files from src folder into one file exporting just one objects.