const error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};

const Twitter = require('twitter-node-client').Twitter;
const config = {
    'consumerKey': "CNhkRnj2G4VBfxNS2muTLVHlA",
    'consumerSecret': "eGwDdvcvZIhQWMpElPNlBZICIwzfPWG8DNFfIoWNmIhyNtN0mY",
    'accessToken': "2314802384-1DChgFJp5CdAKqIIatRMEJQHCw9AGMIg6evKZ6v",
    'accessTokenSecret': "9NwYMXa1Ted6QgKfbdQWSKLzvZRxUmHLwqOsqgX3dGVnl"
};

const twitter = new Twitter(config);

let results = [];
const searchResults = twitter.getSearch(
    { 'q': 'ibm', 'count': 100 }, 
    error, 
    function (data) {
        data = JSON.parse(data);
        statuses = data['statuses'];
        for (let i = 0; i < 100; i++) {
            if (statuses[i]) {
                results.push([statuses[i]['text'], statuses[i]['created_at']]);
            } else {
                break;
            }
        }
        console.log(results);
    }
);