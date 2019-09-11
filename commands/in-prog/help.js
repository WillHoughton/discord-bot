var config = require('../utils/config.json');
var path = '../utils/help.txt'

exports.run = (client, message, args) => {
    message.channel.send({embed: {
        color: config.embedColor,
        description: "hi",
        footer: "hi"
    }})
}