const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
//const { REST } = require('@discordjs/rest');
//const { Routes } = require('discord-api-types/v9');

client.once('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on("messageCreate", (msg)=>{
    let msgchn = msg.channelId;
    let channel = msg.channel;
    let emoj = client.emojis.cache.find(emoji => emoji.name === "Nyabuckssmol");
    console.log(msg.content);
    if(msg.content == "ping"){
        console.log("pong");
        channel.send(`pong! ${emoj.toString()}`);
    }
});

  


client.login("Njk3OTA5MDA4OTc5NDYwMTI3.Xo-Iag.yiaNsFIpQfVZM4HV_HK6PcEMSvk");