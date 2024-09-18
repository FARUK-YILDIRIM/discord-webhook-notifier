const DiscordService = require("../services/DiscordService");
const { Message } = require("../models/Message");

class NotificationController {
  constructor(webhookUrl) {
    this.discordService = new DiscordService(webhookUrl);
  }

  async notify(message) {
    if (!(message instanceof Message)) {
      throw new Error(
        "Invalid message object. Please provide a Message instance."
      );
    }

    await this.discordService.sendMessage(message.build());
  }
}

module.exports = NotificationController;
