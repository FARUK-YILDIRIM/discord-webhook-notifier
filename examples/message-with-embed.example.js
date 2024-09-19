const {
  DiscordNotifier,
  DiscordMessage,
  DiscordEmbed,
} = require("../src/index.js");
const { webhookUrl } = require("../src/config.js");

const notifier = new DiscordNotifier(webhookUrl);

const embed = new DiscordEmbed()
  .setDescription("This is an embed description.")
  .setColor(7506394);

const message = new DiscordMessage()
  .setContent("Hello, this is a message with an embed!")
  .setUsername("Message with Embed")
  .setAvatarUrl(
    "https://tlgrm.eu/_/stickers/ad5/7d8/ad57d825-cad7-3f19-baf3-c3e25440396a/3.webp"
  )
  .addEmbed(embed);

(async () => {
  try {
    await notifier.notify(message);
    console.log("Notification sent successfully!");
  } catch (error) {
    console.error("Failed to send notification:", error.message);
  }
})();
