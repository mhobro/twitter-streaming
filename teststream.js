require('dotenv').config();
var util = require('util');

var twitterAPI = require('twitter');
var twitter = new twitterAPI({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

twitter.stream('statuses/filter', {track: 'Zlatan'}, function (stream) {
	console.log("fak");
    stream.on('data', function(data){
        console.log(util.inspect(data));
        stream.destroy();
        process.exit(0);
    });
});
