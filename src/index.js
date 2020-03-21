const wrapper = require("./ScrapperWrapper");
const parsers = require("./parsers");

const counties = [
  { ibge_code: '3509502', name: 'Campinas', uf: 'SP', url: 'https://covid-19.campinas.sp.gov.br/', parser: parsers.campinasParser },
  { ibge_code: '3503208', name: 'Araraquara', uf: 'SP', url: 'http://www.araraquara.sp.gov.br/coronavirus', parser: parsers.araraquaraSPParser }
]

const listCounties = () => Promise.all(
  counties.map(({ ibge_code, name, url, parser }) => wrapper(url, parser)
    .then(data => ({ ibge_code, name, ...data }))))


module.exports = listCounties


