const path = require('path');
const express = require('express');
const Twitter = require('twitter-node-client').Twitter;
const bodyParser= require("body-parser");
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: 'OaH7XCqCOG4aUoYXwJgUJ2mhRgn4-i8GgZHelRaD4RDA',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
});

const config = {
    'consumerKey': "CNhkRnj2G4VBfxNS2muTLVHlA",
    'consumerSecret': "eGwDdvcvZIhQWMpElPNlBZICIwzfPWG8DNFfIoWNmIhyNtN0mY",
    'accessToken': "2314802384-1DChgFJp5CdAKqIIatRMEJQHCw9AGMIg6evKZ6v",
    'accessTokenSecret': "9NwYMXa1Ted6QgKfbdQWSKLzvZRxUmHLwqOsqgX3dGVnl"
};
const twitter = new Twitter(config);

const error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 const searchResults = twitter.getSearch(
    { 'q': 'ibm', 'count': 100 }, 
    error, 
    function (data) {
        data = JSON.parse(data);
        res.send(data);
        // return res.send(statuses[0]['text']);
        // for (let i = 0; i < 100; i++) {
        //     if (statuses[i]) {
        //         console.log(statuses[i]['text']);
        //     } else {
        //         break;
        //     }
        // }
    }
);
});


app.post('/watson/twitter',function(req,res){
    const param = req.body.a;
    console.log("param",param);
    if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
    }

    const runAnalysis = query => {
      const parameters = {
        'text': param,
        'features': {
          'entities': {
            'sentiment': true,
            'limit': 1
          }
        }
      };

      naturalLanguageUnderstanding.analyze(parameters)
        .then(analysisResults => {
          res.send(JSON.stringify(analysisResults, null, 2));
        })
        .catch(err => {
          console.log('error:', err);
        });
    };
})

app.listen(process.env.PORT || 8080);