const fetch = require("node-fetch");

async function ScrapperWrapper(url, parser) {

  async function getHTML() {
    const response = await fetch(url)
    const html = await response.text()
    return html
  }

  async function parseData(html) {
    const data = await parser(html)

    if (!(typeof data === 'object' && data.suspected && data.confirmed && data.negative)) {
      throw new Error('Invalid format!')
    }

    return data
  }

  const html = await getHTML()
  return await parseData(html)
}

module.exports = ScrapperWrapper
