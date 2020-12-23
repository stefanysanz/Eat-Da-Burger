const router = require('express').Router()

router.get('/', (req, res) => res.redirect('/api/burgers'))
router.use('/api', require('./burgers_controller.js'))

module.exports = router