const listCounties = require("./src/index");

listCounties()
  .then(list => console.log(list))
  .catch(err => console.error(err))
