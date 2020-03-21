const wrapper = require("./ScrapperWrapper");
const parsers = require("./parsers");

const counties = [
  { ibge_code: '3509502', name: 'Campinas', uf: 'SP', url: 'https://covid-19.campinas.sp.gov.br/', parser: parsers.campinasParser }
]

const listCounties = () => Promise.all(
  counties.map(({ ibge_code, name, url, parser }) => wrapper(url, parser)
    .then(data => ({ ibge_code, name, ...data }))))


module.exports = listCounties


