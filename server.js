const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const port = process.env.port || 3002;

// Setting up the express server app
const app = express();

// Prints incoming server requests to the console
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

// Require Route
const api = require('./routes');
const axios = require('axios');
app.use('/api', api);
/*const axios = require('axios')
// Configure app to use route
app.use('/api', api);

app.get('/achievements', async (req, res) => {
    let achievements = await axios({
        method: 'get',
        url: 'https://fallguysapi.tk/api/achievements'
    })
    if (achievements.status == 200) {
        res.status(200).json({
            body: achievements.data
        })
    } else {
        res.status(500)
    }
})*/
/*app.get('/', (req, res) => {
    res.sendFile("index.html");
})*/
/*axios({
    method: 'get',
    url: 'http://localhost:3002/api/profiles/anotheruse'
}).then((response) => {
    console.log("that thang" + JSON.stringify(response.data));
});

axios({
    method: 'put',
    url: 'http://localhost:3002/api/update/anotheruse',

}).then((response) => {
    console.log("finished put");
});*/

//redirects to address localhost3002:/apiTest2 and prints hello world on the webpage
app.get('/apiTest2', (req, res) => {
    res.send("hello world");
});
// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'request cannot be fulfilled'
    });
});

//configure server on port 3002 or process.env
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });