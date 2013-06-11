var _ = require('underscore')
module.exports = function($) {
  var viewStateFieldCount = $('#__VIEWSTATEFIELDCOUNT')
  if (viewStateFieldCount.length === 0) {
    return null
  }
  var viewState0 = $('#__VIEWSTATE')
  if (viewState0.length === 0) {
    return null
  }

  var count = viewStateFieldCount.attr('value').trim()
  var indices = _.range(1, count)
  var output = indices.reduce(function(a, index) {
    var value = getViewStateForIndex($, index)
    var key = '__VIEWSTATE' + index
    a[key] = value
    return a
  }, {})
  output['__VIEWSTATEFIELDCOUNT'] = count
  output["__VIEWSTATE"] = viewState0.attr('value').trim()
  return output

}

function getViewStateForIndex($, index) {
  var id = '#__VIEWSTATE' + index
  var value = getValueForID($, id)
  return value
}

function getValueForID($, id) {
  var element = $(id)
  if (element.length === 0) {
    return null
  }
  var value = element.attr('value').trim()
  return value
}
