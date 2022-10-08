# Terminal
start with empty folder
## mkdir {foldername}
## cd {foldername}
## npm install express
### add the following to package.json:
"dependencies": {
    "express": "^4.18.1"
  },
## npm init
### add the following to package.json:
"name": "simple",
  "description": "npm install express",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
### manually add "start" under "scripts" in package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }
## npm run
to see a list of scripts
## npm run start
to start node index.js
## lsof -i tcp:{port}
list PID
## kill -9 {PID}
kill port