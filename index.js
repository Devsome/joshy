const Discord = require('discord.js');
const client = new Discord.Client();



const token = "insert-token-here";

client.on('ready', () =>{
    console.log('Josh is now online! Type j! for help!');
})

client.login(token);

const prefix = "!";

client.on('message', msg=>{
    if(msg.content ===  "!hi"){
        msg.reply('Hi Im Josh!');
    }

    if(msg.content.startsWith(prefix +"prune")){
    let args = msg.content.split(" ").slice(1);
    let author = msg.member;
    let role = msg.guild.role.find('name', "Doggo")
    if(author.role.has(role.id)){
        if(!args){
            msg.delete();
            msg.channel.send("No arguments given");
            return;
        }
        if(args[0] > 100){
            msg.delete();
            msg.channel.send("Maxiumum is 100 messages at once.");
            return;
        }

        msg.delete();
        msg.channel.bulkDelete(args);
        msg.channel.send("Done! I deleted" + args[0] + " messages.");
        return;
        }
    }
})
