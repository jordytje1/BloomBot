//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, wwChat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!wwChat.isGroup) {
      await OpenBot.sendMessage(wwChat.chat, {
        react: {
          text: "❌",
          key: wwChat.key,
        },
      });
      return wwChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await OpenBot.sendMessage(wwChat.chat, {
        react: {
          text: "❌",
          key: wwChat.key,
        },
      });
      return wwChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await OpenBot.sendMessage(wwChat.chat, {
        react: {
          text: "❌",
          key: wwChat.key,
        },
      });
      return wwChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _bot not Admin!_`
      );
    }
    if (!/image/.test(OpenBot.mime)) {
      await OpenBot.sendMessage(wwChat.chat, {
        react: {
          text: "❌",
          key: wwChat.key,
        },
      });
      return wwChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} reply/send image_`
      );
    }
    if (/webp/.test(OpenBot.mime)) {
      await OpenBot.sendMessage(wwChat.chat, {
        react: {
          text: "❌",
          key: wwChat.key,
        },
      });
      return wwChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} reply/send image_`
      );
    }

    var media = await OpenBot.downloadAndSaveMediaMessage(OpenBot.quoted);
    await OpenBot
      .updateProfilePicture(wwChat.chat, { url: media })
      .then(
        OpenBot.imagebutton(
          OpenBot,
          wwChat,
          `> *Group icone has been changed: ${
            OpenBot.pushname || OpenBot.Tname
          }*`,
          media
        )
      )
      .catch(async (error) => {
        OpenBot.fs.unlinkSync(media);
        await OpenBot.sendMessage(wwChat.chat, {
          react: {
            text: "❌",
            key: wwChat.key,
          },
        });
        return wwChat.reply(
          `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Could not change group image!_

*🐞Bug* 
> ${error}`
        );
      });
  } catch (error) {
    return OpenBot.handlerror(OpenBot, wwChat);
  }
};
