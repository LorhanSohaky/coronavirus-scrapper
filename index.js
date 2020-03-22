const { router, get } = require("microrouter");
const { json, send } = require("micro");

const listCounties = require("./src/index");

routeListCounties = (req, res) => listCounties()
  .then(list => list)

module.exports = router(
  get('/', routeListCounties)
)