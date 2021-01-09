const Discord = require('discord.js');
const client = new Discord.Client();

require("dotenv").config()

const RandomChamp = require('./modules/RandomChampApi')

client.on('ready', () => {
  client.user.setActivity('@'+client.user.username+' '+'Random');

  console.log(`${client.user.tag} up and working!`);
});

client.on('message', message => {
  if (message.channel instanceof Discord.DMChannel) return;
    if(message.author === client.user) return;

    if(message.mentions.has(client.user)){
      const mantionLength = client.user.id.length +4
      const args = message.content.slice(mantionLength).trim().split(/ +/g);
      const commend = args.shift().toLowerCase()

      if( commend === 'ping'){
        message.reply("pong :ping_pong:")
      }

      if( commend === 'random'){
        RandomChamp.run(message)
      }

      
    }

});

client.login(process.env.TOKEN);