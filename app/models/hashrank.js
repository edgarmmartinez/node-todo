var mongoose = require('mongoose');

mongoose.set('debug', true);

HashSchemaMixed = mongoose.Schema ({
    any: {}
});

HashSchema = mongoose.Schema ({
    tag: String,
    count: Number
});
HashrankSchema = mongoose.Schema ({
    creationDate: {type: Date},
    hashrankList: [{String: String}]
});

module.exports = mongoose.model('Hashrank', HashrankSchema); 
