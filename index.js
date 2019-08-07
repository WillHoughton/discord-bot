var Discord = require('discord.js')
var config = require('./utils/config.json')

var client = new Discord.Client();

client.on('ready', function(evt) {
    client.user.setActivity()
        client.user.setPresence({
            game: {
                name: config.gameInfo,
                type: config.gamePresence,
            }
        })
})

client.login(config.token);