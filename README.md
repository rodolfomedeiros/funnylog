# Funny log for nodejs

## Using

~~~prompt
npm install @rodolfomedeiros/funnylog --save
~~~

## Example
~~~javascript
const funnylog = require("@rodolfomedeiros/funnylog");

const log = funnylog({delay: 50, randomized: true});

log("Hello, World");
~~~