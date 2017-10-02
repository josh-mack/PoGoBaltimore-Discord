const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  //Ensures bot doesn't reply to itself or non-commands
  if (message.author.bot) return;
  if (!message.content.startsWith(.)) return;

  //Simplifies command making
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(config.prefix.length);

  //Simplifies arguments in a command
  let args = message.content.split(" ").slice(1);

  if (command === "changeNick") {
    client.user.setUsername(args).then(user => message.reply(`My new nickname is ${user.username}!`)).catch(console.error);
  }
}
});

client.login('token');
