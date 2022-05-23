const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res)=>{
    res.send(
        {
          message: "Automate all the things",
          timestamp: 1529729125
        })
})

server.listen(4000, () => {
    console.log("Hello we are listening on: " + 4000);
})