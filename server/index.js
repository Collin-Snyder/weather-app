const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static("../client/public"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to your Express-React app!");
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
