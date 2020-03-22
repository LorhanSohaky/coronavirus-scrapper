const { router, get } = require("microrouter");
const listCounties = require("./list-counties");

routeListCounties = (req, res) => listCounties().then(list => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(list))
})


module.exports = router(
  get('/', routeListCounties)
)