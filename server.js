const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = { origin: 'https://wordler-client.herokuapp.com/', optionSuccessStatus: 200 }

app.use(cors(corsOptions));
app.use(express.json())



const wordRoutes = require('./routes/words');
app.use('/words', wordRoutes);

app.listen(8080, () => {
    console.log("server is running on port 8080")
})