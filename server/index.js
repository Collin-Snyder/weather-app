const express = require("express");
const port = 5000;

const app = express();

app.use(express.static("../client/public"));
app.use(express.json());
app.use(express.cors());

app.get("/", (req, res) => {
    res.send("Welcome to your Express-React app!");
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
