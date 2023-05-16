/**
* @author Zeeshan Altaf
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
	name: "autoreact",
	version: "1.1.1",
	hasPermission: 0,
	credits: "Zeeshan Altaf",
	description: "Dont Change This Creadit Otherwise Your Bot is Lol",
	commandCategory: "No Prefix",
	cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("hahaha") || react.includes("HAHA") || react.includes("Hahah") || react.includes("CHUTYIA") || react.includes("Chutyia") || react.includes("chutyia") || react.includes("JHONY") || react.includes("JHONY") || react.includes("Jhony") || react.includes("INDIA") || react.includes("india") || react.includes("India") || react.includes("Lol") || react.includes("LOL") || react.includes("Lol") || react.includes("Kuty") || react.includes("KUTY") || react.includes("kuty") || react.includes("Harami") || react.includes("Harami") || react.includes("HARAMI") || react.includes("chawal") || react.includes("Chawal") || react.includes("CHAWAL") || react.includes("NIKAL") || react.includes("nikal") || react.includes("Nikal") || react.includes("😆") || react.includes("😂") || react.includes("👙") || react.includes("🙂") || react.includes("😹") || react.includes("🤣") || react.includes("🥸") || react.includes("💪") || react.includes("🙉") || react.includes("🤨") || react.includes("🧐") || react.includes("🤠") || react.includes("🤓") || react.includes("🤡") || react.includes("💩") || react.includes("🥱") || react.includes("🤫") || react.includes("🤪") || react.includes("Porn") || react.includes("🥴") || react.includes("🤤") || react.includes("🤫") || react.includes("🤰") || react.includes("🐒") || react.includes("🍆") || react.includes("👅") || react.includes("LANAT") || react.includes("lanat") || react.includes("Lanat") || react.includes("ANUP") || react.includes("Tom") || react.includes("🖕") || react.includes("🤢") || react.includes("😝") || react.includes("Koja") || react.includes("Xxx") || react.includes("BHSDY") || react.includes("bhsdy") || react.includes("bhsdy") || react.includes("Taty") || react.includes("TATY") || react.includes("Taty") || react.includes("HACKER") || react.includes("FARAR") || react.includes("frar") || react.includes("Frar") || react.includes("LODY") || react.includes("Lody") || react.includes("lody") || react.includes("Heheh") || react.includes("HEHEH") || react.includes ("Hehehe") || react.includes("HACKER") || react.includes("Hacker") || react.includes("hacker") || react.includes("sex") || react.includes("lmao") || react.includes("Lmao") || react.includes("LMAO") || react.includes("SEX") || react.includes("Sex") || react.includes("XD") || react.includes("HD") || react.includes("Pussy") || react.includes("pussy") || react.includes("PUSSY") || react.includes("Baji") || react.includes("baji") || react.includes("BAJI") || react.includes("TERY") || react.includes("tery") || react.includes("Tery") || react.includes("TERY") || react.includes("FUCK")) {
    var msg = {
				body: " Bary Harami Ho Beta🙉🤣"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
          };
    if(react.includes("JAN") || react.includes("jan") || react.includes("JANU") || react.includes("JANI") || react.includes("Jani") || react.includes("jani") || react.includes("😊") || react.includes("iloveyou") || react.includes("ILOVEU") || react.includes("Iloveu") || react.includes("love") || react.includes("LOVE") || react.includes("lOVE") || react.includes("Uff") || react.includes("uff") || react.includes("UFFF") || react.includes("Pragnent") || react.includes("PRAGNENT") || react.includes("pragnent") || react.includes("BABY") || react.includes("baby") || react.includes("baby") || react.includes("BABE") || react.includes("Babe") || react.includes("babe") || react.includes("SHONA") || react.includes("Shona") || react.includes("shona") || react.includes("babu") || react.includes("BABU") || react.includes("babu") || react.includes("😙") || react.includes("😘") || react.includes("😚") || react.includes("Janu") || react.includes("JANU") || react.includes("Janu") || react.includes("Sweet") || react.includes("sweet") || react.includes("SWEET") || react.includes("always") || react.includes("Always") || react.includes("ALWAYS") || react.includes("Awww") || react.includes("AWW") || react.includes("CHUMI") || react.includes("chumi") || react.includes("Chumi") || react.includes("Puppy") || react.includes("puppy") || react.includes("PUPPY") || react.includes("kiss") || react.includes("KISS") || react.includes("kiss") || react.includes("🥰") || react.includes("😍") || react.includes("🤩") || react.includes("😉") || react.includes("❤️") || react.includes("🤭") || react.includes("😍") || react.includes("☺️") || react.includes("🤍") || react.includes("🖤") || react.includes("💝") || react.includes("💞") || react.includes("💕") || react.includes("💋") || react.includes("🙈") || react.includes("🌷") || react.includes("🌹") || react.includes("🌍") || react.includes("🍫") || react.includes("🎈") || react.includes("🎁") || react.includes("🍕") || react.includes("🍛") || react.includes("Mery Jan") || react.includes("MERY JAN") || react.includes("mery jan") || react.includes("My") || react.includes("my") || react.includes("MY") || react.includes("wife") || react.includes("Wife") || react.includes("WIFE") || react.includes("HUBBY") || react.includes("hubby") || react.includes("Hubby") || react.includes("Cute") || react.includes("CUTE") || react.includes("cute") || react.includes("WAO") || react.includes("Wao") || react.includes("wao") || react.includes("boobs") || react.includes("BOOBS") || react.includes("finger") || react.includes("Finger") || react.includes("fifinger") || react.includes("BOOBS") || react.includes("chut") || react.includes("handsome") || react.includes("Handsome") || react.includes("HANDSOME") || react.includes("beautiful") || react.includes("Beautiful") || react.includes("BEAUTIFUL") || react.includes("ummaah") || react.includes("UMAAAH") || react.includes("Ummmmah") || react.includes("UMMMMCH") || react.includes("UMMMCH") || react.includes("ummmmch")) {
      var lab = {
				body: " Rha Nahi Jata 🤭 Trap he Aesy Hai Nah😁🫀"
			}
			api.sendMessage(lab, threadID, messageID);
    api.setMessageReaction("🫀", event.messageID, (err) => {}, true)
          };
    if(react.includes("BROKEN") || react.includes("broken") || react.includes("Broken") || react.includes("sad") || react.includes("SAD") || react.includes("Sad") || react.includes("Pain") || react.includes("pain") || react.includes("PAIN") || react.includes("Nafrat") || react.includes("nafrat") || react.includes("NAFRAT") || react.includes("Hateu") || react.includes("I hate u") || react.includes("I HATE U") || react.includes("Udas") || react.includes("udas") || react.includes("UDAS") || react.includes("juth") || react.includes(" 😥") || react.includes("😰") || react.includes("😨") || react.includes("😞") || react.includes("☹️") || react.includes("😟") || react.includes("😢") || react.includes("Frod") || react.includes("💔") || react.includes("Go") || react.includes("Jao") || react.includes("Tum") || react.includes("TUM") || react.includes("tum") || react.includes("🥺") || react.includes("😭")) {
      var sad = {
				body:"                   مجـھے ٹـوٹـے ہـوئـے لـوگ پسنـد ہیـں💔                     🥺سنـا ھـے اُن میـں غـرور نہیـں ھـوتـا"
			}
			api.sendMessage(sad, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
          };
    if(react.includes("Salam Bro") || react.includes("Salam") || react.includes("Asslam o Alikum") || react.includes("aslamoalaikum") || react.includes("Asslamualaikum") || react.includes("Aslam o alaikum") || react.includes("Asslam o alaikum") || react.includes("SLAM")) {
      var sad = {
				body: "Walikum Salam ❤️"
			}
			api.sendMessage(sad, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
          };
    if(react.includes("TPKKK") || react.includes("RANDI") || react.includes("GASHTYE") || react.includes("BHEAN") || react.includes("BAJI") || 
react.includes("MAA") || 
react.includes("LUND") || 
react.includes("👿")) {
      var sad = {
				body: "Oye Chutyia Abuse Na kr 👿"
			}
			api.sendMessage(sad, threadID, messageID);
    api.setMessageReaction("👿", event.messageID, (err) => {}, true)
          };
    if(react.includes("Very") || react.includes("Hbd") || 
react.includes("Happy Birdhday") || react.includes("Gud Nyt") || react.includes("Gud morning") || react.includes("Afternoon") || react.includes("Gudnight") || react.includes("n8") || react.includes("gudnyt") || react.includes("Gud mrng") || react.includes("Morning") || react.includes("🥳") || react.includes("😴")) {
      var heart = {
				body: "So Jayo Pyaro Bacho😂💙"
			}
			api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("💙", event.messageID, (err) => {}, true)
                }
        }
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
