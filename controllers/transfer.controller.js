var db= require('../db')
var shortid = require('shortid');

module.exports.create = (req, res, next) => {
    res.render('transfer/create');
};

module.exports.postCreate = (req, res, next) => {
    var data = {
        id : shortid.generate(),
        amount : parseInt(req.body.amount),
        accountId : req.body.accountId,
        userId : req.signedCookies.userId
    }
    //req.body... : phai giong voi name trong pug
    db.get('transfer').push(data).write();
    res.render('transfer/create');
};