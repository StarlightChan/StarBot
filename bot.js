const fs = require('fs');

const Discord = require('discord.js')
const { Client, Intents} = Discord;

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
] });
const config = require('./config.json');
const emojiList = require('./emoji.json');

client.commands = new Discord.Collection();
client.config = config;
client.emojiList = emojiList;

client.once('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.guilds.cache.forEach(guild => {
    console.log(`Serving: ${guild.name} | ${guild.id}`);
  })
});

const files = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of files) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);
  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command);
}

client.on("messageCreate", (message) => {
  //fs.appendFile('log.txt', `Sent By ${message.author.username}: ${message.content} | Sent in: ${message.guild},  uid: ${message.author.id} \n`, (err) => {if (err) return console.log(err);});
})


client.login(config.token);