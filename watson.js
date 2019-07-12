const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: 'OaH7XCqCOG4aUoYXwJgUJ2mhRgn4-i8GgZHelRaD4RDA',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
});

const analyzeParams = {
  'url': 'https://twitter.com/search?q=%23redhat',
  'features': {
    'entities': {
      'sentiment': true,
      'limit': 1
    }
  }
};

naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
