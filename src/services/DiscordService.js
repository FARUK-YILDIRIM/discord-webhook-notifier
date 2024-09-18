const HttpClient = require("../utils/HttpClient");

class DiscordService {
  constructor(webhookUrl) {
    if (!webhookUrl) {
      throw new Error("Webhook URL is required");
    }
    this.webhookUrl = webhookUrl;
    this.httpClient = new HttpClient();
  }

  async sendMessage(message) {
    const response = await this.httpClient.post(this.webhookUrl, message);

    if (response.status !== 204) {
      throw new Error(`Failed to send message: ${response.status}`);
    }
  }
}

module.exports = DiscordService;
