//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://King-MdIsbot:King-MdIsbot@cluster0.hikjrg2.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.website = process.env.GURL || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.devs = "233596780685";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "233596780685";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NuNTFLcjJNZUJYS2Q5RG8rc1FoejlDc0ZJM1FxbVRiQ3k1bjd4UHQxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXhGQjNCSEV4RWlkQmxhZjh6ejJKTUczNWE5TmNpSzZZRURwc3JuZXhVOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ1ZpL2l3RHlTYWdndlY4WkhpYytFNVQ5SlllNXplcmVTcFk2N0VuOUdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3aytLY1duTmJReURkNFVYa3R6VXlmWWRLQmMwV0RSSmhNK3BXcEF1WXhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1Cb0E1RzczUENZWFZqQVJ1aExoQnVTVzAxUkw2QTJEUjhEZWt3ZFZJSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJUmRkWklTK2RFaUp3V3psUmo3KzlTb0tGZEpZeEp1d2xjc2JJdVRnM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUU3eXBPMlZ1VG4yd0RVZk4rUGJ4MjZtNXlQZGtKTFhZRHIwalNsSnhWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3N0UGxjUW8vOGNibXpXQnVPSzZUWHYwN0U4SytyTmtNREpMVmpIMU1HRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpUcGJaMlR6WFdrR3VmaXpsT2NpaXAyelh5Nld0QU0zSGE3eWdxR3NOK0lTS2Fjc2lxb1pib3Zodk80ZG8xdHVCU0hQTjBlSVpjRXBuTnV3dHpVc2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6IkcweTQva09Pb01oYUNmdEpUTHZIZmtWbW9FeTlFdWxlcnNkMi9rakF1eGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InV6Q2ZRckMzVHNhOGh4cWwzTW1wd1EiLCJwaG9uZUlkIjoiMGU1NzZlMTItNDRiZC00NDVjLWFiYTItYzg5OWZiMjAxMTc5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZpdDcwTzg3VDJ1YUR2a1JHQ0FFRGNOMDV4ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTdGpRNWxDdTMxNUpQZk1DQ0Y3UWlQNjM0a2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRENHTTZSSEIiLCJtZSI6eyJpZCI6IjIzMzU5Njc4MDY4NTo3MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPZHMgVGVjaG5vbG9naWVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMalg3TUlCRU8zd3liUUdHRVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaM3UxcnZYMFVQV1lDWGF5eGw0a1VidGNpRHBsblVTWHJiZ3dKUGNDTWlRPSIsImFjY291bnRTaWduYXR1cmUiOiJ6WUF1dEhraENFV2p1c1BmdThlcjFrQ3VlT2VIRVRhVC8wYmZwK1dOUGZyK2FsSTBnYkJTb0dpSnkyR2lnc1dmK1BTNXNYUFBEd2VQL3NRNWt5Z3dBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUU1COHRWYnQ1ODhaU0lOaUh1d1JQOHRaTU8zUGpsb0JHUy9yR3RZKzlCRlVnK3hxTTdFMFgvQUFrZ0IvQ3l4RUtJQ1FGMGFVRkl3dDl2TXpPeDQ4aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1OTY3ODA2ODU6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2Q3dGE3MTlGRDFtQWwyc3NaZUpGRzdYSWc2WloxRWw2MjRNQ1QzQWpJayJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDg3NTEzMX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ODS TECHNOLOGIES™`",
  author: process.env.PACK_AUTHER || "ODS TECHNOLOGIES",
  packname: process.env.PACK_NAME || "ODS TECHNOLOGIES",
  botname: process.env.BOT_NAME || "ODS TECHNOLOGIES",
  ownername: process.env.OWNER_NAME || "ODS TECHNOLOGIES",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "ODS TECHNOLOGIES").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
