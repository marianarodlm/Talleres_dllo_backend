const express = require('express');
const router = express.Router();
const taller = require('../talleres/taller-01.js');

router.post('/convertidor-temp', (req, res) => {
  try {
    const output = taller.convertidor_temp(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

router.post('/resolvedor', (req, res) => {
  try {
    const output = taller.resolvedor(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

router.post('/mejor-paridad', (req, res) => {
  try {
    const output = taller.mejor_paridad(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

router.post('/peor-paridad', (req, res) => {
  try {
    const output = taller.peor_paridad(req.body);
    res.json({ ok: true, data: output });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

module.exports = router;
