var ui = {};

ui.collapse = require('./collapse');
ui.modal = require('./modal');
ui.ui = require('./ui');
ui.ajax = require('./ajax');
ui.date = require('./date');


window && (window.oc = ui);

if(module && module.exports){
    module.exports = ui;
}
