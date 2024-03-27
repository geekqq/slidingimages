const express = require("express");
const app = express();

app.use(express.static("public"));

const port = process.env.port || 3011

app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
})