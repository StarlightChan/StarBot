exports.run = (client, message, args) => {
  const commandList = Array.from(client.commands.values());
  for(const command of commandList){
    message.channel.send(command.name);
  }
};
exports.name = "ls_all_ds";