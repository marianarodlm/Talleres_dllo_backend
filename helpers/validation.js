function requireFields(body, fields = []) {
  for (const f of fields) {
    if (body[f] === undefined) throw new Error(`${f} es requerido`);
  }
}
module.exports = { requireFields };
