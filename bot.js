var Discord = require('discord.js');
var config = require('./utils/config.json');
var secrets = require("../token.json")
 
const fs = require("fs");
var client = new Discord.Client();

client.on('ready', function(evt) {
    client.user.setActivity();
    client.user.setPresence({
        game: {
            name: config.gameInfo,
            type: config.gamePresence,
        }
    })
})
    console.log('=================================');
    console.log('    Logged in as ${client.user.tag}!');
    console.log('    Developed by Will | Hoisting#2552');
    console.log('    Copyright Protected 2018');
    console.log('=================================');

    client.on("message", message => {
        if (message.author.bot) return;
        var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        var command = args.shift().toLowerCase();
        try {
            if (!message.content.startsWith(config.prefix)) return;
            //Commands
            if (message.channel.type == "dm") {
                return;
            }
            if (message.content.startsWith(config.prefix + "info")) {
                i = require(`./commands/info.js`);
                i.run(client, message, args);
            } 
            if (message.content.startsWith(config.prefix + "avatar")) {
                a = require(`./commands/avatar.js`);
                a.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "ping")) {
                p = require(`./commands/ping.js`);
                p.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "new")) {
                n = require(`./commands/new.js`);
                n.run(client, message, args);
            }
            // if (message.content.startsWith(config.prefix + "say")) {
            //     s = require(`./commands/say.js`);
            //     s.run(client, message, args);
            // }
            // if (message.content.startsWith(config.prefix + "help" || client.user.tag)) {
            //     h = require(`./commands/help.js`);
            //     h.run(client,message,args);
            // }
            else return;
        } catch (err) {
            console.error(err);
        }
    });

client.login(secrets.token);
