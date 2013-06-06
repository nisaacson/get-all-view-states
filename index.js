module.exports = function($) {
  var viewStateFieldCount = $('#__VIEWSTATEFIELDCOUNT')
  if (viewStateFieldCount.length === 0) {
    return null
  }
  var count = viewStateFieldCount.attr('value').trim()
  var indices = []
  for (var i = 1; i < count; i++) {
    indices.push(i)
  }
  var output = indices.reduce(function (a, index) {
    var value = getViewStateForIndex($, index)
    var key = 'viewState' + index
    a[key] = value
    return a
  }, {})
  output.viewStateFieldCount = count
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
