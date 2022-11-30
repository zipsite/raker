const express = require("express");

const app = express();

app.get("/users", (req, res) => {
    res.sendFile(__dirname + "/db.json");
});

app.listen(3000);