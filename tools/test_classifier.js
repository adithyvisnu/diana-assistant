var natural = require('natural');
var classifier = new natural.BayesClassifier();

natural.BayesClassifier.load('classifier_2.json', null, function(err, classifier) {
    console.log(classifier.getClassifications('pdf'));
    // console.log(classifier.classify('xxxxx'));
});