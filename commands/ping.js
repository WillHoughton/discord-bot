var config = require("../utils/config.json")
exports.run = (client, message, args) => {
		return message.channel.send({
					embed: {
						color: config.embedColor,
						title: ":ping_pong: Pong! " + Math.round(client.ping) + ' ms.'
					}})};