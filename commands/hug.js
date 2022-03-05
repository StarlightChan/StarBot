const discord = require('discord.js');



exports.run = (client, message, args) => {
    function getUserFromMention(mention) {
        const matches = mention.match(/^<@!?(\d+)>$/);
        if (!matches) return;
        const id = matches[1];
        return client.users.cache.get(id);
    }
    if(!args[0]){
        message.reply("You need to mention someone to hug!!").then(message.delete(2000));
    }
    const mentionedUser = getUserFromMention(args[0]);

    if(!mentionedUser){
        message.reply("You need to mention someone to hug!!").then(message.delete(2000));
    }
    if(mentionedUser === message.author){
        message.channel.send(`Do you need a hug ${message.author.username}...`);
    }
    else {
        const hugEmbed = new discord.MessageEmbed()
            .setTitle(`${message.author.username} hugged ${mentionedUser.username}!`)
            .setDescription('So cute...')

            
        message.channel.send({embeds:[hugEmbed]});

    }

    
    
}
exports.name = "hug";