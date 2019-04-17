'use strict';

module.exports = function (nodecg) {

	nodecg.log.info('Extension loaded');

	const twitchsub = nodecg.Replicant('twitchsub');
	const twitchfollow = nodecg.Replicant('twitchfollow');
	const twitchdonation = nodecg.Replicant('twitchdonation');
	
	function twitch_sub() {
		var fs = require('fs');
		fs.readFile('twitch/most_recent_subscriber.txt', 'utf8', function(err, data) {
			if (err) { 
				throw err
			} else {
				twitchsub.value = data;
			}	
		});
	};
	
	setInterval(twitch_sub, 1000);

	function twitch_follow() {
		var fs = require('fs');
		fs.readFile('twitch/most_recent_follower.txt', 'utf8', function(err, data) {
			if (err) { 
				throw err
			} else {
				twitchfollow.value = data;
			}	
		});
	};
	
	setInterval(twitch_follow, 1000);

	function twitch_donation() {
		var fs = require('fs');
		fs.readFile('twitch/total_follower_count.txt', 'utf8', function(err, data) {
			if (err) { 
				throw err
			} else {
				twitchdonation.value = data;
			}	
		});
	};
	
	setInterval(twitch_donation, 1000);

};