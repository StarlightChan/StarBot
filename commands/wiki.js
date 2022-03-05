const discord = require('discord.js');
const wiki = require('wikijs').default;
const fs = require('fs');
exports.run = (client, message, args) => {
    const query = args.join(' ');
    let data = wiki().search(query);
    let page = data.then(data => wiki().page(data.results[0]));
    let pagedata = page.then(page => page.chain().content().image().request());
    pagedata.then(
        info => exportEmbed = new discord.MessageEmbed()
            .setTitle(info.title)
            .addField("Summary",`${info.extract.substring(0,400).split(/\.(?=[^\.]+$)/)[0]}.`,true)
            .setImage(info.image.source)
            
    ).then(exportEmbed => message.channel.send({embeds:[exportEmbed]}));

    pagedata.then(info => console.log(info.image));
}
exports.name = "wiki";