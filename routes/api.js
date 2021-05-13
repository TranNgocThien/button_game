var express = require('express');
var router = express.Router();
var current_step = "blue";
var check_yellow_button = 0;

/* Post transition step. */
router.post('/transition', function(req, res, next) {
  var step = req.body.data;
  var data = {
    code: 200,
    data: current_step
  }
  // Check current step is blue or not
  if(current_step == "blue"){
    // check next step is yellow and consecutively
    if(step=="yellow"&&check_yellow_button==1){
      data.code = 400;
      data.data = "You can't click "+req.body.data+" button too much!";
    }else{
      current_step = step;
      step=="yellow"?check_yellow_button=1:check_yellow_button=0;
      data.data = current_step;
    }
  }else{
    // check next step is not blue button
    if(step != "blue"){
      data.code = 400;
      data.data = "You can't click "+req.body.data+" button right now!";
    }else{
      current_step = step;
      data.data = current_step;
    }
  }

  res.send(data);
});

/* Post reset step. */
router.post('/reset', function(req, res, next) {
  current_step = "blue";
  check_yellow_button = 0;
  var data = {
    code: 200,
    data: "Reset Game Success"
  }
  res.send(data);
});

module.exports = router;
