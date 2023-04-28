var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/book', function(req, res, next) {
  res.render('book');
});

router.post('/book', function(req, res, next) {
  res.render('book');
   Username= req.body.name;
   Email= req.body.email;
   Phone_no= req.body.phone;
   address= req.body.address;
   location= req.body.location;
   guests= req.body.guests;
   arrivals= req.body.arrivals;
   leaving= req.body.leaving;
   pack=req.body.package;
   hotel_type=req.body.hotel_type;
   console.log(pack,hotel_type)
});

router.get('/package', function(req, res, next) {
  res.render('package');
});


router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/pack1', function(req, res, next) {
  res.render('pack1');
});

router.get('/pack2', function(req, res, next) {
  res.render('pack2');
});

router.get('/pack3', function(req, res, next) {
  res.render('pack3');
});

router.get('/pack4', function(req, res, next) {
  res.render('pack4');
});

router.get('/pack5', function(req, res, next) {
  res.render('pack5');
});

router.get('/pack6', function(req, res, next) {
  res.render('pack6');
});

router.get('/pack7', function(req, res, next) {
  res.render('pack7');
});

router.get('/pack8', function(req, res, next) {
  res.render('pack8');
});

router.get('/pack8', function(req, res, next) {
  res.render('pack8');
});

router.get('/pack9', function(req, res, next) {
  res.render('pack9');
});

router.get('/pack10', function(req, res, next) {
  res.render('pack10');
});

router.get('/pack11', function(req, res, next) {
  res.render('pack11');
});

router.get('/pack12', function(req, res, next) {
  res.render('pack12');
});

router.get('/pack13', function(req, res, next) {
  res.render('pack13');
});

router.get('/pack14', function(req, res, next) {
  res.render('pack14');
});

router.get('/pack15', function(req, res, next) {
  res.render('pack15');
});

module.exports = router;
