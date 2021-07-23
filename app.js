const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODY4MDg3MzMzNDA3MzE4MDI2.YPqjVA.9Cq5IXSDt7uzd40RA8yQsUSbDA4');