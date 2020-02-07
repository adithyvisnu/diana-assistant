var natural = require('natural');
var classifier = new natural.BayesClassifier();

natural.BayesClassifier.load('classifier_6.json', null, function(err, classifier) {
    console.log(classifier.getClassifications('hrj'));
    // console.log(classifier.classify('xxxxx'));
});