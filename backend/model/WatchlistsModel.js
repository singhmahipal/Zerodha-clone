const {model} = require('mongoose');

const {WatchlistsSchema} = require('../schemas/WatchlistsSchema.js');

const WatchlistsModel = new model('watchlist', WatchlistsSchema);

module.exports = {WatchlistsModel};