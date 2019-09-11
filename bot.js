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
    console.log(`    Logged in as ${client.username}!`);
    console.log('    Developed by Will | Hoisting#2552');
    console.log('    Copyright Protected 2019');
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
            if (message.content.startsWith(config.prefix + "say")) {
                s = require(`./commands/say.js`);
                s.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "help")) {
                h = require(`./commands/help.js`);
                h.run(client,message,args);
            }
            if (message.content.startsWith(config.prefix + "ip")) {
                i = require(`./commands/ip.js`);
                i.run(client,message,args);
            }
            if (message.content.startsWith(config.prefix + "store")) {
                h = require(`./commands/store.js`);
                h.run(client,message,args);
            }
            if (message.content.startsWith(config.prefix + "forums")) {
                h = require(`./commands/forums.js`);
                h.run(client,message,args);
            }
            else return;
        } catch (err) {
            message.channel.send({ embed: {
                color: config.embedColor,
                title: "Looks like this command is out of order."
            }})
        }
    });
client.login(secrets.token);
