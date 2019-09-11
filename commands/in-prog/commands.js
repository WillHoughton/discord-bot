var config = require("../utils/config.json")
var commands = require("../utils/commands.json")

exports.run = (client, message, args) => {
    return message.chanel.send({
        embed: {

        }
    })
}

exports.run = (client, message, args) => {
    var commandSent = message.content
    var user = message.author

}



/* Working!
Make json file with command + response, will most likely have to give it a tracking id

*/