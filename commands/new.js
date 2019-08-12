var config = require('../utils/config.json');

exports.run = (client, message, args) => {
  var server = message.guild;
  var name = message.author.username;
  var ticketName = "ticket-" + name;
  if (server.channels.some(r => [ticketName.toLowerCase()].includes(r.name))) {
    return message.channel.send({
      embed: {
        color: config.embedColor,
        title: "Error",
        description: "Looks like you already have a ticket open, tickets are limited to 1  at any time."
      }
    }).catch(console.error);
  }
  server.createChannel(ticketName, "text" [{
    id: message.guild.id,
    deny: ['VIEW_CHANNEL', ]
  }])
  .then(channel => {
    message.channel.send({
      embed: {
        color: config.embedColor,
        title: "Hey there " + message.author.username + ".",
        description: "Your ticket has been created."
      }
    });
    var parent = message.guild.channels.find(r => r.name === config.ticketCat)
    channel.setParent(parent.id);
    let everyone = server.roles.get(server.id);
    let a = server.roles.find(r => r.name === config.roleA);
    let b = server.roles.find(r => r.name === config.roleB);
    let bot = server.roles.find(r => r.name === config.Bot);
    channel.overwritePermissions(everyone, {
      "VIEW_CHANNEL": false
    });
    channel.overwritePermissions(a, {
        "VIEW_CHANNEL": true
    });
    channel.overwritePermissions(b, {
        "VIEW_CHANNEL": true
    });
    channel.overwritePermissions(bot, {
        "VIEW_CHANNEL": true
    });
    channel.overwritePermissions(message.author.id, {
        "VIEW_CHANNEL": true
    });
    channel.send({
      embed: {
        color: config.embedColor,
        title: "Hello " +name + ".",
        description: config.newTicket
      }
    });
  }).catch(err => {
    message.channel.send({
      embed: {
        color: config.embedColor,
        title: "Error",
        description: `I\'m sorry, there was an error during ticket creation! Please contact staff`
      }
    });
    console.log(err);
  })


}

