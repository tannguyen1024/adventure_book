const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT story.id, story_title, story_description, story_path, username as author FROM story JOIN author ON story.id=author.story_id
JOIN "user" on "user"."id"=author.user_id;`
  pool.query(query).then((result)=>{
    res.send(result.rows);
  }).catch((error)=>{
    console.log(error)
    alert('Error with GET Route')
  })
});

module.exports = router;
