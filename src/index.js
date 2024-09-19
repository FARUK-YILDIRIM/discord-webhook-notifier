const NotificationController = require("./controllers/NotificationController");
const { Message, Embed } = require("./models/Message");

module.exports = {
  DiscordNotifier: NotificationController,
  DiscordMessage: Message,
  DiscordEmbed: Embed,
};
