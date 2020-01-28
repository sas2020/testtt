const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("671354854265847868")
setInterval(function() {
channel.send(`انا بحب الحلو`);
}, 30)
})

client.login(process.env.BOT_TOKEN);