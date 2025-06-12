// npm - global comand, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency = use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json = manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// To update changed files to repository...
// git status - checks which files are modified
// git add <filename> - stages files to be updated in repository
// git commit -m "Update message(can be whatever)" - ready to push to repository
// git push - pushes the changes to repository

const _= require('lodash');

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log('We finally have an operating server!')

