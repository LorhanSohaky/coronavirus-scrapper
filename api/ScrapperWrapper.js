const fetch = require("node-fetch");

async function ScrapperWrapper(url, parser) {

  async function getHTML() {
    const response = await fetch(url)
    const html = await response.text()
    return html
  }

  async function parseData(html) {
    const data = await parser(html)

    if (!(typeof data === 'object' && typeof data.suspected === "number" && typeof data.confirmed === "number" && typeof data.negative === "number")) {
      throw new Error(`Invalid format!\n${JSON.stringify(data)}`)
    }

    return data
  }

  const html = await getHTML()
  return await parseData(html)
}

module.exports = ScrapperWrapper
