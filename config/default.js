'use strict';

var path = require('path');

module.exports = {
    port: process.env.PORT || 3000,
    mongodb: {
        url : 'mongodb://127.0.0.1:27017/club'
    },
    schemeConf: path.join(__dirname, './default.scheme'),
    routerConf: 'routers',
    renderConf: path.join(__dirname, '../theme/config')
};
