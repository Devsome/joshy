const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Nah FAM';

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
        if(!args[0]){
            message.delete();
            message.author.send("No arguments given");
            return;
        }
        if(args[0] > 100){
            message.delete();
            message.author.send("Maxiumum is 100 messages at once.");
            return;
        }

        message.delete();
        message.channel.bulkDelete(args[0]);
        message.author.send("Done! I deleted" + args[0] + " messages.");
        return;
        }
    }
})