const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "j!";

const token = "token";

client.on('ready', () => {
    console.log('Josh is now online! Type j! for help!');
    client.user.setActivity(`${client.users.size} people | ${prefix}help`, {type: "WATCHING"});
})

client.on('message', msg => {
    if(msg.content ===  prefix + "hi"){
        msg.reply('Hi Im Josh!');
    }

    if(msg.content ===  prefix + "help"){
        msg.channel.send("Help is comming soon");
    }

    if(msg.content.startsWith(prefix + "prune")){
        let args = msg.content.split(" ").slice(1);
        let author = msg.member;
        if(msg.member.hasPermission("MANAGE_MESSAGES")){
            if(!args[0]) {
                msg.delete();
                msg.channel.send("No arguments given");
                return;
            }
            if(args[0] > 100) {
                msg.delete();
                msg.channel.send("I can only delete up to 100 messages at a time!");
                return;
            }

            const arga = parseInt(args.join(" "));
            msg.channel.fetchMessages({
                limit: arga
            }).then(
                messages => msg.channel.bulkDelete(messages)
            );
        }
    }
})

client.login(token);
