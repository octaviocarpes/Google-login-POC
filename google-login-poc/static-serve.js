const express = require("express");
const app = express();

app.use(express.static('dist'));

app.listen(process.env.port || 8080, () => {
    console.log("App Deployed successfully on port 8080")
})