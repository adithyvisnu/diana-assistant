var natural = require('natural');
const products = require('./classification.json');
var classifier = new natural.BayesClassifier();

const kata = [
    'cari product terkait learn',
    'cari learn',
    'cari product learn',
    'ada ngga learn',
    'learn',
    'product learn',
    'mau cari product terkait learn',
]

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    if (product.type == 'word') {
        classifier.addDocument(product.question, product.answer)
    }else{
        kata.map(data => {
            classifier.addDocument(data.replace('learn', product.productName), product.productName)
        })
    }
    // console.log(product.productName)
    
}


classifier.train();

classifier.save('classifier_6.json', function(err, classifier) {
    // the classifier is saved to the classifier.json file!
});