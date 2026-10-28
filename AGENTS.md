# Portfolio project

## Project description
Portfolio with two topics: IT and art related stuff.
Programmed with TypeScript, compiled into JavaScript, using nodejs, express and ejs. Also website structure and styles are programmed with html and css files.
The website is separated into two similar sub-sites (for IT and art topics), each with a description higher and a list of projects, works and other stuff lower. 

## Run project

### Build
Compile a typescript code into a javasript code with command:
```bash
npm run build
```

"ts" files from "src" directory will compile into "js" files in a "dist" directory.

app.ts/app.js is a main file.

### Debug
Debugging requires compiling (building) the project first.
To debug the project (run it with nodemon - detecting changes in files and auto-reloading) you can run the command:
```bash
npm run debug
```

### Start
Running the project requires compiling (building) the project (just like with building).
To run the project without nodemon (with "node" command), you can run:
```bash
npm run start
```

### Check
To check the typescript code (for types, missed restrictions, or other errors) without building it, you can just run the command:
```bash
npx tsc --noEmit
```
Or you can use this command:
```bash
npm run check
```


## Project structure

### Folders:
src - source typescript code files (change code in THIS directory, not in "dist")
dist - destination for "npx tsc" compilation - destination directory (don't chenge files in here in other way than compilation)
html - html files, which can use ejs syntax (because of configuration in app.ts: "app.engine('html', ejs.renderFile)")
public - static files (because of app.ts configuration: "app.use(express.static(__dirname + '/public'))")
public/css - css files, stylesheet files
node_modules - npm modules directory

### Files:
.gitignore
src/app.ts - main typescript code file
src/config.ts - configuration file (exporting a "config" object)
package.json
tsconfig.json
AGENTS.md - instructions for an ai agents
AGENTS_LOGS.txt - log file of ai-agent-related changes

### In case of adding new directory in the project structure, or its configuration, the action should be logged in "AGENTS_LOGS.txt" file