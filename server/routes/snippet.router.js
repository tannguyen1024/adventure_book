const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/current/:id', (req, res) => {
  id = req.params.id
  const query = `SELECT * FROM story JOIN snippet on story.id=snippet.story_id WHERE story.id=$1 ORDER BY snippet.id LIMIT 1;`
  pool.query(query, [id]).then((result)=>{
    res.send(result.rows);
  }).catch((error)=>{
    console.log(error)
    alert('Error with GET Route')
  })
});

module.exports = router;
