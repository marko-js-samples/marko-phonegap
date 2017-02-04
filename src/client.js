var attachFastClick = require('fastclick');
var numberSpinner = require('./components/number-spinner');

attachFastClick(document.body);

numberSpinner.renderSync({
    value: 5
}).appendTo(document.body);
