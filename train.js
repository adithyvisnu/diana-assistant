var natural = require('natural');
var classifier = new natural.BayesClassifier();

classifier.addDocument('cari product terkait Mangoesky', 'Mangoesky');
classifier.addDocument('cari Mangoesky', 'Mangoesky');
classifier.addDocument('cari product Mangoesky', 'Mangoesky');
classifier.addDocument('ada ngga Mangoesky', 'Mangoesky');
classifier.addDocument('Mangoesky', 'Mangoesky');
classifier.addDocument('product Mangoesky', 'Mangoesky');

classifier.addDocument('cari product terkait Astinet', 'Astinet');
classifier.addDocument('cari Astinet', 'Astinet');
classifier.addDocument('cari product Astinet', 'Astinet');
classifier.addDocument('ada ngga Astinet', 'Astinet');
classifier.addDocument('Astinet', 'Astinet');
classifier.addDocument('product Astinet', 'Astinet');

classifier.addDocument('cari product terkait VPN IP', 'VPN IP');
classifier.addDocument('cari VPN IP', 'VPN IP');
classifier.addDocument('cari product VPN IP', 'VPN IP');
classifier.addDocument('ada ngga VPN IP', 'VPN IP');
classifier.addDocument('VPN IP', 'VPN IP');
classifier.addDocument('product VPN IP', 'VPN IP');

classifier.train();

classifier.save('classifier.json', function(err, classifier) {
    // the classifier is saved to the classifier.json file!
});