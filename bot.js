const fs = require('fs');

const Discord = require('discord.js')
const { Client, Intents} = Discord;

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
] });
const config = require('./config.json');

client.commands = new Discord.Collection();
client.config = config;

client.once('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
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

client.login(config.token);