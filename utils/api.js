const axios = require("axios");

const api = {
  getUser(username) {
    return new Promise(function(resolve, reject) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(function(response){
          const avatar = JSON.stringify(response.data.avatar_url);
          resolve(avatar);
        })

  })
}
};

module.exports = api;
