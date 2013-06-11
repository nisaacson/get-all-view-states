var should = require('should')
var fs = require('fs')
var path = require('path')
var cheerio = require('cheerio')
var getAllViewStates = require('../')
describe('Extract View State', function () {
  it('should extract data', function () {
    var desiredViewStateCount = '15'
    var html = fs.readFileSync(path.join(__dirname, 'data/sample.html'),'utf8')
    var $ = cheerio.load(html)
    var viewStates = getAllViewStates($)
    should.exist(viewStates)
    should.exist(viewStates['__VIEWSTATEFIELDCOUNT'])
    should.exist(viewStates['__VIEWSTATE'])
    var count = viewStates['__VIEWSTATEFIELDCOUNT']
    count.should.eql(desiredViewStateCount)
  })
})
