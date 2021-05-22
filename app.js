const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const cors = require("cors");


if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

app.use(cors());
app.use(express.static('assets'));
app.use(express.static('cdnjs'));
app.use(express.static('views'));
app.use(express.static( 'pages'));

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"));
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
});

app.listen(PORT, () => {
    console.log("server started at port 3000");
});
