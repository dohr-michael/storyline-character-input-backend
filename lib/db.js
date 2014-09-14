/* 
 * Create a Mongoose Connection and define the data models.
 */

var mongoose = require('mongoose');
var logger = require('./log');
	
// Connect to mongo
var mongoURL = 'mongodb://127.0.0.1/storyline-character';
mongoose.connect(mongoURL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	logger.info("mongoose connection is open");
});

/*
 * The Models
 */


// begin models
var CharacterModel = mongoose.model("Character", new mongoose.Schema({}, {strict: false}));
// end models