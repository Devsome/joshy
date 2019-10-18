const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'insert-token-here';

bot.on('ready', () =>{
    console.log('Josh is now online! Type j! for help!');
})

bot.login(token);

const prefix = "!";

bot.on('message', msg=>{
    if(msg.content ===  "!hi"){
        msg.reply('Hi Im Josh!');
    }

    if(msg.content.startsWith(prefix +"prune")){
    let args = msg.content.split(" ").slice(1);
    let author = message.member;
    let role = message.guild.role.find('name', "Doggo")
    if(author.role.has(role.id)){
        if(!args){
            message.delete();
            message.channel.send("No arguments given");
            return;
        }
        if(args[0] > 100){
            message.delete();
            message.channel.send("Maxiumum is 100 messages at once.");
            return;
        }

        message.delete();
        message.channel.bulkDelete(args);
        message.channel.send("Done! I deleted" + args[0] + " messages.");
        return;
        }
    }
})
