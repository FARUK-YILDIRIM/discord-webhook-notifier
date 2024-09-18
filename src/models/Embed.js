class Embed {
  constructor() {
    this.title = "";
    this.description = null;
    this.url = null;
    this.color = null;
    this.timestamp = new Date();
    this.footer = null;
    this.thumbnail = null;
    this.image = null;
    this.author = null;
    this.fields = [];
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setUrl(url) {
    this.url = url;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setTimestamp(timestamp) {
    this.timestamp = timestamp;
    return this;
  }

  setFooter(text, iconUrl) {
    this.footer = { text, icon_url: iconUrl };
    return this;
  }

  setThumbnail(url) {
    this.thumbnail = { url };
    return this;
  }

  setImage(url) {
    this.image = { url };
    return this;
  }

  setAuthor(name, url, iconUrl) {
    this.author = { name, url, icon_url: iconUrl };
    return this;
  }

  addField(name, value, inline = false) {
    this.fields.push({ name, value, inline });
    return this;
  }

  build() {
    return {
      title: this.title,
      description: this.description,
      url: this.url,
      color: this.color,
      timestamp: this.timestamp,
      footer: this.footer,
      thumbnail: this.thumbnail,
      image: this.image,
      author: this.author,
      fields: this.fields,
    };
  }
}

module.exports = { Embed };
