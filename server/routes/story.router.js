const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT * FROM "story";`
  pool.query(query).then((result)=>{
    res.send(result.rows);
  }).catch((error)=>{
    console.log(error)
    alert('Error with GET Route')
  })
});

module.exports = router;
