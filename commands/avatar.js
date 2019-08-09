var config = require('../utils/config.json');
var messages = require('../utils/messages.json');


exports.run = (client, message, args) => {
  return message.channel.send("Your avatar is " + message.author.displayAvatarURL);
}