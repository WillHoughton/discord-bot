var config = require('../utils/config.json');

exports.run = (client, message, args) => {
  return message.author.send("Here's a link to your avatar:\n" + message.author.displayAvatarURL) && (channelMessage);
}

var channelMessage = message.channel.send({
  embed: {
    color: config.embedColor,
    title: "Avatar sent to private messages"
  }
});