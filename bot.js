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
            if (message.content.startsWith(config.prefix + "ip")) {
                i = require(`./commands/ip`);
                i.run(client, message, args);
                console.log("Successfully loaded IP command")
            }
            if (message.content.startsWith(config.prefix + "store")) {
                s = require(`./commands/store`);
                s.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "forums")) {
                f = require(`./commands/forums`);
                f.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "apply")) {
                a = require(`./commands/apply`);
                a.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "status")) {
                st = require(`./commands/status`);
                st.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "rules")) {
                r = require(`./commands/rules`);
                r.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "say")) {
                sa = require(`./commands/say`);
                sa.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "add")) {
                a = require(`./commands/add`);
                a.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "remove")) {
                ra = require(`./commands/remove`);
                ra.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "close")) {
                c = require(`./commands/close`);
                c.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "new")) {
                n = require(`./commands/new`);
                n.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "giveaway")) {
                g = require(`./commands/giveaway`);
                g.run(client, message, args);
            }
            if (message.content.startsWith(config.prefix + "info")) {
                i = require(`./commands/info`);
                i.run(client, message, args);
            } 
            if (message.content.startsWith(config.prefix + "avatar")) {
                a = require(`./commands/avatar`);
                a.run(client, message, args);
            }
            else return;
        } catch (err) {
            console.error(err);
        }
    });

client.login(secrets.token);
