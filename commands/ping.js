const discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new discord.MessageEmbed()
        .setTitle("Title") 
    message.channel.send("pong!").catch(console.error);
    message.reply({embeds:[embed]})
    
}
exports.name = "ping";