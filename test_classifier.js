var natural = require('natural');
var classifier = new natural.BayesClassifier();

natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
    console.log(classifier.getClassifications('gua mau cari vpn'));
    console.log(classifier.classify('gua mau cari vpn'));
});