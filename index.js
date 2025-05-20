const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

async function main() {
    await app.listen(PORT);
    console.log('Server on port', PORT);
}

main();
