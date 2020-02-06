const natural = require('natural');
const classifier = new natural.BayesClassifier();

const nlpTest = async (payload) => {
    let resultTest = '';

    natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
        resultTest = classifier.getClassifications(payload);
    });

    return resultTest;
};

module.exports = {
    nlpTest
};
