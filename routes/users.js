var express = require('express');
var router = express.Router();

/* GET users listing. */

router.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

router.use((req, res, next)  => {
  console.log('Middleware 1');
  next();
});

router.get('/', function(req, res, next) {

  const users = [ 
    {
      id:1,
      name: "Ivan",
  }
]
  res.json(users);
});



module.exports = router;
