module.exports.config = {
 name: "adminmention",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU ",
 description: "Bot will reply when someone tags any of the admins",
 commandCategory: "Other",
 usages: "@",
 cooldowns: 1
};

module.exports.handleEvent = function({ api, event }) {
 const adminIDs = ["61590366007318"].map(String);
 
 if (adminIDs.includes(String(event.senderID))) return;

 const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
 const isMentioningBoss = adminIDs.some(adminID => mentionedIDs.includes(adminID));

 if (isMentioningBoss) {
 const replies = [
 "ডাকাডাকি করিস না আরিয়ান বস এখন ব্যস্ত আছে 😒😌",
 "আরিয়ান বস এক আবালে আপনাকে মেনশন দিছে 😑😃",
 "যেভাবে মেনশন দিতাচত মনে হয় তোর নানীরে , আমার বস আরিয়ান কে দিয়া দিবি 🫥😒",
 "আরিয়ান বস এক পাগল ছাগল , আপনাকে ডাকতেছে 🐸🫵",
 "আরিয়ান বস এক হালায় আপনার নাম ধরছে , আপনি শুধু একবার আদেশ করুন, আজকে হালার নানিরে চমলক্ক করে দিমু 😑🥴",
 "মেনশন না দিয়া একটা girlfriend খুজে দে 🙃😮💨",
 "মাইয়া হলে বসের ইনবক্স এ যাও😗😁",
 "আরিয়ান বস এখন ব্যস্ত আছে , কিছু বলতে হলে ইনবক্স এ গিয়া বল",
 "আরিয়ান বস এখন আমার সাথে মিটিং এ আছে , মেনশন দিস না 🙂",
 "আরিয়ান বস এখন ব্যস্ত আছে , কি বলবি আমাকে বল",
 "মেনশন না দিয়া বস বল বস 🥵💋",
 "কিরে তোর এতো সাহস আমার আরিয়ান বসের নাম ধরিস😾🫵",
 "এতো মেনশন না দিয়া তোর নানীরে আমার বস আরিয়ানকে দিয়া দে😹🐸",
 "এইভাবে মেনশন করতাস, না জানি তুই প্রেমে পড়ছোস কিনা 😼❤️"
 ];
 return api.sendMessage(replies[Math.floor(Math.random() * replies.length)], event.threadID, event.messageID);
 }
};

module.exports.run = async function() {};
