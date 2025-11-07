const express = require('express');
const router = express.Router();
const taller = require('../talleres/taller-02.js');


router.post('/find-max', (req, res) => {
  try {
    const output = taller.findMax(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

router.post('/includes', (req, res) => {
  try {
    const output = taller.includes(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});


router.post('/sum', (req, res) => {
  try {
    const output = taller.sum(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});


router.post('/missing-numbers', (req, res) => {
  try {
    const output = taller.missingNumbers(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

module.exports = router;
