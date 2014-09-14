
/*
 * GET home page.
 */

var index = function(req, res){
  res.render('index', { title: 'Express' });
};

module.exports = exports = function(app) {

	// Homepage
	app.get('/', index);

	// begin resources

// -- character --
var character = require('../resources/character.js');

app.post('/characters', character.create);		// Create
app.get('/characters/:id', character.get);		// Read
app.put('/characters/:id', character.update);		// Update
app.del('/characters/:id', character.delete);		// Delete
app.get('/characters', character.list);			// List

	// end resources
}