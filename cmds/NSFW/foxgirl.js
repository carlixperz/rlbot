const Discord = require("discord.js");
const akaneko = require('akaneko');

const { Command } = require('../../commands.js')
module.exports = class FoxgirlCommand extends Command {
  constructor(){
    super({
      name: 'lewdfoxgirl',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  
  execute(msg){
     let emisor = msg.author;
    let nonnsfw = ["Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "Esto no es un canal nsfw... :flushed:", "¿Puedes parar, pajín?"];
    let rans = nonnsfw[Math.floor(Math.random() * nonnsfw.length)];
        if(!msg.channel.nsfw) return msg.channel.send(rans);
    akaneko.nsfw.foxgirl().then((imageURL) => {
  const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(imageURL)
      .setDescription(`**${emisor}**, aquí tienes tu mujer zorro, o gato, o furry`);
    msg.channel.send(embed);
}) 
  }
}