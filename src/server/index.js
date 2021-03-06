// Imports
const express = require('express');
const axios = require('axios');

// Constants
const BASE_URL = "https://api.meaningcloud.com/sentiment-2.1"

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
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
// a route that handling post request for new URL that coming from the frontend
app.get('/sentiment_analysis/*', async(req, res) => {
    try {
        //console.log("req", req);
        let articleUrl = req.params['0']
        let headers = {}
        let params = {
            key: LICENSE_KEY,
            lang: "en",
            url: articleUrl
        }
        //console.log("articleURL", articleUrl)
        let response = await axios.get(BASE_URL, {params, headers});
        console.log("sentence_list", response.data.sentence_list)
        const responseData = {
            score_tag: response.data.score_tag,
            agreement: response.data.agreement,
            subjectivity: response.data.subjectivity,
            confidence: response.data.confidence,
            irony: response.data.irony
        }
        //console.log("responseData", responseData)
        // console.log("response", response.data)
        res.send(responseData)
    }
    catch(error){
        console.dir(error);
        throw error;
    }

});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})