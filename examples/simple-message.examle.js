const { DiscordNotifier, DiscordMessage } = require("../src/index.js");
const { webhookUrl } = require("../src/config.js");

const notifier = new DiscordNotifier(webhookUrl);

const message = new DiscordMessage()
  .setContent("Hello, this is a simple example!")
  .setUsername("Simple Example");

(async () => {
  try {
    await notifier.notify(message);
    console.log("Notification sent successfully!");
  } catch (error) {
    console.error("Failed to send notification:", error.message);
  }
})();
