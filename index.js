const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "!G";

Client.on("ready", () => {
    console.log("bot opérationel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

        //!Gping
    if (message.content === prefix + "ping" ){
        message.reply("pong !");
    }
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Liste des commandes")
            .setAuthor("Le Whoop", "https://i.redd.it/281fjxdrbfa21.png")
            .setDescription("Voici la liste des commandes")
            .setThumbnail("https://i.redd.it/281fjxdrbfa21.png")
            .addField("_!Gping:_", "renvoi pong");
            

        message.channel.send({ embeds: [embed]});
    }
   
});
















Client.login("ODgxNjQxMTAzNTI5NDkyNDgw.YSvyQw.cRHxCIJgnlA2LfU6OIvMajU3dRI");