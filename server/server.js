const express = require('express')
const app = express();

const port = 5001;

app.use("/", (req, res) => {
    res.send("Server is running");
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});