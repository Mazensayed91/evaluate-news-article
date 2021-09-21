// Imports
const express = require('express');
const path = require("path");
const axios = require('axios');

// Constants
const BASE_URL = "https://api.meaningcloud.com/sentiment-2.1/"
let projectData = {}

// Configure the environment variables
require('dotenv').config({path:__dirname+'/./../../.env'});

const LICENSE_KEY = process.env.LICENSE_KEY
console.log("LICENSE_KEY", LICENSE_KEY)
const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// a route that handling post request for new URL that coming from the frontend
app.post('/add', async(req, res) => {
    console.log(req);
    let articleUrl = req.body.url
    let headers = {}
    let params = {
        key : LICENSE_KEY,
        lang: "en",
        url: articleUrl
    }
    let response = await axios.get(BASE_URL,{params, headers});
    const responseData = {
        text: response.sentence_list.text,
        score_tag : response.sentence_list.score_tag,
        agreement : response.sentence_list.agreement,
        subjectivity : response.subjectivity,
        confidence : response.confidence,
        irony : response.irony
    }

});
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
