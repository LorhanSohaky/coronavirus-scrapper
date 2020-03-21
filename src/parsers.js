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

const araraquaraSPParser = (html) => {
  const $ = cheerio.load(html)

  const fields = ['suspected', 'confirmed', 'negative']
  const obj = {}

  $('h3[data-mce-style]').each(function (i) {
    const text = $(this).children('strong').text();

    obj[fields[i]] = Number(text.substring(text.lastIndexOf(" ") + 1, text.length));
  })

  return obj
}

module.exports = {
  campinasParser,
  araraquaraSPParser
}