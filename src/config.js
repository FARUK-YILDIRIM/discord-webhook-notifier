require("dotenv").config();

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

if (!webhookUrl) {
  throw new Error(
    "Webhook URL is required. Please set WEBHOOK_URL in your .env file."
  );
}

module.exports = {
  webhookUrl,
};
