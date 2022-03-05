const discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new discord.MessageEmbed()
        .setTitle("Title") 
    const em = client.emojis.cache.find(emoji => emoji.name==="super_smh");
    message.channel.send(`pong! ${em}`).catch(console.error);
    
    client.emojis.cache
}
exports.name = "ping";