# Get All View States
Extract all view-state related values from an html string parsed by [cheerio](https://github.com/MatthewMueller/cheerio). On some ASP webpages, there is a 1 or more view state values. There is a hidden form element with id `__VIEWSTATECOUNT`. This module extracts this view state count, and then extracts each individual view state value


# Usage

```javascript
var getAllViewStates = require('get-all-view-states')
var html = 'some html string with view state values'
var $ = cheerio(html)
var viewStates = getAllViewStates($)
```

In the example above, viewStates is an object that looks like

```javascript
{
    "__VIEWSTATEFIELDCOUNT": 4,
    "__VIEWSTATE": 'sdofijdsofje',
    "__VIEWSTATE1": '1dsfsdf',
    "__VIEWSTATE2": '20dk2md9',
    "__VIEWSTATE3": '93ms923msd923nbdsvas'
}
```


