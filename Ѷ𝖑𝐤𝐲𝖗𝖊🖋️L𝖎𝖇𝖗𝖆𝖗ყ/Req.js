`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
require("./𝕷𝖆ყO𝖚𝖙");
let { Caught } = require("../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
let { Image_Button } = require("../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
`|⬡═════════════════════════════════════════════════════════════════════|▷ 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ◁|═════════════════════════════════════════════════════════════════════⬡|`;
exports.Req = async (𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊) => {
if (!Ѷ𝖑𝐤𝐲𝖗𝖊.fromMe && Ѷ𝖑𝐤𝐲𝖗𝖊.isCommand) {
return await Ѷ𝖑𝐤𝐲𝖗𝖊.reply("*❌𝕰𝖗𝖗𝖔𝖗:* No Commands Can Work In This Group.Just Send Your Group Link with 20+ members.");
}
let ɢʀᴏᴜᴘ_ʟɪɴᴋʀᴇɢᴇx = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let ɪꜱɢʀᴏᴜᴘ_ʟɪɴᴋ = ɢʀᴏᴜᴘ_ʟɪɴᴋʀᴇɢᴇx.exec(Ѷ𝖑𝐤𝐲𝖗𝖊.body);
if (ɪꜱɢʀᴏᴜᴘ_ʟɪɴᴋ) {
let 𝕯𝖎𝖘𝖕𝖑𝖆𝖞;
let ʟɪɴᴋʀᴇɢᴇx = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let [_, ᴍᴇᴛᴀᴄᴏᴅᴇ] = Ѷ𝖑𝐤𝐲𝖗𝖊.body.match(ʟɪɴᴋʀᴇɢᴇx) || [];
let ɢʀᴏᴜᴘ_ʀᴇꜱᴘᴏɴꜱᴇ = await 𝖍𝖆𝖜ӄ.groupAcceptInvite(ᴍᴇᴛᴀᴄᴏᴅᴇ).catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗));
let ɢʀᴏᴜᴘ_ᴍᴇᴛᴀᴅᴀᴛᴀ = await 𝖍𝖆𝖜ӄ.groupMetadata(ɢʀᴏᴜᴘ_ʀᴇꜱᴘᴏɴꜱᴇ.gid).catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗));
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await 𝖍𝖆𝖜ӄ.profilePictureUrl(ɢʀᴏᴜᴘ_ʀᴇꜱᴘᴏɴꜱᴇ.gid, "image");
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊_Matte.png";
}
`|⬡═════════════════════════════════════════════════════════════════════|▷ 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ◁|═════════════════════════════════════════════════════════════════════⬡|`;
if (ɢʀᴏᴜᴘ_ᴍᴇᴛᴀᴅᴀᴛᴀ.participants.length < 20) {
await 𝖍𝖆𝖜ӄ.groupLeave(ɢʀᴏᴜᴘ_ʀᴇꜱᴘᴏɴꜱᴇ.gid);
return await Image_Button(
𝖍𝖆𝖜ӄ,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞,
`*❌𝕰𝖗𝖗𝖔𝖗:* Your Group has ${ɢʀᴏᴜᴘ_ᴍᴇᴛᴀᴅᴀᴛᴀ.participants.length}/20 members!

*🔓ꜱᴛᴀᴛᴜꜱ:* Left Group!
*📜ɴᴀᴍᴇ:* ${ɢʀᴏᴜᴘ_ᴍᴇᴛᴀᴅᴀᴛᴀ.subject}
*💞ᴍᴇᴍʙᴇʀꜱ:* ${ɢʀᴏᴜᴘ_ᴍᴇᴛᴀᴅᴀᴛᴀ.participants.length}`
);
}
`|⬡═════════════════════════════════════════════════════════════════════|▷ 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ◁|═════════════════════════════════════════════════════════════════════⬡|`;
return await Image_Button(
𝖍𝖆𝖜ӄ,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞,
`*🔓ꜱᴛᴀᴛᴜꜱ:* Joined Group!

*📜ɴᴀᴍᴇ:* ${ɢʀᴏᴜᴘ_ᴍᴇᴛᴀᴅᴀᴛᴀ.subject}
*💞ᴍᴇᴍʙᴇʀꜱ:* ${ɢʀᴏᴜᴘ_ᴍᴇᴛᴀᴅᴀᴛᴀ.participants.length}
*📝ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*
${ɢʀᴏᴜᴘ_ᴍᴇᴛᴀᴅᴀᴛᴀ.desc}`
);
}
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
