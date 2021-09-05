  /**
 * @name Discord-CRS
 * @author DinoNuggyChan
 * @version 0.0.1
 * @website https://www.nuggy.space/
 * @source https://github.com/DinoNuggyChan/Discord-CRS
 */

 var rpc = require("discord-rpc")
 const client = new rpc.Client({ transport: 'ipc' })
 
 
 
 client.on('ready', () => {
 
 client.request('SET_ACTIVITY', {
 
 pid: process.pid,
 activity : {
 details : "Site de streaming", //text under activity name example: https://i.imgur.com/3cpsKjm.png
 state : "Sans pub et gratuit",
 assets : {
 large_image : "ezgif-3-daddb868657d", //make sure its all in lower case
 large_text : "https://dknime.com/" // text when you hover over image
 }},
 })
 })
client.login({ clientId : "884011476627636294" }).catch(console.error); 
