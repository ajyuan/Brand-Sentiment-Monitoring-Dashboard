const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: '',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
});

const runAnalysis = query => {
  const parameters = {
    'text': query,
    'features': {
      'entities': {
        'sentiment': true,
        'limit': 1
      }
    }
  };

  naturalLanguageUnderstanding.analyze(parameters)
    .then(analysisResults => {
      console.log(JSON.stringify(analysisResults, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });
};

module.exports = runAnalysis;
