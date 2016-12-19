module.exports = (express) => {

  const rpio = require('rpio');

  // make sure that bad boy is off....
  rpio.open(16, rpio.OUTPUT, rpio.LOW);
  var trigger = false;

  const router = express.Router(); // eslint-disable-line new-cap

  function errHandler(err, res) {
    res.status(500).send(err);
  }

  function respondOk(res) {
    res.status(200).json({ success: true });
  }

  router.route('/toggle').get((req, res) => {
    if (trigger) {
      rpio.write(16, rpio.LOW);
    } else {
      console.log('setting it to high....');
      rpio.write(16, rpio.HIGH);
    }
    trigger = !trigger;
    respondOk(res);
  });

  return router;
};
