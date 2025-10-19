const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_03_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAyLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWOVU4WGF5VHdrK0M4YU84SWxlK2pBemFRUW1qMjRsb3Zmd3NGYVZoeFI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDVTJyaEZKNVNaS09rQmJTeVZ0Wk5BXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwNWJmZDI0LWVjNDMtNDJlNC05YzNjLWFmNGU4NzA0Y2UzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICA3MCxcbiAgICAgIDQ3LFxuICAgICAgMTE0LFxuICAgICAgMjksXG4gICAgICAxODcsXG4gICAgICAxNTAsXG4gICAgICAxLFxuICAgICAgMjM5LFxuICAgICAgMTEyLFxuICAgICAgMTIzLFxuICAgICAgODksXG4gICAgICAxMjcsXG4gICAgICAyNDUsXG4gICAgICAzNixcbiAgICAgIDUyLFxuICAgICAgNjYsXG4gICAgICAyNDksXG4gICAgICA2OSxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAyNDYsXG4gICAgICAxNzQsXG4gICAgICAyOSxcbiAgICAgIDE5OCxcbiAgICAgIDEsXG4gICAgICAxMzMsXG4gICAgICAzMCxcbiAgICAgIDM1LFxuICAgICAgMTEyLFxuICAgICAgMTk5LFxuICAgICAgODAsXG4gICAgICAxNDUsXG4gICAgICA1MSxcbiAgICAgIDI0MSxcbiAgICAgIDE2LFxuICAgICAgMjksXG4gICAgICAzMCxcbiAgICAgIDE0NyxcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p1YjRCSVEyWXJUeHdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ051Z3czZm5pMHpVcDc3QmRsT3BvczNubW1BeXdSTXMxd3BKNzVQNTJWQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2a1M5QkZWSmEreFVadzloTElFZW4rdGc3RHZpOUxVWjNkSFBXc3NFWFRzblFVdW1LaVFCeUpSb2JDSUVPNnVZNUtRcGJ6Y3pVaStyTTRiVk5JR3BCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0RUlWaStTU1VNazdCQVh0UUphdUpoNlQ3eVovbTZoWE9pazAzTUFRU002SlorVm1RZlB3SmJya3BpZHJtTk9LY3hDWlZKNEJkb1RwdkFZYVpwWlBCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTU5MTkwMjk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZpY3RvclwiLFxuICAgIFwibGlkXCI6IFwiMjEzMzQwMzAzMzkyNzc2OjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE1OTE5MDI5OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NjA4NzE3NzVcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

