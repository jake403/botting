/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send, process.env.token	) {

Files.initStandalone();

} else {
process.on('message', process.env.token , function(content) {
	Files.initBotTest(content);
	
});

}