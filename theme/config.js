'use strict';

module.exports = {
    root: __dirname,
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: true,
    filters: require('./helpers/filters'),
    locals: require('./helpers/locals')
};
