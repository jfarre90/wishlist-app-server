const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/wishlist', {
    useNewUrlParser: true,
    keepAlive: true
});

module.exports.Wish = require('./wish');