const express = require('express');
const router = express.Router();
const taller = require('../talleres/taller-03.js');

router.post('/desglosar-string', (req, res) => {
  try {
    const output = taller.desglosarString(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

router.post('/two-sum', (req, res) => {
  try {
    const output = taller.twoSum(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

router.post('/conversion-romana', (req, res) => {
  try {
    const output = taller.conversionRomana(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

router.post('/descomposicion', (req, res) => {
  try {
    const output = taller.descomposicion(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

module.exports = router;
