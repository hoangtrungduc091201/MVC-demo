const db= require('../db')

module.exports.index = (req,res) => {
    // console.log(req.query.page);
    var page= parseInt(req.query.page) || 1; //n
    var perPage = 8; //x
    var start = (page-1)*perPage;
    var end = page*perPage;
    //cach 2
    // var drop = (page-1)*perPage;
    // console.log(typeof req.query.page)
    res.render('products/index', {
        products: db.get('products').value().slice(start, end)
        // products: db.get('products').drop(drop).take(perPage).value()
    })
};