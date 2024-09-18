const { Embed } = require("./Embed");

class Message {
  constructor() {
    this.content = "";
    this.username = null;
    this.avatarUrl = null;
    this.embeds = [];
  }

  setContent(content) {
    this.content = content;
    return this;
  }

  setUsername(username) {
    this.username = username;
    return this;
  }

  setAvatarUrl(avatarUrl) {
    this.avatarUrl = avatarUrl;
    return this;
  }

  addEmbed(embed) {
    this.embeds.push(embed);
    return this;
  }

  build() {
    return {
      content: this.content,
      username: this.username,
      avatar_url: this.avatarUrl,
      embeds: this.embeds,
    };
  }
}

module.exports = { Message, Embed };
