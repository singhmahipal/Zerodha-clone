const {Schema} = require('mongoose');

const WatchlistsSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

module.exports = {WatchlistsSchema};