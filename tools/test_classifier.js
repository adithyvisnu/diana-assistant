var natural = require('natural');
var classifier = new natural.BayesClassifier();

natural.BayesClassifier.load('classifier_7.json', null, function(err, classifier) {
    console.log(classifier.getClassifications('anjing'));
    // console.log(classifier.classify('xxxxx'));
});