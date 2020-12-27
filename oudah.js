
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.post('/data',(request,response) => {

  response.send({"message":"Hello","name":"moha oudah"})

});

router.get('/greeting/:name',(request,response) => {
    var info = req.param.name;
    
    response.send({"message":"Hello","name":info})

  });
app.use( router);
app.listen(3000, () =>
  console.log('listening :)')
)