const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors')
dotenv.config({ path: '../.env' });
const app = express();

const port = process.env.PORT;
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (req, res) => {
    try {
        res.cookie('test', 'test',{
            httpOnly: true,
            secure: true,
            sameSite: true
        })
        res.status(200)
            .json({
                "Test" : "Test json"
            });
    } catch(err) {
        res.status(500)
    }
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});