/**
* @author Zeeshan Altaf
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "zeeshan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Zeeshan Altaf",
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  commandCategory: "Random-IMG",
  usages: "zeeshan",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/UC4HyN7.jpeg",
"https://i.imgur.com/WY5Ofut.jpeg",
"https://i.imgur.com/AT4zocL.jpeg",
"https://i.imgur.com/62wHVlf.jpeg",
"https://i.imgur.com/tQQKF2Z.jpeg",
"https://i.imgur.com/PuOLqZy.jpeg",
"https://i.imgur.com/9ePWKm3.jpeg",  
"https://i.imgur.com/ABhsKdj.jpeg"
     ];
     var callback = () => api.sendMessage({body:`👽 Hey Iam Zeeshan Altaf 🙈, How May I Help You 😘 You Can See My More Pics Then Type Figure like (1...9) 😊`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };