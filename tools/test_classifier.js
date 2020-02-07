var natural = require('natural');
var classifier = new natural.BayesClassifier();

natural.BayesClassifier.load('classifier_4.json', null, function(err, classifier) {
    console.log(classifier.getClassifications('hello'));
    // console.log(classifier.classify('xxxxx'));
});