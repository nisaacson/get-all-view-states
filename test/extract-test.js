var getAllViewStates = require('../')
describe('Extract View State', function () {
  it('should extract data', function () {
    var html = fs.readFileSync(path.join(__dirname, 'data/sample.html'),'utf8')
    var $ = cheerio.load(html)
  })
})
