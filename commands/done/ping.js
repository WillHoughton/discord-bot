const config = require("../utils/config.json")
const command = require("..")

exports.run = (client, message, args) => {
	return message.channel.send({
		embed: {
			color: config.embedColor,
			title: ":ping_pong: Pong! " + Math.round(client.ping) + ' ms.'
		}
	})
};