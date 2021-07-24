const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '貳號機你覺得呢?') {
    msg.reply('我怎麼知道');
    msg.channel.send('!羊你覺得呢?');
  }
});

client.login(process.env.Discord_TOKEN);
