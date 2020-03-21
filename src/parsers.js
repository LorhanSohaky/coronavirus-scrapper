const cheerio = require("cheerio");

const campinasParser = (html) => {
  const $ = cheerio.load(html)

  const fields = ['negative', 'suspected', 'confirmed']
  const obj = {}

  $('.numero').each(function (i) {
    obj[fields[i]] = $(this).children('span').text();
  })

  return obj
}

module.exports = {
  campinasParser
}