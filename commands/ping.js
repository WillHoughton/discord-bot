exports.run = (client, message, args) => {
	return message.channel.send(":ping_pong: Pong! " + Math.round(client.ping) + ' ms.')
	}