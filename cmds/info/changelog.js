const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class ChangelogCommand extends Command {
 constructor(){
 super({
 name: 'changelog',
 aliases: 'updatechanges',
 priority: 1,
 permLvl: 0
 })
 }
execute(msg){
 const embed = new Discord.MessageEmbed()
 .setDescription('**BETA-2 v3.0 - Modular Update**')
 .setFooter('Changelog for Beta-2 v3.0')
 .setColor("#0088ff")
 .addFields(
 {
 name: "¡HAN VUELTO! - Comandos de interacción (I)",
 value: "Algunos comandos de interacción han vuelto para quedarse. Gracias a las npms de marsnpm y ainasepics, hemos conseguido añadir comandos de interacción funcionales.",
 inline: true
 },
{
 name: "Futuras novedades – Comandos personalizables",
 value: "Mediante el uso de bases de datos, podremos añadir comandos que funcionen en un servidor en concreto y que se puedan personalizar.",
 inline: true
 },
{
 name: "Futuras novedades – Género",
 value: "Mediante el uso de bases de datos, podremos también añadir géneros para usuarios que quieran tenerlo. ¿Quién o ha querido ser una lancha motora?",
 inline: true
 },
{
 name: "Comandos secretos: Brillando por su ausencia",
 value: "Los comandos secretos no han llegado todavía.",
 inline: true
 },
 );
msg.channel.send(embed);
 }
}