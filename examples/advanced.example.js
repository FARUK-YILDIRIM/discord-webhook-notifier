const {
  DiscordNotifier,
  DiscordMessage,
  DiscordEmbed,
} = require("../src/index.js");
const { webhookUrl } = require("../src/config");

const notifier = new DiscordNotifier(webhookUrl);

(async () => {
  try {
    const embed = new DiscordEmbed()
      .setTitle("Pikachu ⚡")
      .setDescription(
        "Pikachu is one of the most beloved characters in the Pokémon world!"
      )
      .setUrl("https://pokemon.fandom.com/wiki/Pikachu")
      .setColor(16776960)
      .setFooter(
        "Pokémon Footer Text",
        "https://cdn.discordapp.com/embed/avatars/1.png"
      )
      .setThumbnail(
        "https://tlgrm.eu/_/stickers/11d/46f/11d46fe5-3fa2-4c4e-a912-aa8c917b468f/256/15.webp"
      )
      .setImage(
        "https://tlgrm.eu/_/stickers/11d/46f/11d46fe5-3fa2-4c4e-a912-aa8c917b468f/5.webp"
      )
      .setAuthor(
        "Pokémon",
        "https://pokemon.fandom.com",
        "https://tlgrm.eu/_/stickers/11d/46f/11d46fe5-3fa2-4c4e-a912-aa8c917b468f/2.webp"
      )
      .addField("🗡️ Type", "Electric")
      .addField("⚡ Power", "Fast and agile!")
      .addField("🎉 Fun Fact", "Pikachu is the mascot of the Pokémon series!");

    const message = new DiscordMessage()
      .setContent("Meet Pikachu!")
      .setUsername("Pikachu Bot")
      .setAvatarUrl(
        "https://tlgrm.eu/_/stickers/11d/46f/11d46fe5-3fa2-4c4e-a912-aa8c917b468f/7.webp"
      )
      .addEmbed(embed);

    await notifier.notify(message);

    console.log("Notification sent successfully!");
  } catch (error) {
    console.error("Failed to send notification:", error.message);
  }
})();
