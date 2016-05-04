require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var twitterAPI = require('twitter');
var twitter = new twitterAPI({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: '*/*'}));

app.use('/', express.static(__dirname + '/public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));


app.listen(process.env.PORT, function () {
  console.log('Edward Blom listening on port ' + process.env.PORT + '!');
});
