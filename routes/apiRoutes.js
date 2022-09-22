const { application } = require('express')
const db = require('../db/db.json')

app.get('/api/notes', (req, res) => res.json(db));