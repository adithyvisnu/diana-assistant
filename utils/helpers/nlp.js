const natural = require('natural');

const nlpTest = async (payload) => {
    return new Promise((resolve, reject) => {
        let resultTest = '';
        natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
            if(err) {
                reject({error: true, data: err});
            }
            resultTest = classifier.getClassifications(payload);
        });
        resolve({error: false, data: resultTest});
    });
};

module.exports = {
    nlpTest
};
