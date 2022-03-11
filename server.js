const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(cors());



const wordRoutes = require('./routes/words');
app.use('/words', wordRoutes);

app.listen(8080, () => {
    console.log("server is running on port 8080")
})