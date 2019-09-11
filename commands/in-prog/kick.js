var config = require("../utils/config.json")

exports.run = (client, message, args) => {

  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  // This will trim the message so there is only a single space between the entire data
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "myName") {
    const name = message.author.username;
    message.delete();
    message.channel.send(`Your name is ${name}`)
  }
}
