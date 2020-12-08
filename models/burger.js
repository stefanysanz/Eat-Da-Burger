const orm = require('../config/orm.js')

const user = {
  getAll(cb) {
    orm.getAll('burgers', burgers => cb(burgers))
  },
  create(burgers, cb) {
    orm.create('burgers', burgers, () => cb())
  },
  update(changes, id, cb) {
    orm.update('burgers', changes, { id }, () => cb())
  },
  delete(id, cb) {
    orm.delete('burgers', { id }, () => cb())
  }
}

module.exports = burgers
