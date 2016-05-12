'use strict';

var User = require('../models').User;
var request = require('co-supertest');
var app = require('../app');

describe('/signup', function() {
    var agent = request.agent(app);

    before(function (done) {
        User.remove({name:'myName'}, done);
    });

    after(function (done) {
        User.remove({name:'myName'}, done);
    });

    it('GET /signup without cookie', function* () {
        yield agent.get('/signup').expect(200).end();
    });

    it('POST /sigup without cookie', function* () {
        yield agent
            .post('/signup')
            .send({
                name:'myName',
                email: 'myname@ple.com',
                password: '123456',
                re_password : '123456',
                gender: '男',
                signature: 'this is signature'
            })
            .expect(302)
            .end();
    });

    it('GET /signup with cookie', function* () {
        yield agent.get('/signup').expect(302).end();
    });
});
