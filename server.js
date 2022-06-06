const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors());

const wordRoutes = require('./routes/words');
app.use('/words', wordRoutes);

const lettersRoutes = require('./routes/letters');
app.use('/letters', lettersRoutes);

app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
  });
  