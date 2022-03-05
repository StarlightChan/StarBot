const discord = require('discord.js');

exports.run = (client, message, args) => {
    let n = Math.floor(Math.random() * 2);
    let rmsg;
    if (n == 0){
        rmsg = "Heads!";
    }
    else if(n == 1){
        rmsg = "Tails!";
    }
    message.channel.send("Flipping...")
        .then(msg => setTimeout(function(){
            msg.edit(rmsg);
          }, 2000));
}
exports.name = "coin_flip";