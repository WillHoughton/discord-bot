var config = require('../utils/config.json');

exports.run = (client, message, args) => {
  message.author.send("Here's a link to your avatar:\n" + message.author.displayAvatarURL);

  message.channel.send({embed: {
    color: config.embedColor,
    title: "Avatar sent to private messages."
  }})
};