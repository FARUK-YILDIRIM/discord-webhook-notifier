const axios = require("axios");

class HttpClient {
  async post(url, data) {
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      throw new Error(`HTTP error: ${error.message}`);
    }
  }
}

module.exports = HttpClient;
