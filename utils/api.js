const axios = require("axios");

const api = {
  getUser(username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(function(response){
        console.log(response.data);
        return response.data.avatar_url;
      })

  }
};

module.exports = api;
