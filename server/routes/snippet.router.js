const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  id = req.params.id;
  const query = `SELECT story.id as story_id, story_title, story_description, story_path, snippet.id as snippet_id, snip_title, snip_description, snip_ending, snip_path FROM story JOIN snippet ON story.id=snippet.story_id WHERE story.id=$1 ORDER BY snippet.id LIMIT 1;`
  pool.query(query, [id]).then((result)=>{
    console.log(result.rows)
    res.send(result.rows);
  }).catch((error)=>{
    console.log(error)
    alert('Error with GET Route')
  })
});

router.get('/child/:id', (req, res) => {
  id = req.params.id;
  const query = `SELECT junction.id, parent, child, action FROM snippet JOIN junction ON snippet.id=junction.parent WHERE junction.parent=$1;`
  pool.query(query, [id]).then((result) => {
    console.log('Here are your results:',result.rows)
    res.send(result.rows);
  }).catch((error) => {
    console.log(error)
  })
});

module.exports = router;
