const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});