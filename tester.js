var supply = require('@dms/supply');
var jsonFile = require('jsonfile');

var contents = jsonFile.readFileSync('./tests/signals.json');
var dtw = supply('dtw', {
    version: '1.0.0' // specify a version
  });

function dtwCallback(err, res) {
	console.log('Similarity: ' + res.outputs.similarity);
}

for (var i in contents) {
	var data = {
		query: contents[i].query,
		template: contents[i].template
	};

	dtw(data, dtwCallback);
}
